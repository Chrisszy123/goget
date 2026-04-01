import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase';
import { sendWaitlistConfirmation } from '@/lib/resend';

interface WaitlistResponse {
  success: boolean;
  message: string;
  alreadyExists?: boolean;
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest): Promise<NextResponse<WaitlistResponse>> {
  try {
    const body = await request.json() as { email?: string; referral_source?: string };
    const { email, referral_source } = body;

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, message: 'Email is required.' },
        { status: 400 }
      );
    }

    const trimmedEmail = email.trim().toLowerCase();

    if (!isValidEmail(trimmedEmail)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const supabase = createServerSupabaseClient();

    if (!supabase) {
      return NextResponse.json(
        { success: false, message: 'Service not yet configured. Please try again later.' },
        { status: 503 }
      );
    }

    // Check for duplicate
    const { data: existing } = await supabase
      .from('waitlist')
      .select('id')
      .eq('email', trimmedEmail)
      .single();

    if (existing) {
      return NextResponse.json(
        { success: true, message: "You're already on the list!", alreadyExists: true },
        { status: 200 }
      );
    }

    // Insert new entry
    const { error: insertError } = await supabase.from('waitlist').insert({
      email: trimmedEmail,
      referral_source: referral_source || null,
    });

    if (insertError) {
      // Handle unique constraint violation race condition
      if (insertError.code === '23505') {
        return NextResponse.json(
          { success: true, message: "You're already on the list!", alreadyExists: true },
          { status: 200 }
        );
      }
      console.error('Supabase insert error:', insertError);
      return NextResponse.json(
        { success: false, message: 'Something went wrong. Please try again.' },
        { status: 500 }
      );
    }

    // Send confirmation email (non-blocking)
    sendWaitlistConfirmation(trimmedEmail).catch((err: unknown) => {
      console.error('Failed to send confirmation email:', err);
    });

    return NextResponse.json(
      { success: true, message: "You're on the waitlist! Check your email." },
      { status: 201 }
    );
  } catch (err) {
    console.error('Waitlist API error:', err);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

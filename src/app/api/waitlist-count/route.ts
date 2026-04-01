import { NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase';

interface CountResponse {
  count: number;
}

export async function GET(): Promise<NextResponse<CountResponse>> {
  try {
    const supabase = createServerSupabaseClient();

    if (!supabase) {
      return NextResponse.json({ count: 0 }, { status: 200 });
    }

    const { count, error } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true });

    if (error) {
      console.error('Count query error:', error);
      return NextResponse.json({ count: 0 }, { status: 200 });
    }

    return NextResponse.json(
      { count: count ?? 0 },
      {
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        },
      }
    );
  } catch (err) {
    console.error('Waitlist count error:', err);
    return NextResponse.json({ count: 0 }, { status: 200 });
  }
}

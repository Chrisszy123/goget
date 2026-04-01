import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

function generateReferralToken(email: string): string {
  // Simple hash-based referral token
  let hash = 0;
  for (let i = 0; i < email.length; i++) {
    const char = email.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  const token = Math.abs(hash).toString(36).toUpperCase().padStart(8, '0').slice(0, 8);
  return token;
}

export async function sendWaitlistConfirmation(email: string): Promise<void> {
  const referralToken = generateReferralToken(email);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://goget.app';

  await resend.emails.send({
    from: 'GoGet <hello@goget.app>',
    to: email,
    subject: "You're on the GoGet waitlist 🟢",
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>You're on the GoGet waitlist</title>
</head>
<body style="margin:0;padding:0;background-color:#08090A;font-family:'DM Sans',Arial,sans-serif;color:#F0F0F0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;padding:40px 20px;">
    <tr>
      <td>
        <!-- Logo -->
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:40px;">
          <tr>
            <td>
              <span style="font-size:28px;font-weight:700;letter-spacing:-0.5px;">
                <span style="color:#F0F0F0;">Go</span><span style="color:#00E5A0;">Get</span>
              </span>
            </td>
          </tr>
        </table>

        <!-- Card -->
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#111214;border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:40px;margin-bottom:32px;">
          <tr>
            <td>
              <!-- Status pill -->
              <div style="display:inline-block;background:rgba(0,229,160,0.1);border:1px solid rgba(0,229,160,0.3);border-radius:100px;padding:6px 16px;margin-bottom:24px;">
                <span style="color:#00E5A0;font-size:13px;font-weight:600;">● You're in</span>
              </div>

              <h1 style="font-size:32px;font-weight:700;color:#F0F0F0;margin:0 0 16px;line-height:1.2;">
                You're on the waitlist.
              </h1>

              <p style="font-size:16px;color:#8A8A9A;line-height:1.6;margin:0 0 32px;">
                We'll notify you the moment GoGet goes live. Early access means better rates and your free dollar card on signup.
              </p>

              <!-- Referral section -->
              <div style="background:rgba(0,229,160,0.05);border:1px solid rgba(0,229,160,0.15);border-radius:12px;padding:24px;margin-bottom:24px;">
                <p style="font-size:13px;color:#8A8A9A;margin:0 0 8px;text-transform:uppercase;letter-spacing:0.05em;">Your referral link</p>
                <p style="font-size:15px;color:#00E5A0;font-weight:600;margin:0 0 16px;word-break:break-all;">
                  ${siteUrl}/join?ref=${referralToken}
                </p>
                <p style="font-size:13px;color:#8A8A9A;margin:0;">
                  Share this link. Friends who sign up through yours get priority access.
                </p>
              </div>

              <!-- What's coming -->
              <p style="font-size:14px;color:#8A8A9A;margin:0 0 12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">What to expect</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
                    <span style="color:#00E5A0;margin-right:12px;">→</span>
                    <span style="color:#F0F0F0;font-size:14px;">Instant crypto to naira offramp</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
                    <span style="color:#00E5A0;margin-right:12px;">→</span>
                    <span style="color:#F0F0F0;font-size:14px;">Virtual dollar card funded from crypto</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;">
                    <span style="color:#00E5A0;margin-right:12px;">→</span>
                    <span style="color:#F0F0F0;font-size:14px;">Live rates, no hidden fees</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <!-- Footer -->
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align:center;padding-top:24px;border-top:1px solid rgba(255,255,255,0.06);">
              <p style="font-size:12px;color:#8A8A9A;margin:0 0 8px;">
                © 2026 GoGet. Built in Nigeria.
              </p>
              <p style="font-size:12px;color:#8A8A9A;margin:0;">
                No spam. Just launch updates. <a href="#" style="color:#00E5A0;text-decoration:none;">Unsubscribe</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
  });
}

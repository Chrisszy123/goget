import { Resend } from 'resend';

function getResendClient(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key || key === 'your_resend_api_key') return null;
  return new Resend(key);
}

function generateReferralToken(email: string): string {
  let hash = 0;
  for (let i = 0; i < email.length; i++) {
    const char = email.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36).toUpperCase().padStart(8, '0').slice(0, 8);
}

function buildEmailHtml(email: string, referralToken: string, siteUrl: string): string {
  const referralLink = `${siteUrl}/join?ref=${referralToken}`;
  // Solid hex equivalents for email-client compatibility (no rgba)
  const BG = '#08090A';
  const CARD_BG = '#111214';
  const CARD_BORDER = '#1E1F22';
  const GREEN = '#00E5A0';
  const GREEN_DIM = '#0D2420'; // solid approx of rgba(0,229,160,0.08)
  const GREEN_BORDER = '#143D2E'; // solid approx of rgba(0,229,160,0.18)
  const PURPLE = '#7B61FF';
  const TEXT = '#F0F0F0';
  const MUTED = '#8A8A9A';
  const DIVIDER = '#1A1B1E';

  return `<!DOCTYPE html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="x-apple-disable-message-reformatting"/>
  <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no"/>
  <title>You're on the GoGet waitlist</title>
  <!--[if mso]>
  <noscript>
    <xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml>
  </noscript>
  <![endif]-->
  <style>
    @media only screen and (max-width:600px) {
      .email-container { width:100% !important; }
      .hero-headline { font-size:28px !important; }
      .section-pad { padding:28px 20px !important; }
      .ref-link { font-size:13px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;word-spacing:normal;background-color:${BG};">

  <!-- Preheader (hidden) -->
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">
    You're in. GoGet is launching soon — here's your early access spot and referral link. &#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;
  </div>

  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:${BG};">
    <tr>
      <td align="center" style="padding:32px 16px;">

        <!-- Email container -->
        <table role="presentation" class="email-container" cellpadding="0" cellspacing="0" width="560" style="max-width:560px;">

          <!-- ═══ HEADER ═══ -->
          <tr>
            <td style="padding:0 0 28px 0;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td>
                    <!-- Wordmark -->
                    <span style="font-family:Arial,Helvetica,sans-serif;font-size:26px;font-weight:700;letter-spacing:-0.5px;line-height:1;">
                      <span style="color:${TEXT};">Go</span><span style="color:${GREEN};">Get</span>
                    </span>
                  </td>
                  <td align="right" style="vertical-align:middle;">
                    <!-- Status pill -->
                    <span style="display:inline-block;background-color:${GREEN_DIM};border:1px solid ${GREEN_BORDER};border-radius:100px;padding:5px 14px;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;color:${GREEN};letter-spacing:0.02em;">
                      ● WAITLIST
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ═══ HERO CARD ═══ -->
          <tr>
            <td style="background-color:${CARD_BG};border:1px solid ${CARD_BORDER};border-radius:16px;overflow:hidden;">

              <!-- Top accent bar -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="height:3px;background-color:${GREEN};border-radius:16px 16px 0 0;"></td>
                </tr>
              </table>

              <!-- Card body -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" class="section-pad" style="padding:40px 40px 36px;">
                <tr>
                  <td>

                    <!-- Headline -->
                    <h1 class="hero-headline" style="font-family:Arial,Helvetica,sans-serif;font-size:34px;font-weight:700;color:${TEXT};margin:0 0 14px;line-height:1.15;letter-spacing:-0.5px;">
                      You&rsquo;re on the waitlist.
                    </h1>

                    <!-- Sub -->
                    <p style="font-family:Arial,Helvetica,sans-serif;font-size:16px;color:${MUTED};line-height:1.65;margin:0 0 32px;">
                      We&rsquo;ll notify you the moment GoGet goes live.<br/>
                      Early access = <span style="color:${TEXT};font-weight:600;">better rates</span> + a <span style="color:${TEXT};font-weight:600;">free dollar card</span> on signup.
                    </p>

                    <!-- ─ Referral box ─ -->
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:${GREEN_DIM};border:1px solid ${GREEN_BORDER};border-radius:12px;margin-bottom:32px;">
                      <tr>
                        <td style="padding:22px 24px;">
                          <p style="font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;color:${MUTED};text-transform:uppercase;letter-spacing:0.08em;margin:0 0 10px;">Your referral link</p>
                          <p class="ref-link" style="font-family:'Courier New',Courier,monospace;font-size:14px;font-weight:600;color:${GREEN};margin:0 0 12px;word-break:break-all;line-height:1.5;">
                            <a href="${referralLink}" style="color:${GREEN};text-decoration:none;">${referralLink}</a>
                          </p>
                          <p style="font-family:Arial,Helvetica,sans-serif;font-size:13px;color:${MUTED};margin:0;line-height:1.5;">
                            Share it. Every friend who signs up through your link moves you up the queue.
                          </p>
                        </td>
                      </tr>
                    </table>

                    <!-- ─ What's coming ─ -->
                    <p style="font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;color:${MUTED};text-transform:uppercase;letter-spacing:0.08em;margin:0 0 14px;">
                      What you&rsquo;re getting
                    </p>

                    <!-- Feature rows -->
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="padding:11px 0;border-bottom:1px solid ${DIVIDER};">
                          <table role="presentation" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="width:28px;vertical-align:top;padding-top:1px;">
                                <span style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:${GREEN};font-weight:700;">→</span>
                              </td>
                              <td>
                                <span style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:${TEXT};font-weight:600;">Instant crypto &rarr; naira offramp</span>
                                <span style="font-family:Arial,Helvetica,sans-serif;font-size:13px;color:${MUTED};display:block;margin-top:2px;">USDT, USDC, BTC, ETH, BNB. Under 5 minutes.</span>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:11px 0;border-bottom:1px solid ${DIVIDER};">
                          <table role="presentation" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="width:28px;vertical-align:top;padding-top:1px;">
                                <span style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:${GREEN};font-weight:700;">→</span>
                              </td>
                              <td>
                                <span style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:${TEXT};font-weight:600;">Virtual dollar card</span>
                                <span style="font-family:Arial,Helvetica,sans-serif;font-size:13px;color:${MUTED};display:block;margin-top:2px;">Funded from crypto. Spend globally, no rejections.</span>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:11px 0;">
                          <table role="presentation" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="width:28px;vertical-align:top;padding-top:1px;">
                                <span style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:${GREEN};font-weight:700;">→</span>
                              </td>
                              <td>
                                <span style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:${TEXT};font-weight:600;">Live rates, no hidden fees</span>
                                <span style="font-family:Arial,Helvetica,sans-serif;font-size:13px;color:${MUTED};display:block;margin-top:2px;">The rate you see is the rate you get. Always.</span>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </table>

              <!-- Card CTA row -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-top:1px solid ${DIVIDER};">
                <tr>
                  <td style="padding:24px 40px;" align="center">
                    <a href="${referralLink}"
                       style="display:inline-block;background-color:${GREEN};color:#08090A;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;text-decoration:none;padding:13px 36px;border-radius:100px;letter-spacing:0.01em;">
                      Share Your Referral Link
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- ═══ CRYPTO STRIP ═══ -->
          <tr>
            <td style="padding:20px 0 0;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:${CARD_BG};border:1px solid ${CARD_BORDER};border-radius:12px;">
                <tr>
                  <td style="padding:16px 24px;" align="center">
                    <span style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:${MUTED};">
                      Supports &nbsp;
                      <span style="color:#26A17B;font-weight:700;">USDT</span> &nbsp;·&nbsp;
                      <span style="color:#2775CA;font-weight:700;">USDC</span> &nbsp;·&nbsp;
                      <span style="color:#F7931A;font-weight:700;">BTC</span> &nbsp;·&nbsp;
                      <span style="color:#627EEA;font-weight:700;">ETH</span> &nbsp;·&nbsp;
                      <span style="color:#F3BA2F;font-weight:700;">BNB</span>
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ═══ SOCIAL PROOF ═══ -->
          <tr>
            <td style="padding:20px 0 0;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td width="33%" style="padding:0 6px 0 0;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:${CARD_BG};border:1px solid ${CARD_BORDER};border-radius:10px;">
                      <tr>
                        <td style="padding:16px 14px;" align="center">
                          <p style="font-family:Arial,Helvetica,sans-serif;font-size:18px;font-weight:700;color:${GREEN};margin:0 0 3px;letter-spacing:-0.5px;">&lt;5 min</p>
                          <p style="font-family:Arial,Helvetica,sans-serif;font-size:11px;color:${MUTED};margin:0;">avg payout</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td width="33%" style="padding:0 3px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:${CARD_BG};border:1px solid ${CARD_BORDER};border-radius:10px;">
                      <tr>
                        <td style="padding:16px 14px;" align="center">
                          <p style="font-family:Arial,Helvetica,sans-serif;font-size:18px;font-weight:700;color:${PURPLE};margin:0 0 3px;letter-spacing:-0.5px;">Live</p>
                          <p style="font-family:Arial,Helvetica,sans-serif;font-size:11px;color:${MUTED};margin:0;">market rates</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td width="33%" style="padding:0 0 0 6px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:${CARD_BG};border:1px solid ${CARD_BORDER};border-radius:10px;">
                      <tr>
                        <td style="padding:16px 14px;" align="center">
                          <p style="font-family:Arial,Helvetica,sans-serif;font-size:18px;font-weight:700;color:#FF6B35;margin:0 0 3px;letter-spacing:-0.5px;">&#8358;0</p>
                          <p style="font-family:Arial,Helvetica,sans-serif;font-size:11px;color:${MUTED};margin:0;">hidden fees</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ═══ FOOTER ═══ -->
          <tr>
            <td style="padding:28px 0 0;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-top:1px solid ${DIVIDER};">
                <tr>
                  <td style="padding-top:24px;" align="center">
                    <p style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:${MUTED};margin:0 0 6px;">
                      &copy; 2026 GoGet &nbsp;·&nbsp; Built in Nigeria &#127475;&#127468;
                    </p>
                    <p style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:${MUTED};margin:0;">
                      No spam. Just launch updates.
                      &nbsp;<a href="${siteUrl}/unsubscribe?email=${encodeURIComponent(email)}" style="color:${MUTED};text-decoration:underline;">Unsubscribe</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
}

export async function sendWaitlistConfirmation(email: string): Promise<void> {
  const client = getResendClient();
  if (!client) {
    console.warn('Resend not configured — skipping confirmation email.');
    return;
  }

  const referralToken = generateReferralToken(email);
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://goget.app').replace(/\/$/, '');

  // Use RESEND_FROM_EMAIL env var so devs can use onboarding@resend.dev before domain is verified
  const fromAddress = process.env.RESEND_FROM_EMAIL || 'GoGet <onboarding@resend.dev>';

  const { error } = await client.emails.send({
    from: fromAddress,
    to: email,
    subject: "You're on the GoGet waitlist 🟢",
    html: buildEmailHtml(email, referralToken, siteUrl),
  });

  if (error) {
    throw new Error(`Resend error: ${error.message}`);
  }
}

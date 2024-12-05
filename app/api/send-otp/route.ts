// app/api/send-sms/route.js
import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

export async function POST(req: NextRequest) {
  try {
    const { phone_number } = await req.json();

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const serviceSid = process.env.TWILIO_SERVICE_SID;

    // Thay bằng Service SID thực tế
    if (!serviceSid) return
    const client = twilio(accountSid, authToken);

    const formattedPhoneNumber = phone_number.startsWith('+')
      ? phone_number
      : `+84${phone_number.slice(1)}`;

    const verification = await client.verify.v2.services(serviceSid)
      .verifications
      .create({ to: formattedPhoneNumber, channel: 'sms' });

    return NextResponse.json({ success: true, sid: verification.sid });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

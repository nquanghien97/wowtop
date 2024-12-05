// app/api/send-sms/route.js
import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

export async function POST(req: NextRequest) {
  try {
    const { phone_number } = await req.json();

    const accountSid = 'AC8acebcc3a49b11be6b2b6c81f81b2b8f'; 
    const authToken = '6c0da81bd85a428aaac09fe2b050cad1';
    const client = twilio(accountSid, authToken);

    const formattedPhoneNumber = phone_number.startsWith('+')
      ? phone_number
      : `+84${phone_number.slice(1)}`;

    const serviceSid = 'VA5a48eb7453309efb4eb022a6a774a0cc'; // Thay bằng Service SID thực tế
    const verification = await client.verify.v2.services(serviceSid)
      .verifications
      .create({ to: formattedPhoneNumber, channel: 'sms' });

    return NextResponse.json({ success: true, sid: verification.sid });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

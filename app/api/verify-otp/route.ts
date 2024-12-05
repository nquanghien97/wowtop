import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

export async function POST(req: NextRequest) {
  try {
    const { phone_number, otp } = await req.json(); // Nhận số điện thoại và OTP từ body request

    if (!phone_number || !otp) {
      throw new Error('Phone number and OTP are required.');
    }

    // Định dạng số điện thoại
    const formattedPhoneNumber = phone_number.startsWith('+')
      ? phone_number
      : `+84${phone_number.slice(1)}`; // Giả sử mặc định là Việt Nam

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const serviceSid = process.env.TWILIO_SERVICE_SID;

    const client = twilio(accountSid, authToken);
    if (!serviceSid) return
    const verificationCheck = await client.verify.v2.services(serviceSid)
      .verificationChecks
      .create({ to: formattedPhoneNumber, code: otp });

    if (verificationCheck.status === 'approved') {
      // OTP chính xác, trả về token hoặc thông tin đăng nhập
      return NextResponse.json({ success: true, message: 'OTP verified!' });
    }

    // OTP không hợp lệ
    return NextResponse.json({ success: false, message: 'Invalid OTP.' }, { status: 400 });
  } catch (error: any) {
    console.error('Error verifying OTP:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

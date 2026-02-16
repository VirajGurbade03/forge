import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json();

        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
            .update(body.toString())
            .digest('hex');

        const isAuthentic = expectedSignature === razorpay_signature;

        if (isAuthentic) {
            // Here you would typically update your database to mark the user as Pro
            return NextResponse.json({ success: true, message: "Payment verified successfully" });
        } else {
            return NextResponse.json({ success: false, message: "Invalid signature" }, { status: 400 });
        }
    } catch (error) {
        console.error('Razorpay Verification Error:', error);
        return NextResponse.json({ error: 'Verification failed' }, { status: 500 });
    }
}

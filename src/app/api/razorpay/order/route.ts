import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(req: Request) {
    try {
        const { amount, plan } = await req.json();

        const options = {
            amount: amount, // amount in the smallest currency unit (e.g., paise for INR)
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
            notes: {
                plan: plan,
            }
        };

        const order = await razorpay.orders.create(options);
        return NextResponse.json(order);
    } catch (error) {
        console.error('Razorpay Order Error:', error);
        return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
    }
}

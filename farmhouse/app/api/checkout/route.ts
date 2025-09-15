import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15" as any,
});

export async function POST(req: NextRequest) {
  const { cartItems } = await req.json();

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: cartItems.map((item: any) => ({
        price_data: {
          currency: "CAD",
          product_data: { name: item.name },
          unit_amount: Math.round(item.price * 100), // in cents
        },
        quantity: item.qty,
      })),
      mode: "payment",
      success_url: `${req.headers.get("origin")}/success`,
      cancel_url: `${req.headers.get("origin")}/cart`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Stripe checkout failed" }, { status: 500 });
  }
}

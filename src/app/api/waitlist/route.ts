import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, newsletterName, subscriberRange, newsletterLink } = body;

  if (!email || !newsletterName || !subscriberRange) {
    return NextResponse.json(
      { error: "Email, newsletter name, and subscriber range are required." },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("waitlist")
    .insert({
      email,
      newsletter_name: newsletterName,
      subscriber_range: subscriberRange,
      newsletter_link: newsletterLink || null,
    })
    .select("id")
    .single();

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json(
        { error: "This email is already on the waitlist." },
        { status: 409 }
      );
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, id: data.id });
}

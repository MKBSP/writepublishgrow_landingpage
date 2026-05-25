import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, blogLink } = body;

  if (!email) {
    return NextResponse.json(
      { error: "Email is required." },
      { status: 400 }
    );
  }

  const { error } = await supabase.from("newsletter_subscribers").insert({
    email,
    blog_link: blogLink || null,
  });

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json(
        { error: "Already subscribed." },
        { status: 409 }
      );
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

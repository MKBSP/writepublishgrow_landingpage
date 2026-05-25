import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, topic, link, message } = body;

  if (!name || !email || !topic || !message) {
    return NextResponse.json(
      { error: "Name, email, topic, and message are required." },
      { status: 400 }
    );
  }

  const { error } = await supabase.from("contacts").insert({
    name,
    email,
    topic,
    link: link || null,
    message,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

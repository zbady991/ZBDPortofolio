import { NextRequest } from "next/server";
import { writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Please fill out all fields." }), { status: 400 });
    }
    const now = new Date().toISOString();
    const isRunningOnVercel = !!process.env.VERCEL || process.env.NODE_ENV === "production";

    if (isRunningOnVercel) {
      // On Vercel, persistent filesystem writes are not supported. Skip writing and just acknowledge.
      console.log("Contact message (not persisted on Vercel):", { name, email, message, created_at: now });
      return new Response(JSON.stringify({ ok: true, persisted: false }), { status: 200 });
    }

    const dir = path.join(process.cwd(), "DATABASE");
    if (!existsSync(dir)) {
      await mkdir(dir, { recursive: true });
    }
    const csvPath = path.join(dir, "contact_message.csv");
    const line = `${JSON.stringify({ name, email, message, created_at: now })}\n`;
    await writeFile(csvPath, line, { encoding: "utf8", flag: "a" });
    return new Response(JSON.stringify({ ok: true, persisted: true }), { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Server error";
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
}



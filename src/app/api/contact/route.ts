import { NextResponse } from 'next/server';
import { z } from 'zod';

const ContactSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  message: z.string().min(10).max(2000)
});

// Simple in-memory rate limit bucket (non-production)
let recentHits: number[] = [];

export async function POST(request: Request) {
  const now = Date.now();
  recentHits = recentHits.filter(ts => now - ts < 60_000); // keep last minute
  if (recentHits.length > 30) {
    return NextResponse.json({ ok: false, error: 'Rate limit exceeded. Try later.' }, { status: 429 });
  }
  recentHits.push(now);

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON body.' }, { status: 400 });
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: parsed.error.flatten() }, { status: 422 });
  }

  const { name, email, message } = parsed.data;

  // Placeholder: integrate email service (Resend, SendGrid) or database storage.
  console.log('CONTACT_FORM_SUBMISSION', { name, email, message, at: new Date().toISOString() });

  return NextResponse.json({ ok: true, received: { name, email } });
}

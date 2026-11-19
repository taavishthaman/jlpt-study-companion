import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const q = await prisma.questionBank.findUnique({ where: { id: params.id } });
  if (!q) return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json({ ...q, options: JSON.parse(q.options) });
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const data: Record<string, unknown> = {};

  if (body.section !== undefined) data.section = body.section;
  if (body.level !== undefined) data.level = body.level;
  if (body.type !== undefined) data.type = body.type;
  if (body.prompt !== undefined) data.prompt = body.prompt;
  if (body.promptJp !== undefined) data.promptJp = body.promptJp;
  if (body.context !== undefined) data.context = body.context;
  if (body.contextJp !== undefined) data.contextJp = body.contextJp;
  if (body.options !== undefined) data.options = JSON.stringify(body.options);
  if (body.correct !== undefined) data.correct = body.correct;
  if (body.explanation !== undefined) data.explanation = body.explanation;
  if (body.explanationJp !== undefined) data.explanationJp = body.explanationJp;
  if (body.audio !== undefined) data.audio = body.audio;
  if (body.audioSlow !== undefined) data.audioSlow = body.audioSlow;
  if (body.verified !== undefined) data.verified = body.verified;
  if (body.source !== undefined) data.source = body.source;
  if (body.notes !== undefined) data.notes = body.notes;

  const q = await prisma.questionBank.update({ where: { id: params.id }, data });
  return NextResponse.json({ ...q, options: JSON.parse(q.options) });
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await prisma.questionBank.delete({ where: { id: params.id } });
  return NextResponse.json({ ok: true });
}

import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const section = searchParams.get("section");
  const level = searchParams.get("level");
  const type = searchParams.get("type");

  if (!section || !level) {
    return NextResponse.json({ error: "section and level required" }, { status: 400 });
  }

  const where: Record<string, unknown> = { section, level };
  if (type) where.type = type;

  const rows = await prisma.questionBank.findMany({ where, orderBy: { createdAt: "asc" } });

  const questions = rows.map((r) => ({
    id: r.id,
    level: r.level,
    section: r.section,
    type: r.type,
    prompt: r.prompt,
    promptJp: r.promptJp,
    context: r.context,
    contextJp: r.contextJp,
    options: JSON.parse(r.options),
    correct: r.correct,
    explanation: r.explanation,
    explanationJp: r.explanationJp,
    audio: r.audio,
    audioSlow: r.audioSlow,
    verified: r.verified,
    source: r.source,
  }));

  return NextResponse.json({ questions });
}

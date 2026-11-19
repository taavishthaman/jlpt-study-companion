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

  const limit = searchParams.get("limit");

  const rows = await prisma.questionBank.findMany({ where });

  // Fisher-Yates shuffle
  for (let i = rows.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [rows[i], rows[j]] = [rows[j], rows[i]];
  }

  const selected = limit ? rows.slice(0, parseInt(limit, 10)) : rows;

  const questions = selected.map((r) => {
    const opts: string[] = JSON.parse(r.options);
    const indices = opts.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    const shuffledOpts = indices.map((i) => opts[i]);
    const newCorrect = indices.indexOf(r.correct);

    return {
      id: r.id,
      level: r.level,
      section: r.section,
      type: r.type,
      prompt: r.prompt,
      promptJp: r.promptJp,
      context: r.context,
      contextJp: r.contextJp,
      options: shuffledOpts,
      correct: newCorrect,
      explanation: r.explanation,
      explanationJp: r.explanationJp,
      audio: r.audio,
      audioSlow: r.audioSlow,
      verified: r.verified,
      source: r.source,
    };
  });

  return NextResponse.json({ questions });
}

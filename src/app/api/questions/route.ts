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
  const verified = searchParams.get("verified");
  const type = searchParams.get("type");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "50");

  const where: Record<string, unknown> = {};
  if (section) where.section = section;
  if (level) where.level = level;
  if (type) where.type = type;
  if (verified === "true") where.verified = true;
  if (verified === "false") where.verified = false;

  const [questions, total] = await Promise.all([
    prisma.questionBank.findMany({
      where,
      orderBy: [{ section: "asc" }, { level: "asc" }, { type: "asc" }, { createdAt: "asc" }],
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.questionBank.count({ where }),
  ]);

  const parsed = questions.map((q) => ({
    ...q,
    options: JSON.parse(q.options),
  }));

  return NextResponse.json({ questions: parsed, total, page, pages: Math.ceil(total / limit) });
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();

  if (body.bulk && Array.isArray(body.questions)) {
    let count = 0;
    for (const q of body.questions) {
      await prisma.questionBank.create({
        data: {
          section: q.section,
          level: q.level,
          type: q.type,
          prompt: q.prompt,
          promptJp: q.promptJp || null,
          context: q.context || null,
          contextJp: q.contextJp || null,
          options: JSON.stringify(q.options),
          correct: q.correct,
          explanation: q.explanation || null,
          explanationJp: q.explanationJp || null,
          audio: q.audio || null,
          audioSlow: q.audioSlow || null,
          verified: q.verified ?? false,
          source: q.source || null,
          notes: q.notes || null,
        },
      });
      count++;
    }
    return NextResponse.json({ imported: count });
  }

  const q = await prisma.questionBank.create({
    data: {
      section: body.section,
      level: body.level,
      type: body.type,
      prompt: body.prompt,
      promptJp: body.promptJp || null,
      context: body.context || null,
      contextJp: body.contextJp || null,
      options: JSON.stringify(body.options),
      correct: body.correct,
      explanation: body.explanation || null,
      explanationJp: body.explanationJp || null,
      audio: body.audio || null,
      audioSlow: body.audioSlow || null,
      verified: body.verified ?? false,
      source: body.source || null,
      notes: body.notes || null,
    },
  });

  return NextResponse.json({ ...q, options: JSON.parse(q.options) }, { status: 201 });
}

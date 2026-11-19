import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const userId = (session.user as { id: string }).id;
  const { searchParams } = new URL(req.url);
  const section = searchParams.get("section");
  const level = searchParams.get("level");

  const where: Record<string, string> = { userId };
  if (section) where.section = section;
  if (level) where.level = level;

  const progress = await prisma.progress.findMany({ where });
  return NextResponse.json(progress);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const userId = (session.user as { id: string }).id;
  const { section, level, questionId, correct } = await req.json();

  const existing = await prisma.progress.findUnique({
    where: { userId_section_level_questionId: { userId, section, level, questionId } },
  });

  const currentBox = existing?.box ?? 0;
  const newBox = correct ? Math.min(currentBox + 1, 4) : 1;
  const currentSession = existing?.lastSession ?? 0;

  const progress = await prisma.progress.upsert({
    where: { userId_section_level_questionId: { userId, section, level, questionId } },
    update: {
      box: newBox,
      lastSession: currentSession + 1,
      correct: { increment: correct ? 1 : 0 },
      wrong: { increment: correct ? 0 : 1 },
    },
    create: {
      userId,
      section,
      level,
      questionId,
      box: newBox,
      lastSession: 1,
      correct: correct ? 1 : 0,
      wrong: correct ? 0 : 1,
    },
  });

  return NextResponse.json(progress);
}

import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { vocabularyQuestions } from "../src/data/vocabulary";
import { grammarQuestions } from "../src/data/grammar";
import { readingPassages } from "../src/data/reading";
import { listeningQuestions } from "../src/data/listening";
import { Question } from "../src/data/types";

const prisma = new PrismaClient();

async function seed() {
  const existing = await prisma.questionBank.count();
  if (existing > 0) {
    console.log(`Database already has ${existing} questions. Skipping seed.`);
    console.log("To re-seed, run: npx prisma db push --force-reset && npx tsx prisma/seed.ts");
    return;
  }

  const allQuestions: Question[] = [];

  allQuestions.push(...vocabularyQuestions);
  allQuestions.push(...grammarQuestions);

  for (const passage of readingPassages) {
    for (const q of passage.questions) {
      allQuestions.push({
        ...q,
        context: passage.passageEn || undefined,
        contextJp: passage.passageJp,
      });
    }
  }

  allQuestions.push(...listeningQuestions);

  console.log(`Seeding ${allQuestions.length} questions...`);

  let count = 0;
  for (const q of allQuestions) {
    await prisma.questionBank.create({
      data: {
        id: q.id,
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
        verified: false,
        source: "ai-generated",
      },
    });
    count++;
  }

  console.log(`Seeded ${count} questions (all marked as AI-generated, unverified).`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

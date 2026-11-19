import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";

const prisma = new PrismaClient();

const verifiedQuestions = [
  // === FROM JLPT OPEN CATALOGUE (human-reviewed) ===
  {
    section: "vocabulary", level: "n4", type: "kanji-reading",
    prompt: "あには __銀行__で はたらいて います。",
    promptJp: "あには 銀行で はたらいて います。",
    options: ["ぎんこう", "ぎんこ", "きんぎょう", "きんこう"],
    correct: 0,
    explanation: "銀行 (ぎんこう) means bank. My older brother works at a bank.",
    verified: true, source: "jlpt-open-catalogue",
  },
  {
    section: "reading", level: "n4", type: "short-passage",
    prompt: "この 人は どうして 自転車を 買いましたか。",
    promptJp: "この 人は どうして 自転車を 買いましたか。",
    contextJp: "わたしの アパートから 駅まで、歩くと 20分 かかります。少し 遠いので、先月 自転車を 買いました。今は 7分で 駅に 着きます。朝の 時間に 余裕が できて、とても 助かって います。",
    context: "It takes 20 minutes to walk from my apartment to the station. Since it's a bit far, I bought a bicycle last month. Now I arrive at the station in 7 minutes. I have more time in the morning and it really helps.",
    options: ["自転車が 好きだから", "駅が 近いから", "朝 運動したいから", "駅まで 歩くと 時間が かかるから"],
    correct: 3,
    explanation: "The passage says the station is 20 minutes walking, which is 'a bit far' (少し遠い). The answer is D: because it takes time to walk to the station.",
    verified: true, source: "jlpt-open-catalogue",
  },
  {
    section: "listening", level: "n4", type: "task-comprehension",
    prompt: "学生は これから まず 何を しますか。",
    promptJp: "学生は これから まず 何を しますか。",
    options: ["レポートを 書く", "図書館で 本を 借りる", "インターネットで 調べる", "テーマを 決める"],
    correct: 2,
    explanation: "The teacher says 本を借りる前に、インターネットで全体を調べるといい — before borrowing books, it's good to research the overview on the internet first.",
    verified: true, source: "jlpt-open-catalogue",
  },

  // === VERIFIED N4 KANJI READINGS (dictionary facts, unambiguous) ===
  {
    section: "vocabulary", level: "n4", type: "kanji-reading",
    prompt: "毎朝 __早く__ 起きます。",
    promptJp: "毎朝 早く 起きます。",
    options: ["はやく", "おそく", "ながく", "みじかく"],
    correct: 0,
    explanation: "早く (はやく) means early. I wake up early every morning.",
    verified: true, source: "user-created",
  },
  {
    section: "vocabulary", level: "n4", type: "kanji-reading",
    prompt: "この __問題__は むずかしいです。",
    promptJp: "この 問題は むずかしいです。",
    options: ["もんだい", "しつもん", "もんたい", "もんでい"],
    correct: 0,
    explanation: "問題 (もんだい) means problem/question. This problem is difficult.",
    verified: true, source: "user-created",
  },
  {
    section: "vocabulary", level: "n4", type: "kanji-reading",
    prompt: "__世界__には たくさんの 国が あります。",
    promptJp: "世界には たくさんの 国が あります。",
    options: ["せかい", "しゃかい", "せいかい", "しかい"],
    correct: 0,
    explanation: "世界 (せかい) means world. There are many countries in the world.",
    verified: true, source: "user-created",
  },
  {
    section: "vocabulary", level: "n4", type: "kanji-reading",
    prompt: "__研究__の ために 大学院に 入りました。",
    promptJp: "研究の ために 大学院に 入りました。",
    options: ["けんきゅう", "けんぎょう", "けんきょう", "げんきゅう"],
    correct: 0,
    explanation: "研究 (けんきゅう) means research. I entered graduate school for research.",
    verified: true, source: "user-created",
  },
  {
    section: "vocabulary", level: "n4", type: "kanji-reading",
    prompt: "日本の __文化__に きょうみが あります。",
    promptJp: "日本の 文化に きょうみが あります。",
    options: ["ぶんか", "ぶんが", "もんか", "ふんか"],
    correct: 0,
    explanation: "文化 (ぶんか) means culture. I am interested in Japanese culture.",
    verified: true, source: "user-created",
  },
  {
    section: "vocabulary", level: "n4", type: "kanji-reading",
    prompt: "__経験__が ないので 心配です。",
    promptJp: "経験が ないので 心配です。",
    options: ["けいけん", "けいげん", "きょうけん", "けんけん"],
    correct: 0,
    explanation: "経験 (けいけん) means experience. I'm worried because I have no experience.",
    verified: true, source: "user-created",
  },
  {
    section: "vocabulary", level: "n4", type: "kanji-reading",
    prompt: "この へんは __交通__が べんりです。",
    promptJp: "この へんは 交通が べんりです。",
    options: ["こうつう", "こうとう", "きょうつう", "こうつ"],
    correct: 0,
    explanation: "交通 (こうつう) means transportation/traffic. Transportation is convenient around here.",
    verified: true, source: "user-created",
  },
  {
    section: "vocabulary", level: "n4", type: "kanji-reading",
    prompt: "__彼女__は 音楽が 上手です。",
    promptJp: "彼女は 音楽が 上手です。",
    options: ["かのじょ", "かれじょ", "あのこ", "かのこ"],
    correct: 0,
    explanation: "彼女 (かのじょ) means she/girlfriend. She is good at music.",
    verified: true, source: "user-created",
  },

  // === VERIFIED N4 GRAMMAR (well-established patterns) ===
  {
    section: "grammar", level: "n4", type: "grammar-form",
    prompt: "あした 雨が ＿＿＿ かもしれません。",
    promptJp: "あした 雨が ＿＿＿ かもしれません。",
    options: ["ふる", "ふり", "ふって", "ふった"],
    correct: 0,
    explanation: "かもしれません connects to the dictionary form of verbs. 降る → 降るかもしれません (it might rain).",
    verified: true, source: "user-created",
  },
  {
    section: "grammar", level: "n4", type: "grammar-form",
    prompt: "日本語が 上手に ＿＿＿ ように なりました。",
    promptJp: "日本語が 上手に ＿＿＿ ように なりました。",
    options: ["話す", "話せる", "話して", "話した"],
    correct: 1,
    explanation: "～ようになりました (came to be able to) connects with the potential form. 話せる → 話せるようになりました (I became able to speak well).",
    verified: true, source: "user-created",
  },
  {
    section: "grammar", level: "n4", type: "grammar-form",
    prompt: "友だちに 本を ＿＿＿ もらいました。",
    promptJp: "友だちに 本を ＿＿＿ もらいました。",
    options: ["かして", "かす", "かした", "かし"],
    correct: 0,
    explanation: "～てもらう means 'to have someone do something for you'. te-form + もらう. 貸して → 貸してもらいました (I had my friend lend me a book).",
    verified: true, source: "user-created",
  },
  {
    section: "grammar", level: "n4", type: "grammar-form",
    prompt: "子どもの とき、毎日 プールで ＿＿＿。",
    promptJp: "子どもの とき、毎日 プールで ＿＿＿。",
    options: ["およいだ ことが あります", "およいで います", "およいだ ものです", "およいで いました"],
    correct: 3,
    explanation: "～ていました expresses a habitual action in the past. 'When I was a child, I used to swim in the pool every day.'",
    verified: true, source: "user-created",
  },
  {
    section: "grammar", level: "n4", type: "grammar-form",
    prompt: "この ケーキは ＿＿＿ すぎて 食べられません。",
    promptJp: "この ケーキは ＿＿＿ すぎて 食べられません。",
    options: ["あまい", "あまく", "あま", "あまくて"],
    correct: 2,
    explanation: "～すぎる (too much) connects to the stem of i-adjectives. あまい → あま + すぎる. This cake is too sweet to eat.",
    verified: true, source: "user-created",
  },

  // === VERIFIED N5 BASICS (unambiguous fundamentals) ===
  {
    section: "vocabulary", level: "n5", type: "kanji-reading",
    prompt: "__水__を ください。",
    promptJp: "水を ください。",
    options: ["みず", "すい", "もず", "ひず"],
    correct: 0,
    explanation: "水 (みず) means water. Please give me water.",
    verified: true, source: "user-created",
  },
  {
    section: "vocabulary", level: "n5", type: "kanji-reading",
    prompt: "__山__に のぼりました。",
    promptJp: "山に のぼりました。",
    options: ["やま", "かわ", "うみ", "もり"],
    correct: 0,
    explanation: "山 (やま) means mountain. I climbed the mountain.",
    verified: true, source: "user-created",
  },
  {
    section: "vocabulary", level: "n5", type: "kanji-reading",
    prompt: "__天気__が いいですね。",
    promptJp: "天気が いいですね。",
    options: ["てんき", "でんき", "てんぎ", "でんぎ"],
    correct: 0,
    explanation: "天気 (てんき) means weather. The weather is nice, isn't it?",
    verified: true, source: "user-created",
  },
  {
    section: "grammar", level: "n5", type: "grammar-form",
    prompt: "わたしは まいにち コーヒーを ＿＿＿。",
    promptJp: "わたしは まいにち コーヒーを ＿＿＿。",
    options: ["のみます", "のみました", "のんで", "のむ"],
    correct: 0,
    explanation: "With まいにち (every day), use the present tense ます form for habitual actions. 飲みます = drink (polite, present).",
    verified: true, source: "user-created",
  },
  {
    section: "grammar", level: "n5", type: "grammar-form",
    prompt: "きのう えいがを ＿＿＿。",
    promptJp: "きのう えいがを ＿＿＿。",
    options: ["見ます", "見ました", "見て", "見る"],
    correct: 1,
    explanation: "きのう (yesterday) requires past tense. 見ました = watched (polite, past).",
    verified: true, source: "user-created",
  },
];

async function seed() {
  console.log(`Adding ${verifiedQuestions.length} verified questions...`);

  let count = 0;
  for (const q of verifiedQuestions) {
    await prisma.questionBank.create({
      data: {
        section: q.section,
        level: q.level,
        type: q.type,
        prompt: q.prompt,
        promptJp: q.promptJp || null,
        context: (q as Record<string, unknown>).context as string || null,
        contextJp: (q as Record<string, unknown>).contextJp as string || null,
        options: JSON.stringify(q.options),
        correct: q.correct,
        explanation: q.explanation || null,
        verified: q.verified,
        source: q.source || null,
      },
    });
    count++;
  }

  const total = await prisma.questionBank.count();
  const verified = await prisma.questionBank.count({ where: { verified: true } });
  console.log(`Added ${count} verified questions.`);
  console.log(`Total: ${total} questions, ${verified} verified (${Math.round(verified / total * 100)}%)`);
}

seed()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());

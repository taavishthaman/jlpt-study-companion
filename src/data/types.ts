export type Level = "n5" | "n4";
export type Section = "vocabulary" | "grammar" | "reading" | "listening";

export interface Question {
  id: string;
  level: Level;
  section: Section;
  type: string;
  prompt: string;
  promptJp?: string;
  context?: string;
  contextJp?: string;
  options: string[];
  correct: number;
  explanation?: string;
  explanationJp?: string;
  audio?: string; // path for listening questions
  audioSlow?: string;
  verified?: boolean;
  source?: string;
}

export interface ReadingPassage {
  id: string;
  level: Level;
  type: string;
  passageJp: string;
  passageEn?: string;
  questions: Question[];
}

export interface SectionConfig {
  id: Section;
  title: string;
  titleJp: string;
  icon: string;
  description: string;
  timeMinutes: { n5: number; n4: number };
  questionTypes: { id: string; name: string; nameJp: string; description: string }[];
}

export const SECTIONS: SectionConfig[] = [
  {
    id: "vocabulary",
    title: "Vocabulary",
    titleJp: "語彙",
    icon: "📚",
    description: "Kanji reading, orthography, context clues, and word usage",
    timeMinutes: { n5: 20, n4: 25 },
    questionTypes: [
      { id: "kanji-reading", name: "Kanji Reading", nameJp: "漢字読み", description: "Choose the correct reading for the underlined kanji" },
      { id: "orthography", name: "Orthography", nameJp: "表記", description: "Choose the correct kanji/katakana for the underlined word" },
      { id: "context-defined", name: "Context-Defined", nameJp: "文脈規定", description: "Choose the word that fits the sentence" },
      { id: "paraphrase", name: "Paraphrase", nameJp: "言い換え", description: "Choose the sentence with a similar meaning" },
      { id: "usage", name: "Usage", nameJp: "用法", description: "Choose the sentence that uses the word correctly" },
    ],
  },
  {
    id: "grammar",
    title: "Grammar",
    titleJp: "文法",
    icon: "✏️",
    description: "Grammar forms, sentence construction, and passage grammar",
    timeMinutes: { n5: 20, n4: 30 },
    questionTypes: [
      { id: "grammar-form", name: "Grammar Form", nameJp: "文法形式の判断", description: "Choose the correct grammar form" },
      { id: "sentence-composition", name: "Sentence Composition", nameJp: "文の組み立て", description: "Arrange words to form a correct sentence" },
      { id: "passage-grammar", name: "Passage Grammar", nameJp: "文章の文法", description: "Choose the grammar that fits the passage" },
    ],
  },
  {
    id: "reading",
    title: "Reading",
    titleJp: "読解",
    icon: "📖",
    description: "Short passages, medium passages, and information retrieval",
    timeMinutes: { n5: 20, n4: 25 },
    questionTypes: [
      { id: "short-passage", name: "Short Passage", nameJp: "短文", description: "Read a short text and answer questions" },
      { id: "medium-passage", name: "Medium Passage", nameJp: "中文", description: "Read a medium-length text and answer questions" },
      { id: "information-retrieval", name: "Information Retrieval", nameJp: "情報検索", description: "Find specific information from notices, schedules, etc." },
    ],
  },
  {
    id: "listening",
    title: "Listening",
    titleJp: "聴解",
    icon: "🎧",
    description: "Task comprehension, key points, expressions, and quick response",
    timeMinutes: { n5: 30, n4: 35 },
    questionTypes: [
      { id: "task-comprehension", name: "Task Comprehension", nameJp: "課題理解", description: "Listen and determine the correct action" },
      { id: "point-comprehension", name: "Point Comprehension", nameJp: "ポイント理解", description: "Listen for the key point being discussed" },
      { id: "utterance-expression", name: "Utterance Expression", nameJp: "発話表現", description: "Choose the appropriate expression" },
      { id: "quick-response", name: "Quick Response", nameJp: "即時応答", description: "Listen and choose the best response" },
    ],
  },
];

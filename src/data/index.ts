import { vocabularyQuestions } from "./vocabulary";
import { grammarQuestions } from "./grammar";
import { readingPassages } from "./reading";
import { listeningQuestions } from "./listening";
import { Question, ReadingPassage, Level, Section, SECTIONS } from "./types";

export { SECTIONS };
export type { Question, ReadingPassage, Level, Section };

export function getQuestions(section: Section, level?: Level): Question[] {
  let questions: Question[];
  switch (section) {
    case "vocabulary": questions = vocabularyQuestions; break;
    case "grammar": questions = grammarQuestions; break;
    case "listening": questions = listeningQuestions; break;
    case "reading":
      questions = readingPassages
        .filter(p => !level || p.level === level)
        .flatMap(p => p.questions);
      return questions;
    default: return [];
  }
  return level ? questions.filter(q => q.level === level) : questions;
}

export function getReadingPassages(level?: Level): ReadingPassage[] {
  return level ? readingPassages.filter(p => p.level === level) : readingPassages;
}

export function getQuestionsByType(section: Section, level: Level, type: string): Question[] {
  return getQuestions(section, level).filter(q => q.type === type);
}

export function getSectionStats(section: Section, level: Level) {
  const questions = getQuestions(section, level);
  const types = new Set(questions.map(q => q.type));
  return { total: questions.length, types: Array.from(types) };
}

// For mock test: combine all sections
export function getMockTestQuestions(level: Level) {
  return {
    vocabulary: getQuestions("vocabulary", level),
    grammar: getQuestions("grammar", level),
    reading: getReadingPassages(level),
    listening: getQuestions("listening", level),
  };
}

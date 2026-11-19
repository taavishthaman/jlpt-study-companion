"use client";
import { useState, useEffect } from "react";
import { Level, Question } from "@/data/types";
import QuizEngine from "@/components/QuizEngine";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type MockPhase = "select" | "loading" | "vocab" | "grammar-reading" | "listening" | "done";

interface PhaseResult {
  score: number;
  total: number;
}

export default function MockTestPage() {
  const [level, setLevel] = useState<Level | null>(null);
  const [phase, setPhase] = useState<MockPhase>("select");
  const [vocabResult, setVocabResult] = useState<PhaseResult | null>(null);
  const [grammarReadingResult, setGrammarReadingResult] = useState<PhaseResult | null>(null);
  const [listeningResult, setListeningResult] = useState<PhaseResult | null>(null);
  const [vocabQuestions, setVocabQuestions] = useState<Question[]>([]);
  const [grammarReadingQuestions, setGrammarReadingQuestions] = useState<Question[]>([]);
  const [listeningQuestions, setListeningQuestions] = useState<Question[]>([]);

  const timeMap = {
    n5: { vocab: 20, grammarReading: 40, listening: 30 },
    n4: { vocab: 25, grammarReading: 55, listening: 35 },
  };

  async function beginTest() {
    if (!level) return;
    setPhase("loading");

    const [vocabRes, grammarRes, readingRes, listenRes] = await Promise.all([
      fetch(`/api/quiz?section=vocabulary&level=${level}`).then(r => r.json()),
      fetch(`/api/quiz?section=grammar&level=${level}`).then(r => r.json()),
      fetch(`/api/quiz?section=reading&level=${level}`).then(r => r.json()),
      fetch(`/api/quiz?section=listening&level=${level}`).then(r => r.json()),
    ]);

    setVocabQuestions(shuffle(vocabRes.questions || []).slice(0, level === "n5" ? 8 : 12));

    const grammar = shuffle(grammarRes.questions || []).slice(0, level === "n5" ? 8 : 12);
    const reading = shuffle(readingRes.questions || []).slice(0, level === "n5" ? 4 : 6);
    setGrammarReadingQuestions([...grammar, ...reading]);

    setListeningQuestions(shuffle(listenRes.questions || []).slice(0, level === "n5" ? 8 : 10));

    setPhase("vocab");
  }

  // Reset questions when level changes
  useEffect(() => {
    setVocabQuestions([]);
    setGrammarReadingQuestions([]);
    setListeningQuestions([]);
  }, [level]);

  if (phase === "select") {
    return (
      <div>
        <div className="mb-8">
          <h1 className="text-2xl font-bold flex items-center gap-3">
            <span className="text-3xl">📝</span>
            Mock Test
            <span className="text-sm text-gray-400 font-normal">模擬試験</span>
          </h1>
          <p className="text-[var(--text-secondary)] mt-1">
            Timed simulation of the full JLPT exam. Three sections, real time limits.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {(["n5", "n4"] as Level[]).map(l => {
            const isN5 = l === "n5";
            const t = timeMap[l];
            return (
              <button
                key={l}
                onClick={() => setLevel(l)}
                className={`p-6 rounded-2xl text-center border-2 transition hover:-translate-y-1 hover:shadow-lg ${
                  level === l ? (isN5 ? "border-[var(--n5-color)] bg-[var(--n5-bg)]" : "border-[var(--n4-color)] bg-[var(--n4-bg)]") :
                  "border-transparent " + (isN5 ? "bg-[var(--n5-bg)]" : "bg-[var(--n4-bg)]")
                }`}
              >
                <div className={`text-2xl font-bold ${isN5 ? "text-[var(--n5-color)]" : "text-[var(--n4-color)]"}`}>
                  {l.toUpperCase()}
                </div>
                <div className="text-sm text-gray-500">{t.vocab + t.grammarReading + t.listening} minutes total</div>
              </button>
            );
          })}
        </div>

        {level && (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold mb-3">Test Structure</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b border-gray-50">
                  <span>Section 1: Vocabulary (語彙)</span>
                  <span className="text-gray-400">{timeMap[level].vocab} min</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-50">
                  <span>Section 2: Grammar & Reading (文法・読解)</span>
                  <span className="text-gray-400">{timeMap[level].grammarReading} min</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Section 3: Listening (聴解)</span>
                  <span className="text-gray-400">{timeMap[level].listening} min</span>
                </div>
              </div>
            </div>

            <button
              onClick={beginTest}
              className="w-full py-4 rounded-xl text-white font-semibold text-lg transition hover:opacity-90 bg-gradient-to-r from-[var(--accent)] to-[#e74c3c]"
            >
              Begin Mock Test
            </button>
          </div>
        )}
      </div>
    );
  }

  if (phase === "loading") {
    return <div className="text-center py-16 text-gray-400 animate-pulse text-xl">Loading test questions...</div>;
  }

  if (phase === "vocab" && level) {
    return (
      <div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 mb-4 text-sm text-yellow-800">
          Section 1 of 3: Vocabulary (語彙) — {timeMap[level].vocab} minutes
        </div>
        <QuizEngine
          questions={vocabQuestions}
          section="vocabulary"
          level={level}
          timed
          timeMinutes={timeMap[level].vocab}
          onComplete={r => { setVocabResult(r); setPhase("grammar-reading"); }}
          onBack={() => setPhase("select")}
        />
      </div>
    );
  }

  if (phase === "grammar-reading" && level) {
    return (
      <div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 mb-4 text-sm text-yellow-800">
          Section 2 of 3: Grammar & Reading (文法・読解) — {timeMap[level].grammarReading} minutes
        </div>
        <QuizEngine
          questions={grammarReadingQuestions}
          section="grammar"
          level={level}
          timed
          timeMinutes={timeMap[level].grammarReading}
          onComplete={r => { setGrammarReadingResult(r); setPhase("listening"); }}
          onBack={() => setPhase("select")}
        />
      </div>
    );
  }

  if (phase === "listening" && level) {
    return (
      <div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 mb-4 text-sm text-yellow-800">
          Section 3 of 3: Listening (聴解) — {timeMap[level].listening} minutes
        </div>
        <QuizEngine
          questions={listeningQuestions}
          section="listening"
          level={level}
          timed
          timeMinutes={timeMap[level].listening}
          onComplete={r => { setListeningResult(r); setPhase("done"); }}
          onBack={() => setPhase("select")}
        />
      </div>
    );
  }

  if (phase === "done" && level) {
    const v = vocabResult || { score: 0, total: 0 };
    const gr = grammarReadingResult || { score: 0, total: 0 };
    const l = listeningResult || { score: 0, total: 0 };
    const totalScore = v.score + gr.score + l.score;
    const totalQ = v.total + gr.total + l.total;
    const pct = totalQ > 0 ? totalScore / totalQ : 0;
    const themeColor = level === "n5" ? "var(--n5-color)" : "var(--n4-color)";

    return (
      <div className="max-w-lg mx-auto py-8">
        <h2 className="text-2xl font-bold text-center mb-6">Mock Test Results</h2>

        <div className="bg-white rounded-2xl p-8 shadow-lg text-center mb-6">
          <div className="text-5xl font-bold">
            {totalScore} <span className="text-xl text-gray-400 font-normal">/ {totalQ}</span>
          </div>
          <div className="text-sm text-gray-400 mt-1">{Math.round(pct * 100)}% overall</div>

          <div className="w-full h-3 bg-gray-100 rounded-full mt-4 overflow-hidden">
            <div className="h-full rounded-full" style={{ width: `${pct * 100}%`, background: themeColor }} />
          </div>

          <div className={`mt-4 px-4 py-2 rounded-xl text-sm font-medium ${
            pct >= 0.5 ? "bg-[var(--correct-bg)] text-[var(--correct)]" : "bg-[var(--wrong-bg)] text-[var(--wrong)]"
          }`}>
            {pct >= 0.5 ? "Pass! 合格" : "Not yet — keep studying!"}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm space-y-3 mb-6">
          <h3 className="font-semibold">Section Breakdown</h3>
          {[
            { name: "Vocabulary", ...v },
            { name: "Grammar & Reading", ...gr },
            { name: "Listening", ...l },
          ].map((s, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
              <span className="text-sm">{s.name}</span>
              <span className="text-sm font-semibold">
                {s.score}/{s.total}
                <span className="text-gray-400 ml-1">({s.total > 0 ? Math.round((s.score / s.total) * 100) : 0}%)</span>
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={() => { setPhase("select"); setVocabResult(null); setGrammarReadingResult(null); setListeningResult(null); }}
          className="w-full py-3 rounded-xl text-white font-semibold"
          style={{ background: themeColor }}
        >
          Try Again
        </button>
      </div>
    );
  }

  return null;
}

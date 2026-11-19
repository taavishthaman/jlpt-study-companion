"use client";
import { useState, useEffect, useCallback } from "react";
import { Level, Section, SECTIONS, Question } from "@/data/types";
import QuizEngine from "./QuizEngine";
import QuizResults from "./QuizResults";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface SectionPageProps {
  sectionId: Section;
}

export default function SectionPage({ sectionId }: SectionPageProps) {
  const [level, setLevel] = useState<Level | null>(null);
  const [mode, setMode] = useState<"select" | "quiz" | "results">("select");
  const [results, setResults] = useState<{ score: number; total: number } | null>(null);
  const [questionType, setQuestionType] = useState<string | null>(null);
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [counts, setCounts] = useState<Record<string, number>>({ n5: 0, n4: 0 });
  const [typeCounts, setTypeCounts] = useState<Record<string, number>>({});

  const section = SECTIONS.find(s => s.id === sectionId)!;

  const fetchCounts = useCallback(async () => {
    const [n5Res, n4Res] = await Promise.all([
      fetch(`/api/quiz?section=${sectionId}&level=n5`),
      fetch(`/api/quiz?section=${sectionId}&level=n4`),
    ]);
    const n5 = await n5Res.json();
    const n4 = await n4Res.json();
    setCounts({ n5: n5.questions?.length || 0, n4: n4.questions?.length || 0 });
  }, [sectionId]);

  useEffect(() => { fetchCounts(); }, [fetchCounts]);

  useEffect(() => {
    if (!level) return;
    fetch(`/api/quiz?section=${sectionId}&level=${level}`)
      .then(r => r.json())
      .then(data => {
        const qs: Question[] = data.questions || [];
        setAllQuestions(qs);
        const tc: Record<string, number> = {};
        for (const q of qs) tc[q.type] = (tc[q.type] || 0) + 1;
        setTypeCounts(tc);
      });
  }, [level, sectionId]);

  function startQuiz() {
    let qs = allQuestions;
    if (questionType) qs = qs.filter(q => q.type === questionType);
    setQuizQuestions(shuffle(qs).slice(0, 10));
    setMode("quiz");
  }

  if (mode === "quiz" && level && quizQuestions.length > 0) {
    return (
      <QuizEngine
        questions={quizQuestions}
        section={sectionId}
        level={level}
        onComplete={r => { setResults(r); setMode("results"); }}
        onBack={() => setMode("select")}
      />
    );
  }

  if (mode === "results" && results && level) {
    return (
      <QuizResults
        score={results.score}
        total={results.total}
        level={level}
        onRetry={() => { setResults(null); startQuiz(); }}
        onBack={() => setMode("select")}
      />
    );
  }

  const filteredCount = questionType ? (typeCounts[questionType] || 0) : allQuestions.length;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <span className="text-3xl">{section.icon}</span>
          {section.title}
          <span className="text-sm text-gray-400 font-normal">{section.titleJp}</span>
        </h1>
        <p className="text-[var(--text-secondary)] mt-1">{section.description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {(["n5", "n4"] as Level[]).map(l => {
          const isN5 = l === "n5";
          return (
            <button
              key={l}
              onClick={() => { setLevel(l); setQuestionType(null); }}
              className={`p-6 rounded-2xl text-center border-2 transition hover:-translate-y-1 hover:shadow-lg ${
                level === l ? (isN5 ? "border-[var(--n5-color)] bg-[var(--n5-bg)]" : "border-[var(--n4-color)] bg-[var(--n4-bg)]") :
                "border-transparent " + (isN5 ? "bg-[var(--n5-bg)]" : "bg-[var(--n4-bg)]")
              }`}
            >
              <div className={`text-2xl font-bold ${isN5 ? "text-[var(--n5-color)]" : "text-[var(--n4-color)]"}`}>
                {l.toUpperCase()}
              </div>
              <div className="text-sm text-gray-500">{isN5 ? "Beginner" : "Elementary"}</div>
              <div className="text-xs text-gray-400 mt-1">{counts[l]} questions</div>
            </button>
          );
        })}
      </div>

      {level && (
        <>
          <h3 className="font-semibold mb-3">Question Types</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {section.questionTypes.map(qt => (
              <button
                key={qt.id}
                onClick={() => setQuestionType(qt.id === questionType ? null : qt.id)}
                className={`text-left p-4 rounded-xl border-2 transition ${
                  questionType === qt.id ? "border-[var(--accent)] bg-red-50" : "border-gray-100 bg-white hover:border-gray-200"
                }`}
              >
                <div className="font-medium text-sm">{qt.name}</div>
                <div className="text-[10px] text-gray-400">{qt.nameJp}</div>
                <div className="text-xs text-gray-500 mt-1">{qt.description}</div>
                <div className="text-xs text-gray-400 mt-1">{typeCounts[qt.id] || 0} questions</div>
              </button>
            ))}
          </div>

          <button
            onClick={startQuiz}
            disabled={filteredCount === 0}
            className="w-full py-4 rounded-xl text-white font-semibold transition hover:opacity-90 disabled:opacity-50"
            style={{ background: level === "n5" ? "var(--n5-color)" : "var(--n4-color)" }}
          >
            Start Practice ({Math.min(10, filteredCount)} questions)
          </button>
        </>
      )}
    </div>
  );
}

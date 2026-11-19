"use client";
import { useState, useRef, useEffect } from "react";
import { Question } from "@/data/types";

interface QuizEngineProps {
  questions: Question[];
  section: string;
  level: string;
  onComplete: (results: { score: number; total: number; answers: { questionId: string; correct: boolean }[] }) => void;
  onBack: () => void;
  timed?: boolean;
  timeMinutes?: number;
}

export default function QuizEngine({ questions, section, level, onComplete, onBack, timed, timeMinutes }: QuizEngineProps) {
  const [pos, setPos] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState(-1);
  const [answers, setAnswers] = useState<{ questionId: string; correct: boolean }[]>([]);
  const [timeLeft, setTimeLeft] = useState(timed && timeMinutes ? timeMinutes * 60 : 0);
  const [speed, setSpeed] = useState<"normal" | "slow">("normal");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const q = questions[pos];
  const total = questions.length;
  const labels = ["A", "B", "C", "D"];

  useEffect(() => {
    if (!timed || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timer);
          onComplete({ score, total, answers });
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timed]);

  useEffect(() => {
    if (q?.audio) {
      const src = speed === "slow" && q.audioSlow ? q.audioSlow : q.audio;
      if (audioRef.current) { audioRef.current.pause(); }
      audioRef.current = new Audio(src);
      audioRef.current.play().catch(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pos, speed]);

  function handleSelect(idx: number) {
    if (answered) return;
    setAnswered(true);
    setSelected(idx);
    const isCorrect = idx === q.correct;
    if (isCorrect) setScore(s => s + 1);
    setAnswers(prev => [...prev, { questionId: q.id, correct: isCorrect }]);

    fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ section, level, questionId: q.id, correct: isCorrect }),
    }).catch(() => {});
  }

  function handleNext() {
    if (pos + 1 >= total) {
      onComplete({ score: score, total, answers });
      return;
    }
    setPos(p => p + 1);
    setAnswered(false);
    setSelected(-1);
  }

  function playAudio() {
    if (!q?.audio) return;
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.currentTime = 0; }
    const src = speed === "slow" && q.audioSlow ? q.audioSlow : q.audio;
    audioRef.current = new Audio(src);
    audioRef.current.play().catch(() => {});
  }

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  const themeColor = level === "n5" ? "var(--n5-color)" : "var(--n4-color)";
  const themeBg = level === "n5" ? "var(--n5-bg)" : "var(--n4-bg)";

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={onBack} className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center gap-1">
          <span>←</span> Back
        </button>
        <span className="text-sm font-semibold text-[var(--text-secondary)]">{pos + 1} / {total}</span>
        <div className="flex items-center gap-3">
          {timed && timeLeft > 0 && (
            <span className={`text-sm font-mono font-bold ${timeLeft < 60 ? "text-red-500" : "text-[var(--text-secondary)]"}`}>
              {formatTime(timeLeft)}
            </span>
          )}
          <span className="text-sm font-semibold" style={{ color: "var(--correct)" }}>{score} correct</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-gray-200 rounded-full mb-6 overflow-hidden">
        <div className="h-full rounded-full transition-all" style={{ width: `${(pos / total) * 100}%`, background: themeColor }} />
      </div>

      {/* Question type badge + verification */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <span className="inline-block text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-md" style={{ background: themeBg, color: themeColor }}>
          {q.type.replace(/-/g, " ")}
        </span>
        {q.verified ? (
          <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md bg-green-50 text-green-700 border border-green-200">
            ✓ Verified{q.source && q.source !== "ai-generated" ? ` · ${q.source}` : ""}
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md bg-amber-50 text-amber-700 border border-amber-200">
            AI-generated
          </span>
        )}
      </div>

      {/* Audio section (listening only) */}
      {q.audio && (
        <div className="bg-white rounded-2xl p-6 shadow-sm text-center mb-5">
          <button
            onClick={playAudio}
            className="w-16 h-16 rounded-full inline-flex items-center justify-center text-2xl transition hover:scale-105"
            style={{ background: themeBg, color: themeColor }}
          >
            ▶
          </button>
          <p className="text-xs text-gray-400 mt-2">Tap to play</p>
          <div className="flex justify-center gap-2 mt-3">
            <button
              onClick={() => setSpeed("slow")}
              className={`text-xs px-3 py-1 rounded-lg border ${speed === "slow" ? "border-[var(--accent)] text-[var(--accent)] bg-red-50" : "border-gray-200 text-gray-400"}`}
            >
              Slow
            </button>
            <button
              onClick={() => setSpeed("normal")}
              className={`text-xs px-3 py-1 rounded-lg border ${speed === "normal" ? "border-[var(--accent)] text-[var(--accent)] bg-red-50" : "border-gray-200 text-gray-400"}`}
            >
              Normal
            </button>
          </div>
        </div>
      )}

      {/* Context (for reading passages) */}
      {q.context && (
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-5 border-l-4" style={{ borderColor: themeColor }}>
          <div className="text-sm leading-relaxed whitespace-pre-line" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            {q.contextJp || q.context}
          </div>
        </div>
      )}

      {/* Question */}
      <div className="bg-white rounded-2xl p-5 shadow-sm mb-5">
        <p className="font-medium" style={{ fontFamily: q.promptJp ? "'Noto Sans JP', sans-serif" : undefined }}>
          {q.prompt}
        </p>
        {q.promptJp && q.promptJp !== q.prompt && (
          <p className="text-sm text-gray-400 mt-1">{q.promptJp}</p>
        )}
      </div>

      {/* Options */}
      <div className="space-y-3 mb-5">
        {q.options.map((opt, i) => {
          let cls = "bg-white border-2 border-gray-100 hover:border-gray-300";
          if (answered) {
            if (i === q.correct) cls = "bg-[var(--correct-bg)] border-2 border-[var(--correct)]";
            else if (i === selected) cls = "bg-[var(--wrong-bg)] border-2 border-[var(--wrong)]";
            else cls = "bg-white border-2 border-gray-100 opacity-50";
          }
          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={answered}
              className={`w-full text-left rounded-xl p-4 flex items-center gap-3 transition ${cls}`}
            >
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                answered && i === q.correct ? "bg-[var(--correct)] text-white" :
                answered && i === selected ? "bg-[var(--wrong)] text-white" :
                "bg-gray-100 text-gray-500"
              }`}>
                {labels[i]}
              </span>
              <span className="text-sm">{opt}</span>
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {answered && q.explanation && (
        <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-[var(--correct)] mb-5 animate-[slideIn_0.3s_ease]">
          <p className="text-sm whitespace-pre-line" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            {q.explanation}
          </p>
        </div>
      )}

      {/* Next button */}
      {answered && (
        <button
          onClick={handleNext}
          className="w-full py-4 rounded-xl text-white font-semibold text-sm transition hover:opacity-90"
          style={{ background: themeColor }}
        >
          {pos + 1 < total ? "Next Question" : "See Results"}
        </button>
      )}
    </div>
  );
}

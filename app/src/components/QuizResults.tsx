"use client";

interface QuizResultsProps {
  score: number;
  total: number;
  level: string;
  onRetry: () => void;
  onBack: () => void;
}

export default function QuizResults({ score, total, level, onRetry, onBack }: QuizResultsProps) {
  const pct = total > 0 ? score / total : 0;
  const themeColor = level === "n5" ? "var(--n5-color)" : "var(--n4-color)";

  let message: string;
  let msgClass: string;
  if (pct >= 0.8) { message = "Excellent! すばらしい！"; msgClass = "bg-[var(--correct-bg)] text-[var(--correct)]"; }
  else if (pct >= 0.5) { message = "Good effort! がんばって！"; msgClass = "bg-[var(--n5-bg)] text-[var(--n5-color)]"; }
  else { message = "Keep practicing! あきらめないで！"; msgClass = "bg-[var(--wrong-bg)] text-[var(--wrong)]"; }

  return (
    <div className="max-w-md mx-auto text-center py-8">
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="text-5xl font-bold">
          {score} <span className="text-xl text-gray-400 font-normal">/ {total}</span>
        </div>
        <p className="text-sm text-gray-400 mt-2">Correct Answers</p>

        <div className={`mt-6 px-4 py-3 rounded-xl text-sm font-medium ${msgClass}`}>
          {message}
        </div>

        {/* Score bar */}
        <div className="mt-6 w-full h-3 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-1000"
            style={{ width: `${pct * 100}%`, background: themeColor }}
          />
        </div>
        <p className="text-xs text-gray-400 mt-1">{Math.round(pct * 100)}%</p>

        <div className="flex gap-3 mt-8">
          <button
            onClick={onRetry}
            className="flex-1 py-3 rounded-xl text-white font-semibold text-sm"
            style={{ background: themeColor }}
          >
            Next Round
          </button>
          <button
            onClick={onBack}
            className="flex-1 py-3 rounded-xl border-2 border-gray-200 font-semibold text-sm text-gray-600 hover:bg-gray-50"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

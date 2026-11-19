"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { SECTIONS } from "@/data/types";

export default function DashboardPage() {
  const [counts, setCounts] = useState<Record<string, Record<string, number>>>({});
  const [verifiedPct, setVerifiedPct] = useState<number | null>(null);

  useEffect(() => {
    async function load() {
      const result: Record<string, Record<string, number>> = {};
      let totalAll = 0;
      let verifiedAll = 0;

      for (const section of SECTIONS) {
        result[section.id] = {};
        for (const level of ["n5", "n4"]) {
          const res = await fetch(`/api/quiz?section=${section.id}&level=${level}`);
          const data = await res.json();
          const qs = data.questions || [];
          result[section.id][level] = qs.length;
          totalAll += qs.length;
          verifiedAll += qs.filter((q: { verified: boolean }) => q.verified).length;
        }
      }
      setCounts(result);
      setVerifiedPct(totalAll > 0 ? Math.round((verifiedAll / totalAll) * 100) : 0);
    }
    load();
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-[var(--text-secondary)] mt-1">Welcome back! Choose a section to study.</p>
      </div>

      {verifiedPct !== null && verifiedPct < 100 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 flex items-start gap-3">
          <span className="text-lg">⚠️</span>
          <div>
            <p className="text-sm text-amber-800 font-medium">
              {verifiedPct}% of questions are verified
            </p>
            <p className="text-xs text-amber-600 mt-1">
              Most questions are AI-generated and may contain errors. Use the{" "}
              <Link href="/admin" className="underline font-medium">Question Bank</Link> to review and verify content, or import real JLPT questions.
            </p>
          </div>
        </div>
      )}

      <div className="flex gap-3 mb-6">
        <span className="px-4 py-2 rounded-xl bg-[var(--n5-bg)] text-[var(--n5-color)] font-semibold text-sm">
          N5 Beginner
        </span>
        <span className="px-4 py-2 rounded-xl bg-[var(--n4-bg)] text-[var(--n4-color)] font-semibold text-sm">
          N4 Elementary
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {SECTIONS.map(section => (
          <Link
            key={section.id}
            href={`/${section.id}`}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all"
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">{section.icon}</span>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{section.title}</h3>
                <p className="text-xs text-gray-400 mb-1">{section.titleJp}</p>
                <p className="text-sm text-[var(--text-secondary)]">{section.description}</p>
                <div className="flex gap-3 mt-3">
                  <span className="text-xs px-2 py-1 rounded bg-[var(--n5-bg)] text-[var(--n5-color)] font-medium">
                    N5: {counts[section.id]?.n5 ?? "..."}q
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-[var(--n4-bg)] text-[var(--n4-color)] font-medium">
                    N4: {counts[section.id]?.n4 ?? "..."}q
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Link
        href="/mock-test"
        className="block bg-gradient-to-r from-[var(--accent)] to-[#e74c3c] rounded-2xl p-6 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
      >
        <div className="flex items-center gap-4">
          <span className="text-4xl">📝</span>
          <div>
            <h3 className="font-bold text-xl">Full Mock Test</h3>
            <p className="text-white/80 text-sm mt-1">
              Timed simulation of the complete JLPT exam — all sections, real time limits
            </p>
            <div className="flex gap-3 mt-3">
              <span className="text-xs px-3 py-1 rounded-full bg-white/20 font-medium">N5: 90 min</span>
              <span className="text-xs px-3 py-1 rounded-full bg-white/20 font-medium">N4: 115 min</span>
            </div>
          </div>
        </div>
      </Link>

      <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-semibold mb-4">JLPT Exam Structure Reference</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[var(--text-secondary)] border-b">
                <th className="pb-2 pr-4">Section</th>
                <th className="pb-2 pr-4">N5 Time</th>
                <th className="pb-2">N4 Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <tr><td className="py-2 pr-4">語彙 Vocabulary</td><td className="py-2 pr-4">20 min</td><td className="py-2">25 min</td></tr>
              <tr><td className="py-2 pr-4">文法・読解 Grammar & Reading</td><td className="py-2 pr-4">40 min</td><td className="py-2">55 min</td></tr>
              <tr><td className="py-2 pr-4">聴解 Listening</td><td className="py-2 pr-4">30 min</td><td className="py-2">35 min</td></tr>
              <tr className="font-semibold"><td className="py-2 pr-4">Total</td><td className="py-2 pr-4">90 min</td><td className="py-2">115 min</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useState, useEffect, useCallback } from "react";
import { SECTIONS } from "@/data/types";

interface DBQuestion {
  id: string;
  section: string;
  level: string;
  type: string;
  prompt: string;
  promptJp?: string;
  context?: string;
  contextJp?: string;
  options: string[];
  correct: number;
  explanation?: string;
  explanationJp?: string;
  audio?: string;
  audioSlow?: string;
  verified: boolean;
  source?: string;
  notes?: string;
}

type ViewMode = "list" | "edit" | "add" | "import";

export default function AdminPage() {
  const [questions, setQuestions] = useState<DBQuestion[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [filterSection, setFilterSection] = useState("");
  const [filterLevel, setFilterLevel] = useState("");
  const [filterVerified, setFilterVerified] = useState("");
  const [mode, setMode] = useState<ViewMode>("list");
  const [editing, setEditing] = useState<DBQuestion | null>(null);
  const [importJson, setImportJson] = useState("");
  const [importResult, setImportResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState<{ total: number; verified: number; ai: number } | null>(null);

  const fetchQuestions = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (filterSection) params.set("section", filterSection);
    if (filterLevel) params.set("level", filterLevel);
    if (filterVerified) params.set("verified", filterVerified);
    params.set("page", String(page));
    params.set("limit", "25");

    const res = await fetch(`/api/questions?${params}`);
    const data = await res.json();
    setQuestions(data.questions);
    setTotal(data.total);
    setPages(data.pages);
    setLoading(false);
  }, [filterSection, filterLevel, filterVerified, page]);

  const fetchStats = useCallback(async () => {
    const [allRes, verifiedRes] = await Promise.all([
      fetch("/api/questions?limit=1"),
      fetch("/api/questions?verified=true&limit=1"),
    ]);
    const allData = await allRes.json();
    const verifiedData = await verifiedRes.json();
    setStats({
      total: allData.total,
      verified: verifiedData.total,
      ai: allData.total - verifiedData.total,
    });
  }, []);

  useEffect(() => { fetchQuestions(); }, [fetchQuestions]);
  useEffect(() => { fetchStats(); }, [fetchStats]);

  async function toggleVerified(q: DBQuestion) {
    await fetch(`/api/questions/${q.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ verified: !q.verified }),
    });
    fetchQuestions();
    fetchStats();
  }

  async function deleteQuestion(id: string) {
    if (!confirm("Delete this question?")) return;
    await fetch(`/api/questions/${id}`, { method: "DELETE" });
    fetchQuestions();
    fetchStats();
  }

  async function saveQuestion(q: Partial<DBQuestion> & { id?: string }) {
    if (q.id) {
      await fetch(`/api/questions/${q.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(q),
      });
    } else {
      await fetch("/api/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(q),
      });
    }
    setMode("list");
    setEditing(null);
    fetchQuestions();
    fetchStats();
  }

  async function handleImport() {
    try {
      const parsed = JSON.parse(importJson);
      const qs = Array.isArray(parsed) ? parsed : [parsed];
      const res = await fetch("/api/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bulk: true, questions: qs }),
      });
      const data = await res.json();
      setImportResult(`Imported ${data.imported} questions.`);
      setImportJson("");
      fetchQuestions();
      fetchStats();
    } catch (e) {
      setImportResult(`Error: ${e instanceof Error ? e.message : "Invalid JSON"}`);
    }
  }

  async function bulkVerify(verified: boolean) {
    for (const q of questions) {
      await fetch(`/api/questions/${q.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ verified }),
      });
    }
    fetchQuestions();
    fetchStats();
  }

  if (mode === "edit" || mode === "add") {
    return <QuestionEditor question={mode === "edit" ? editing : null} onSave={saveQuestion} onCancel={() => { setMode("list"); setEditing(null); }} />;
  }

  if (mode === "import") {
    return (
      <div className="max-w-4xl">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => setMode("list")} className="text-sm text-gray-500 hover:text-gray-700">← Back</button>
          <h1 className="text-2xl font-bold">Import Questions</h1>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Paste a JSON array of questions. Each question needs: section, level, type, prompt, options (array), correct (index).
          Optional: promptJp, context, contextJp, explanation, explanationJp, audio, audioSlow, verified, source, notes.
        </p>
        <pre className="bg-gray-50 border rounded p-3 text-xs mb-4 overflow-x-auto">{`[{
  "section": "vocabulary", "level": "n4", "type": "kanji-reading",
  "prompt": "＿天気＿がいいですね。", "promptJp": "いい天気ですね。",
  "options": ["てんき", "でんき", "てんぎ", "でんぎ"],
  "correct": 0, "explanation": "天気 (てんき) means weather",
  "verified": true, "source": "jlpt-official"
}]`}</pre>
        <textarea
          value={importJson}
          onChange={(e) => setImportJson(e.target.value)}
          className="w-full h-64 border rounded-lg p-3 font-mono text-sm"
          placeholder="Paste JSON here..."
        />
        <div className="flex gap-3 mt-4">
          <button onClick={handleImport} className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
            Import
          </button>
        </div>
        {importResult && (
          <div className={`mt-4 p-3 rounded-lg text-sm ${importResult.startsWith("Error") ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"}`}>
            {importResult}
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h1 className="text-2xl font-bold">Question Bank</h1>
        <div className="flex gap-2">
          <button onClick={() => setMode("add")} className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700">
            + Add Question
          </button>
          <button onClick={() => setMode("import")} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
            Import JSON
          </button>
        </div>
      </div>

      {stats && (
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white border rounded-xl p-4 text-center">
            <div className="text-2xl font-bold">{stats.total}</div>
            <div className="text-sm text-gray-500">Total Questions</div>
          </div>
          <div className="bg-white border rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{stats.verified}</div>
            <div className="text-sm text-gray-500">Verified</div>
          </div>
          <div className="bg-white border rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-amber-600">{stats.ai}</div>
            <div className="text-sm text-gray-500">AI-Generated (Unverified)</div>
          </div>
        </div>
      )}

      <div className="flex gap-3 mb-4 flex-wrap">
        <select value={filterSection} onChange={(e) => { setFilterSection(e.target.value); setPage(1); }} className="border rounded-lg px-3 py-2 text-sm">
          <option value="">All Sections</option>
          {SECTIONS.map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}
        </select>
        <select value={filterLevel} onChange={(e) => { setFilterLevel(e.target.value); setPage(1); }} className="border rounded-lg px-3 py-2 text-sm">
          <option value="">All Levels</option>
          <option value="n5">N5</option>
          <option value="n4">N4</option>
        </select>
        <select value={filterVerified} onChange={(e) => { setFilterVerified(e.target.value); setPage(1); }} className="border rounded-lg px-3 py-2 text-sm">
          <option value="">All Status</option>
          <option value="true">Verified</option>
          <option value="false">Unverified</option>
        </select>
        <div className="ml-auto flex gap-2">
          <button onClick={() => bulkVerify(true)} className="text-xs text-green-600 hover:underline">Verify page</button>
          <button onClick={() => bulkVerify(false)} className="text-xs text-amber-600 hover:underline">Unverify page</button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-8 text-gray-400">Loading...</div>
      ) : (
        <div className="space-y-2">
          {questions.map((q) => (
            <div key={q.id} className={`border rounded-lg p-4 ${q.verified ? "border-green-200 bg-green-50/30" : "border-amber-200 bg-amber-50/30"}`}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${q.verified ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                      {q.verified ? "Verified" : "Unverified"}
                    </span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{q.section}</span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{q.level.toUpperCase()}</span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{q.type}</span>
                    {q.source && <span className="text-xs text-gray-400">{q.source}</span>}
                  </div>
                  <p className="text-sm font-medium truncate">{q.prompt}</p>
                  {q.promptJp && <p className="text-xs text-gray-500 truncate">{q.promptJp}</p>}
                  <div className="flex gap-2 mt-1 flex-wrap">
                    {q.options.map((opt, i) => (
                      <span key={i} className={`text-xs px-2 py-0.5 rounded ${i === q.correct ? "bg-green-100 text-green-800 font-medium" : "bg-gray-100 text-gray-600"}`}>
                        {String.fromCharCode(65 + i)}: {opt}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-1 shrink-0">
                  <button onClick={() => toggleVerified(q)} className={`text-xs px-3 py-1 rounded ${q.verified ? "bg-amber-100 hover:bg-amber-200 text-amber-700" : "bg-green-100 hover:bg-green-200 text-green-700"}`}>
                    {q.verified ? "Unverify" : "Verify"}
                  </button>
                  <button onClick={() => { setEditing(q); setMode("edit"); }} className="text-xs px-3 py-1 rounded bg-blue-100 hover:bg-blue-200 text-blue-700">
                    Edit
                  </button>
                  <button onClick={() => deleteQuestion(q.id)} className="text-xs px-3 py-1 rounded bg-red-100 hover:bg-red-200 text-red-700">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between mt-6 text-sm text-gray-500">
        <span>Showing {questions.length} of {total} questions</span>
        <div className="flex gap-2">
          <button onClick={() => setPage(Math.max(1, page - 1))} disabled={page <= 1} className="px-3 py-1 border rounded disabled:opacity-30">Prev</button>
          <span className="px-3 py-1">Page {page} of {pages}</span>
          <button onClick={() => setPage(Math.min(pages, page + 1))} disabled={page >= pages} className="px-3 py-1 border rounded disabled:opacity-30">Next</button>
        </div>
      </div>
    </div>
  );
}

function QuestionEditor({ question, onSave, onCancel }: {
  question: DBQuestion | null;
  onSave: (q: Partial<DBQuestion>) => void;
  onCancel: () => void;
}) {
  const [form, setForm] = useState({
    section: question?.section || "vocabulary",
    level: question?.level || "n4",
    type: question?.type || "kanji-reading",
    prompt: question?.prompt || "",
    promptJp: question?.promptJp || "",
    context: question?.context || "",
    contextJp: question?.contextJp || "",
    optionA: question?.options?.[0] || "",
    optionB: question?.options?.[1] || "",
    optionC: question?.options?.[2] || "",
    optionD: question?.options?.[3] || "",
    correct: question?.correct ?? 0,
    explanation: question?.explanation || "",
    explanationJp: question?.explanationJp || "",
    audio: question?.audio || "",
    audioSlow: question?.audioSlow || "",
    verified: question?.verified ?? false,
    source: question?.source || "",
    notes: question?.notes || "",
  });

  const sectionConfig = SECTIONS.find((s) => s.id === form.section);
  const questionTypes = sectionConfig?.questionTypes || [];

  function handleSave() {
    const data: Partial<DBQuestion> = {
      section: form.section,
      level: form.level,
      type: form.type,
      prompt: form.prompt,
      promptJp: form.promptJp || undefined,
      context: form.context || undefined,
      contextJp: form.contextJp || undefined,
      options: [form.optionA, form.optionB, form.optionC, form.optionD].filter(Boolean),
      correct: form.correct,
      explanation: form.explanation || undefined,
      explanationJp: form.explanationJp || undefined,
      audio: form.audio || undefined,
      audioSlow: form.audioSlow || undefined,
      verified: form.verified,
      source: form.source || undefined,
      notes: form.notes || undefined,
    };
    if (question?.id) data.id = question.id;
    onSave(data);
  }

  const field = (label: string, key: keyof typeof form, opts?: { textarea?: boolean; type?: string }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {opts?.textarea ? (
        <textarea value={form[key] as string} onChange={(e) => setForm({ ...form, [key]: e.target.value })} className="w-full border rounded-lg p-2 text-sm" rows={3} />
      ) : (
        <input type={opts?.type || "text"} value={form[key] as string} onChange={(e) => setForm({ ...form, [key]: opts?.type === "number" ? parseInt(e.target.value) : e.target.value })} className="w-full border rounded-lg p-2 text-sm" />
      )}
    </div>
  );

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={onCancel} className="text-sm text-gray-500 hover:text-gray-700">← Back</button>
        <h1 className="text-2xl font-bold">{question ? "Edit Question" : "Add Question"}</h1>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Section</label>
            <select value={form.section} onChange={(e) => setForm({ ...form, section: e.target.value, type: SECTIONS.find(s => s.id === e.target.value)?.questionTypes[0]?.id || "" })} className="w-full border rounded-lg p-2 text-sm">
              {SECTIONS.map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Level</label>
            <select value={form.level} onChange={(e) => setForm({ ...form, level: e.target.value })} className="w-full border rounded-lg p-2 text-sm">
              <option value="n5">N5</option>
              <option value="n4">N4</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
            <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="w-full border rounded-lg p-2 text-sm">
              {questionTypes.map((t) => <option key={t.id} value={t.id}>{t.name}</option>)}
            </select>
          </div>
        </div>

        {field("Question (English)", "prompt")}
        {field("Question (Japanese)", "promptJp")}
        {(form.section === "reading") && field("Passage (English)", "context", { textarea: true })}
        {(form.section === "reading") && field("Passage (Japanese)", "contextJp", { textarea: true })}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Option A {form.correct === 0 && <span className="text-green-600">(correct)</span>}</label>
            <div className="flex gap-2">
              <input value={form.optionA} onChange={(e) => setForm({ ...form, optionA: e.target.value })} className="flex-1 border rounded-lg p-2 text-sm" />
              <button onClick={() => setForm({ ...form, correct: 0 })} className={`px-2 rounded text-xs ${form.correct === 0 ? "bg-green-500 text-white" : "bg-gray-100"}`}>Correct</button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Option B {form.correct === 1 && <span className="text-green-600">(correct)</span>}</label>
            <div className="flex gap-2">
              <input value={form.optionB} onChange={(e) => setForm({ ...form, optionB: e.target.value })} className="flex-1 border rounded-lg p-2 text-sm" />
              <button onClick={() => setForm({ ...form, correct: 1 })} className={`px-2 rounded text-xs ${form.correct === 1 ? "bg-green-500 text-white" : "bg-gray-100"}`}>Correct</button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Option C {form.correct === 2 && <span className="text-green-600">(correct)</span>}</label>
            <div className="flex gap-2">
              <input value={form.optionC} onChange={(e) => setForm({ ...form, optionC: e.target.value })} className="flex-1 border rounded-lg p-2 text-sm" />
              <button onClick={() => setForm({ ...form, correct: 2 })} className={`px-2 rounded text-xs ${form.correct === 2 ? "bg-green-500 text-white" : "bg-gray-100"}`}>Correct</button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Option D {form.correct === 3 && <span className="text-green-600">(correct)</span>}</label>
            <div className="flex gap-2">
              <input value={form.optionD} onChange={(e) => setForm({ ...form, optionD: e.target.value })} className="flex-1 border rounded-lg p-2 text-sm" />
              <button onClick={() => setForm({ ...form, correct: 3 })} className={`px-2 rounded text-xs ${form.correct === 3 ? "bg-green-500 text-white" : "bg-gray-100"}`}>Correct</button>
            </div>
          </div>
        </div>

        {field("Explanation (English)", "explanation", { textarea: true })}
        {field("Explanation (Japanese)", "explanationJp", { textarea: true })}

        {form.section === "listening" && (
          <div className="grid grid-cols-2 gap-4">
            {field("Audio Path", "audio")}
            {field("Slow Audio Path", "audioSlow")}
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Source</label>
            <select value={form.source} onChange={(e) => setForm({ ...form, source: e.target.value })} className="w-full border rounded-lg p-2 text-sm">
              <option value="">Unknown</option>
              <option value="ai-generated">AI Generated</option>
              <option value="jlpt-official">JLPT Official</option>
              <option value="shin-kanzen-master">Shin Kanzen Master</option>
              <option value="try-n4">Try! N4</option>
              <option value="soumatome">Sou Matome</option>
              <option value="user-created">User Created</option>
            </select>
          </div>
          <div className="flex items-end">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={form.verified} onChange={(e) => setForm({ ...form, verified: e.target.checked })} className="w-4 h-4" />
              <span className="text-sm font-medium">Mark as Verified</span>
            </label>
          </div>
        </div>

        {field("Notes", "notes", { textarea: true })}

        <div className="flex gap-3 pt-4">
          <button onClick={handleSave} className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">Save</button>
          <button onClick={onCancel} className="border px-6 py-2 rounded-lg hover:bg-gray-50">Cancel</button>
        </div>
      </div>
    </div>
  );
}

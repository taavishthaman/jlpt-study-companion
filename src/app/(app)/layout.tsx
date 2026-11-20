"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Dashboard", labelJp: "ダッシュボード", icon: "🏠" },
  { href: "/vocabulary", label: "Vocabulary", labelJp: "語彙", icon: "📚" },
  { href: "/grammar", label: "Grammar", labelJp: "文法", icon: "✏️" },
  { href: "/reading", label: "Reading", labelJp: "読解", icon: "📖" },
  { href: "/listening", label: "Listening", labelJp: "聴解", icon: "🎧" },
  { href: "/mock-test", label: "Mock Test", labelJp: "模擬試験", icon: "📝" },
  { href: "/admin", label: "Question Bank", labelJp: "問題管理", icon: "⚙️" },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg)]">
        <div className="animate-pulse text-2xl">読み込み中...</div>
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="min-h-screen flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[var(--sidebar-bg)] text-[var(--sidebar-text)]
        transform transition-transform lg:translate-x-0 flex flex-col
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div className="p-6 border-b border-white/10">
          <h1 className="text-lg font-bold">
            <span className="text-[var(--accent)]">日本語</span> JLPT
          </h1>
          <p className="text-xs text-gray-400 mt-1">Study Companion</p>
        </div>

        <nav className="flex-1 py-4 px-3 space-y-1">
          {NAV_ITEMS.map(item => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition
                  ${active ? "bg-[var(--sidebar-active)] text-white" : "text-gray-400 hover:text-white hover:bg-[var(--sidebar-active)]"}
                `}
              >
                <span className="text-lg">{item.icon}</span>
                <div>
                  <div>{item.label}</div>
                  <div className="text-[10px] opacity-60">{item.labelJp}</div>
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="text-xs text-gray-400 mb-2 truncate">{session.user?.email}</div>
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="text-xs text-gray-500 hover:text-white transition"
          >
            Sign out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 min-h-screen">
        {/* Mobile header */}
        <div className="lg:hidden flex items-center gap-3 p-4 border-b border-gray-200 bg-white">
          <button onClick={() => setSidebarOpen(true)} className="text-xl">☰</button>
          <span className="font-semibold text-sm">
            <span className="text-[var(--accent)]">日本語</span> JLPT
          </span>
        </div>
        <div className="p-4 lg:p-8 max-w-5xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

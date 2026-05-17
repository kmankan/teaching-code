"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { lessons } from "@/data/lessons";

export default function MobileNav() {
  const [openPathname, setOpenPathname] = useState<string | null>(null);
  const pathname = usePathname();
  const open = openPathname === pathname;

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpenPathname(open ? null : pathname)}
        className="w-9 h-9 flex items-center justify-center rounded-lg border border-border hover:bg-surface transition-colors"
        aria-label="Toggle navigation"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {open ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setOpenPathname(null)} />
          <div className="fixed left-0 top-0 bottom-0 w-72 bg-background border-r border-border z-50 p-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="font-bold text-lg">Lessons</span>
              <button
                onClick={() => setOpenPathname(null)}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {lessons.map((lesson) => {
                const href = `/lessons/${lesson.slug}`;
                const active = pathname === href;
                return (
                  <Link
                    key={lesson.slug}
                    href={href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                      active
                        ? "bg-accent/10 text-accent font-medium"
                        : "text-muted hover:text-foreground hover:bg-surface"
                    }`}
                  >
                    <span className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      active ? "bg-accent text-white" : "bg-surface-2 text-muted"
                    }`}>
                      {lesson.number}
                    </span>
                    {lesson.title}
                  </Link>
                );
              })}
              <div className="border-t border-border my-2" />
              <Link
                href="/lessons/checklist"
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  pathname === "/lessons/checklist"
                    ? "bg-accent/10 text-accent font-medium"
                    : "text-muted hover:text-foreground hover:bg-surface"
                }`}
              >
                <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs bg-surface-2">
                  &#10003;
                </span>
                Session Checklist
              </Link>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}

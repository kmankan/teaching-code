"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { lessons } from "@/data/lessons";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 shrink-0 border-r border-border h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto custom-scrollbar p-4">
      <nav className="flex flex-col gap-1">
        {lessons.map((lesson) => {
          const href = `/lessons/${lesson.slug}`;
          const active = pathname === href;

          return (
            <Link
              key={lesson.slug}
              href={href}
              className={`flex items-start gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
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
              <div className="flex flex-col">
                <span className="leading-tight">{lesson.title}</span>
                <span className="text-xs text-muted mt-0.5">{lesson.estimatedMinutes} min</span>
              </div>
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
    </aside>
  );
}

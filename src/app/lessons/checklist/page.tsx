import type { Metadata } from "next";
import Link from "next/link";
import ChecklistItem from "@/components/ChecklistItem";
import { checklistSections } from "@/data/checklist";
import { lessons } from "@/data/lessons";
import { formatMinutes } from "@/lib/time";

export const metadata: Metadata = {
  title: "Session Checklist | Learn to Vibecode",
  description: "Track your progress through the vibecoding session",
};

export default function ChecklistPage() {
  const totalMinutes = lessons.reduce((sum, lesson) => sum + lesson.estimatedMinutes, 0);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Session Checklist</h1>
      <p className="text-muted mb-8">Track your progress through the session. Checkboxes are saved automatically.</p>

      {checklistSections.map((section) => (
        <section key={section.title} className="mb-8">
          <h2 className="text-lg font-semibold mb-3 pb-2 border-b border-border">{section.title}</h2>
          <div className="space-y-1">
            {section.items.map((item) => (
              <ChecklistItem
                key={item.id}
                id={item.id}
                label={item.label}
                sublabel={item.sublabel}
              />
            ))}
          </div>
        </section>
      ))}

      {/* Time Budget */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3 pb-2 border-b border-border">Time Budget</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 font-medium">Section</th>
                <th className="text-right py-2 font-medium">Duration</th>
              </tr>
            </thead>
            <tbody>
              {lessons.map((lesson) => (
                <tr key={lesson.slug} className="border-b border-border/50">
                  <td className="py-2">{lesson.title}</td>
                  <td className="py-2 text-right text-muted">{formatMinutes(lesson.estimatedMinutes)}</td>
                </tr>
              ))}
              <tr className="font-semibold">
                <td className="py-2">Total</td>
                <td className="py-2 text-right">{formatMinutes(totalMinutes)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Nav back */}
      <div className="pt-4 border-t border-border">
        <Link
          href="/lessons/getting-set-up"
          className="text-sm text-accent hover:text-accent-light transition-colors"
        >
          &larr; Back to Lesson 1
        </Link>
      </div>
    </div>
  );
}

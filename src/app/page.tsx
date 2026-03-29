import Link from "next/link";
import { lessons } from "@/data/lessons";
import ThemeToggle from "@/components/ThemeToggle";
import TimeBudget from "@/components/TimeBudget";

export default function Home() {
  const totalMinutes = lessons.reduce((sum, l) => sum + l.estimatedMinutes, 0);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          Learn to Vibecode
        </Link>
        <ThemeToggle />
      </header>

      {/* Hero */}
      <main className="flex-1">
        <section className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Learn to{" "}
              <span className="text-accent">Vibecode</span>
            </h1>
            <p className="text-xl text-muted max-w-2xl leading-relaxed">
              Build and deploy your first web app with AI. A hands-on, 2-hour guide to shipping real software using Claude, Next.js, GitHub, and Vercel.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <TimeBudget minutes={totalMinutes} />
              <span className="text-sm text-muted">{lessons.length} lessons</span>
            </div>
          </div>

          {/* Lesson Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lessons.map((lesson) => (
              <Link
                key={lesson.slug}
                href={`/lessons/${lesson.slug}`}
                className="group block rounded-xl border border-border p-5 hover:border-accent/50 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-bold">
                    {lesson.number}
                  </span>
                  <div>
                    <h2 className="font-semibold group-hover:text-accent transition-colors">
                      {lesson.title}
                    </h2>
                    <p className="text-sm text-muted mt-1">{lesson.subtitle}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <TimeBudget minutes={lesson.estimatedMinutes} />
                  <span className="text-xs text-muted group-hover:text-accent transition-colors">
                    Start &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              href={`/lessons/${lessons[0].slug}`}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent-light transition-colors"
            >
              Start Lesson 1 &rarr;
            </Link>
            <Link
              href="/lessons/checklist"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border font-medium hover:bg-surface transition-colors"
            >
              Session Checklist
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border px-6 py-8 text-center text-sm text-muted">
          Built with Claude Code, Next.js, and Vercel.
          <br />
          This site is both the lesson and the project.
        </footer>
      </main>
    </div>
  );
}

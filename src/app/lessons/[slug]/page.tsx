import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { lessons } from "@/data/lessons";
import LessonContent from "@/components/LessonContent";
import TableOfContents from "@/components/TableOfContents";
import TimeBudget from "@/components/TimeBudget";

export function generateStaticParams() {
  return lessons.map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lesson = lessons.find((l) => l.slug === slug);
  if (!lesson) return { title: "Not Found" };
  return {
    title: `${lesson.title} | Learn to Vibecode`,
    description: lesson.subtitle,
  };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lesson = lessons.find((l) => l.slug === slug);

  if (!lesson) notFound();

  const prevLesson = lessons.find((l) => l.number === lesson.number - 1);
  const nextLesson = lessons.find((l) => l.number === lesson.number + 1);

  const tocItems = lesson.sections.map((s) => ({
    id: s.id,
    title: s.title,
  }));

  return (
    <div className="flex gap-8 max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Main content */}
      <article className="flex-1 min-w-0 max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center text-lg font-bold">
              {lesson.number}
            </span>
            <TimeBudget minutes={lesson.estimatedMinutes} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            {lesson.title}
          </h1>
          <p className="text-lg text-muted">{lesson.subtitle}</p>
        </div>

        {/* Content */}
        <LessonContent sections={lesson.sections} />

        {/* Navigation */}
        <nav className="flex items-center justify-between mt-12 pt-6 border-t border-border">
          {prevLesson ? (
            <Link
              href={`/lessons/${prevLesson.slug}`}
              className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
            >
              <span>&larr;</span>
              <div>
                <div className="text-xs text-muted">Previous</div>
                <div className="font-medium">{prevLesson.title}</div>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextLesson ? (
            <Link
              href={`/lessons/${nextLesson.slug}`}
              className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors text-right"
            >
              <div>
                <div className="text-xs text-muted">Next</div>
                <div className="font-medium">{nextLesson.title}</div>
              </div>
              <span>&rarr;</span>
            </Link>
          ) : (
            <Link
              href="/lessons/checklist"
              className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors text-right"
            >
              <div>
                <div className="text-xs text-muted">Next</div>
                <div className="font-medium">Session Checklist</div>
              </div>
              <span>&rarr;</span>
            </Link>
          )}
        </nav>
      </article>

      {/* Table of Contents */}
      <TableOfContents items={tocItems} />
    </div>
  );
}

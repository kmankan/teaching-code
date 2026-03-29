"use client";

interface ExpandableProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export default function Expandable({ title, defaultOpen = false, children }: ExpandableProps) {
  return (
    <details open={defaultOpen} className="my-4 rounded-lg border border-border overflow-hidden group/details">
      <summary className="px-4 py-3 bg-surface hover:bg-surface-2 transition-colors font-medium text-sm flex items-center gap-2">
        <svg
          className="w-4 h-4 text-muted transition-transform group-open/details:rotate-90"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
        {title}
      </summary>
      <div className="px-4 py-3 border-t border-border text-sm leading-relaxed">
        {children}
      </div>
    </details>
  );
}

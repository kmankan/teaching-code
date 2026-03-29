interface TimeBudgetProps {
  minutes: number;
}

export default function TimeBudget({ minutes }: TimeBudgetProps) {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-medium text-muted bg-surface px-2 py-1 rounded-full">
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
      {minutes} min
    </span>
  );
}

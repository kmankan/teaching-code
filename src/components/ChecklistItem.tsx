"use client";

import { useEffect, useState } from "react";

interface ChecklistItemProps {
  id: string;
  label: string;
  sublabel?: string;
}

export default function ChecklistItem({ id, label, sublabel }: ChecklistItemProps) {
  const [checked, setChecked] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setChecked(localStorage.getItem(`checklist-${id}`) === "true");
  }, [id]);

  function toggle() {
    const next = !checked;
    setChecked(next);
    localStorage.setItem(`checklist-${id}`, String(next));
  }

  return (
    <label className="flex items-start gap-3 py-2 cursor-pointer group">
      <input
        type="checkbox"
        checked={mounted ? checked : false}
        onChange={toggle}
        className="mt-0.5 w-5 h-5 rounded border-border accent-accent shrink-0"
      />
      <div>
        <span className={`text-sm font-medium transition-colors ${checked ? "text-muted line-through" : "text-foreground"}`}>
          {label}
        </span>
        {sublabel && (
          <p className="text-xs text-muted mt-0.5">{sublabel}</p>
        )}
      </div>
    </label>
  );
}

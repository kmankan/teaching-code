"use client";

import { useSyncExternalStore } from "react";
import { CHECKLIST_STORAGE_EVENT } from "@/data/checklist";

interface ChecklistItemProps {
  id: string;
  label: string;
  sublabel?: string;
}

function subscribeToChecklist(callback: () => void) {
  window.addEventListener(CHECKLIST_STORAGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHECKLIST_STORAGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

export default function ChecklistItem({ id, label, sublabel }: ChecklistItemProps) {
  const checked = useSyncExternalStore(
    subscribeToChecklist,
    () => localStorage.getItem(`checklist-${id}`) === "true",
    () => false
  );

  function toggle() {
    const next = !checked;
    localStorage.setItem(`checklist-${id}`, String(next));
    window.dispatchEvent(new Event(CHECKLIST_STORAGE_EVENT));
  }

  return (
    <label className="flex items-start gap-3 py-2 cursor-pointer group">
      <input
        type="checkbox"
        checked={checked}
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

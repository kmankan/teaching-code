"use client";

import { useEffect, useState } from "react";
import { CHECKLIST_STORAGE_EVENT, checklistItems } from "@/data/checklist";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function calculate() {
      let completed = 0;
      for (const item of checklistItems) {
        if (localStorage.getItem(`checklist-${item.id}`) === "true") {
          completed++;
        }
      }
      setProgress(checklistItems.length === 0 ? 0 : (completed / checklistItems.length) * 100);
    }

    calculate();
    window.addEventListener("storage", calculate);
    window.addEventListener(CHECKLIST_STORAGE_EVENT, calculate);
    return () => {
      window.removeEventListener("storage", calculate);
      window.removeEventListener(CHECKLIST_STORAGE_EVENT, calculate);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-border z-50">
      <div
        className="h-full bg-accent transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

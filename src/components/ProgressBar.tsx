"use client";

import { useEffect, useState } from "react";
import { lessons } from "@/data/lessons";

const TOTAL_CHECKLIST_ITEMS = 7;

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function calculate() {
      let completed = 0;
      for (let i = 0; i < TOTAL_CHECKLIST_ITEMS; i++) {
        if (localStorage.getItem(`checklist-session-${i}`) === "true") {
          completed++;
        }
      }
      setProgress((completed / TOTAL_CHECKLIST_ITEMS) * 100);
    }

    calculate();
    window.addEventListener("storage", calculate);
    const interval = setInterval(calculate, 1000);
    return () => {
      window.removeEventListener("storage", calculate);
      clearInterval(interval);
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

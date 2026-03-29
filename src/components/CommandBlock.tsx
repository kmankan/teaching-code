"use client";

import { useState } from "react";

interface CommandBlockProps {
  command: string;
  description?: string;
}

export default function CommandBlock({ command, description }: CommandBlockProps) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="my-4">
      {description && (
        <p className="text-sm text-muted mb-1">{description}</p>
      )}
      <div className="flex items-center gap-2 rounded-lg bg-terminal-bg px-4 py-3 font-mono text-sm group">
        <span className="text-muted select-none">$</span>
        <code className="text-terminal-text flex-1">{command}</code>
        <button
          onClick={copy}
          className="text-muted hover:text-terminal-text transition-colors text-xs opacity-0 group-hover:opacity-100 shrink-0"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}

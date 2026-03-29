"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export default function CodeBlock({ code, language, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="rounded-lg border border-border overflow-hidden my-4">
      {(filename || language) && (
        <div className="flex items-center justify-between px-4 py-2 bg-surface-2 border-b border-border text-sm">
          <span className="text-muted font-mono">{filename || language}</span>
          <button
            onClick={copy}
            className="text-muted hover:text-foreground transition-colors text-xs"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      )}
      <div className="relative bg-surface">
        {!filename && !language && (
          <button
            onClick={copy}
            className="absolute top-2 right-2 text-muted hover:text-foreground transition-colors text-xs px-2 py-1 rounded bg-surface-2"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        )}
        <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
          <code className="font-mono">{code}</code>
        </pre>
      </div>
    </div>
  );
}

interface CalloutProps {
  type: "info" | "tip" | "warning" | "meta";
  title?: string;
  children: React.ReactNode;
}

const styles = {
  info: {
    border: "border-l-blue-500",
    bg: "bg-blue-500/5",
    icon: "\u2139\uFE0F",
    defaultTitle: "Info",
  },
  tip: {
    border: "border-l-emerald-500",
    bg: "bg-emerald-500/5",
    icon: "\uD83D\uDCA1",
    defaultTitle: "Tip",
  },
  warning: {
    border: "border-l-amber-500",
    bg: "bg-amber-500/5",
    icon: "\u26A0\uFE0F",
    defaultTitle: "Warning",
  },
  meta: {
    border: "border-l-orange-500",
    bg: "bg-orange-500/5",
    icon: "\uD83E\uDDE0",
    defaultTitle: "Meta Moment",
  },
};

export default function Callout({ type, title, children }: CalloutProps) {
  const s = styles[type];

  return (
    <div className={`my-4 rounded-r-lg border-l-4 ${s.border} ${s.bg} p-4`}>
      <div className="flex items-center gap-2 font-semibold text-sm mb-1">
        <span>{s.icon}</span>
        <span>{title || s.defaultTitle}</span>
      </div>
      <div className="text-sm leading-relaxed text-foreground/80">{children}</div>
    </div>
  );
}

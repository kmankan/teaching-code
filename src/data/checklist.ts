export interface ChecklistItemData {
  id: string;
  label: string;
  sublabel?: string;
}

export interface ChecklistSection {
  title: string;
  items: ChecklistItemData[];
}

export const CHECKLIST_STORAGE_EVENT = "checklist-change";

export const checklistSections: ChecklistSection[] = [
  {
    title: "Tools Installed",
    items: [
      {
        id: "session-0",
        label: "Homebrew installed",
        sublabel: "brew --version returns a version number",
      },
      {
        id: "session-1",
        label: "Node.js installed",
        sublabel: "node --version and npm --version both work",
      },
      {
        id: "session-2",
        label: "Git installed and configured",
        sublabel: "git --version works, name and email configured",
      },
      {
        id: "session-3",
        label: "GitHub CLI authenticated",
        sublabel: "gh auth status shows you're logged in",
      },
      {
        id: "session-4",
        label: "Claude Code installed and authenticated",
        sublabel: "claude --version works, logged in via browser",
      },
    ],
  },
  {
    title: "Project Built",
    items: [
      {
        id: "session-5",
        label: "Next.js project created",
        sublabel: "npm run dev shows your site at localhost:3000",
      },
      {
        id: "session-6",
        label: "Code pushed to GitHub",
        sublabel: "Your repo is visible on github.com",
      },
    ],
  },
  {
    title: "Deployed",
    items: [
      {
        id: "session-7",
        label: "Site deployed on Vercel",
        sublabel: "Live at a .vercel.app URL",
      },
      {
        id: "session-8",
        label: "Verified on phone",
        sublabel: "Opened the URL on your phone and it works",
      },
    ],
  },
  {
    title: "Skills Unlocked",
    items: [
      {
        id: "session-9",
        label: "Made a change and saw it update",
        sublabel: "Edited something with Claude, browser reflected the change",
      },
      {
        id: "session-10",
        label: "Debugged an error",
        sublabel: "Encountered an error, fed it to Claude, and fixed it",
      },
      {
        id: "session-11",
        label: "Confident to iterate solo",
        sublabel: "You could modify your site and redeploy without help",
      },
    ],
  },
];

export const checklistItems = checklistSections.flatMap((section) => section.items);

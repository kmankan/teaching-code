import type { Metadata } from "next";
import Link from "next/link";
import ChecklistItem from "@/components/ChecklistItem";

export const metadata: Metadata = {
  title: "Session Checklist | Learn to Vibecode",
  description: "Track your progress through the vibecoding session",
};

export default function ChecklistPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Session Checklist</h1>
      <p className="text-muted mb-8">Track your progress through the session. Checkboxes are saved automatically.</p>

      {/* Setup */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3 pb-2 border-b border-border">Tools Installed</h2>
        <div className="space-y-1">
          <ChecklistItem id="session-0" label="Homebrew installed" sublabel="brew --version returns a version number" />
          <ChecklistItem id="session-1" label="Node.js installed" sublabel="node --version and npm --version both work" />
          <ChecklistItem id="session-2" label="Git installed and configured" sublabel="git --version works, name and email configured" />
          <ChecklistItem id="session-3" label="GitHub CLI authenticated" sublabel="gh auth status shows you're logged in" />
          <ChecklistItem id="session-4" label="Claude Code installed and authenticated" sublabel="claude --version works, logged in via browser" />
        </div>
      </section>

      {/* Build */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3 pb-2 border-b border-border">Project Built</h2>
        <div className="space-y-1">
          <ChecklistItem id="session-5" label="Next.js project created" sublabel="npm run dev shows your site at localhost:3000" />
          <ChecklistItem id="session-6" label="Code pushed to GitHub" sublabel="Your repo is visible on github.com" />
        </div>
      </section>

      {/* Deploy */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3 pb-2 border-b border-border">Deployed</h2>
        <div className="space-y-1">
          <ChecklistItem id="session-7" label="Site deployed on Vercel" sublabel="Live at a .vercel.app URL" />
          <ChecklistItem id="session-8" label="Verified on phone" sublabel="Opened the URL on your phone and it works" />
        </div>
      </section>

      {/* Confidence */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3 pb-2 border-b border-border">Skills Unlocked</h2>
        <div className="space-y-1">
          <ChecklistItem id="session-9" label="Made a change and saw it update" sublabel="Edited something with Claude, browser reflected the change" />
          <ChecklistItem id="session-10" label="Debugged an error" sublabel="Encountered an error, fed it to Claude, and fixed it" />
          <ChecklistItem id="session-11" label="Confident to iterate solo" sublabel="You could modify your site and redeploy without help" />
        </div>
      </section>

      {/* Time Budget */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3 pb-2 border-b border-border">Time Budget</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 font-medium">Section</th>
                <th className="text-right py-2 font-medium">Duration</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Getting Set Up", "20 min"],
                ["The Big Picture", "15 min"],
                ["Understanding Your Tools", "15 min"],
                ["Frameworks", "5 min"],
                ["Version Control with GitHub", "15 min"],
                ["Build Together", "30 min"],
                ["Deploy with Vercel", "15 min"],
                ["Debugging Mindset", "10 min"],
                ["What Comes Next", "5 min"],
              ].map(([section, duration]) => (
                <tr key={section} className="border-b border-border/50">
                  <td className="py-2">{section}</td>
                  <td className="py-2 text-right text-muted">{duration}</td>
                </tr>
              ))}
              <tr className="font-semibold">
                <td className="py-2">Total</td>
                <td className="py-2 text-right">~2 hours 10 min</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Nav back */}
      <div className="pt-4 border-t border-border">
        <Link
          href="/lessons/getting-set-up"
          className="text-sm text-accent hover:text-accent-light transition-colors"
        >
          &larr; Back to Lesson 1
        </Link>
      </div>
    </div>
  );
}

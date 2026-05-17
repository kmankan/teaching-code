// ============================================================
// Lesson Content Data
// All lesson content lives here as structured, typed data.
// The LessonContent component renders each block by type.
// ============================================================

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; level: 2 | 3 }
  | { type: "command"; command: string; description?: string }
  | { type: "code"; code: string; language?: string; filename?: string }
  | { type: "callout"; variant: "info" | "tip" | "warning" | "meta"; title?: string; text: string }
  | { type: "expandable"; title: string; content: ContentBlock[] }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "checklist"; items: { id: string; label: string; sublabel?: string }[] };

export interface LessonSection {
  id: string;
  title: string;
  content: ContentBlock[];
}

export interface Lesson {
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  estimatedMinutes: number;
  sections: LessonSection[];
}

export const lessons: Lesson[] = [
  // ──────────────────────────────────────────────
  // LESSON 1: Getting Set Up
  // ──────────────────────────────────────────────
  {
    slug: "getting-set-up",
    number: 1,
    title: "Getting Set Up",
    subtitle: "Install the tools that make everything else possible",
    estimatedMinutes: 20,
    sections: [
      {
        id: "accounts",
        title: "Create Your Accounts",
        content: [
          { type: "paragraph", text: "Before touching the terminal, create accounts on these three platforms. Do them in order." },
          { type: "list", ordered: true, items: [
            "[Claude](https://claude.ai) — Claude AI",
            "[GitHub](https://github.com) — where your code lives. Create an account.",
            "[Vercel](https://vercel.com) — where your site goes live. Sign up using your GitHub account.",
          ] },
          { type: "callout", variant: "tip", text: "Vercel connects to GitHub during signup, so GitHub needs to exist first. Use the same email for all three." },
        ],
      },
      {
        id: "terminal",
        title: "Open Your Terminal",
        content: [
          { type: "paragraph", text: "The Terminal lets you talk to your computer by typing instead of clicking. Open it now: Cmd+Space → type 'Terminal' → Enter" },
        ],
      },
      {
        id: "homebrew",
        title: "Install Homebrew",
        content: [
          { type: "paragraph", text: "Homebrew is a package manager — it installs developer tools for you." },
          { type: "command", command: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"` },
          { type: "callout", variant: "warning", text: "It will ask for your Mac password. Nothing appears when you type — that's normal. Just type and hit Enter." },
          { type: "command", command: "brew --version", description: "Verify it worked" },
          { type: "expandable", title: "If 'brew' is not found after install", content: [
            { type: "paragraph", text: "Run the PATH commands that Homebrew printed. Look for lines starting with 'echo' and 'eval' — copy and run them." },
          ]},
        ],
      },
      {
        id: "nodejs",
        title: "Install Node.js",
        content: [
          { type: "paragraph", text: "Node.js runs JavaScript outside the browser. Our tools and framework both need it." },
          { type: "command", command: "brew install node" },
          { type: "command", command: "node --version && npm --version", description: "Both should print version numbers" },
        ],
      },
      {
        id: "git",
        title: "Install Git",
        content: [
          { type: "paragraph", text: "Git tracks changes to your code. More on this later — just install it." },
          { type: "command", command: "brew install git" },
          { type: "command", command: "git --version", description: "Verify" },
          { type: "command", command: `git config --global user.name "Your Name"`, description: "Use your real name" },
          { type: "command", command: `git config --global user.email "your@email.com"`, description: "Use your GitHub email" },
        ],
      },
      {
        id: "github-cli",
        title: "Install GitHub CLI",
        content: [
          { type: "paragraph", text: "Lets you push code to GitHub from the terminal." },
          { type: "command", command: "brew install gh" },
          { type: "command", command: "gh auth login", description: "Follow the prompts: GitHub.com → HTTPS → Yes → Login with browser" },
          { type: "command", command: "gh auth status", description: "Should show you're logged in" },
        ],
      },
      {
        id: "claude-code",
        title: "Install Claude Code",
        content: [
          { type: "paragraph", text: "Claude in your terminal — it reads your code, writes files, and builds apps from plain English." },
          { type: "command", command: "curl -fsSL https://claude.ai/install.sh | bash" },
          { type: "command", command: "claude --version", description: "Verify" },
          { type: "paragraph", text: "Run 'claude' in any directory. It prompts you to log in via browser the first time." },
          { type: "callout", variant: "meta", text: "You just installed the tools that built this website. Every page you're reading was generated by Claude Code." },
          { type: "expandable", title: "If 'claude' is not found after install", content: [
            { type: "paragraph", text: "Restart your terminal (close and reopen it), then try 'claude --version' again. The install script updates your PATH, but the current session doesn't pick it up automatically." },
          ]},
        ],
      },
      {
        id: "clawd-alias",
        title: "Alias Claude to Clawd",
        content: [
          { type: "paragraph", text: "By default, Claude Code pauses and asks for your permission before taking actions like writing files or running commands. That's safe — but slow when you're trying to build something fast." },
          { type: "paragraph", text: "Run this to create a 'clawd' shortcut that skips those prompts:" },
          { type: "command", command: `echo 'alias clawd="claude --dangerously-skip-permissions"' >> ~/.zshrc && source ~/.zshrc` },
          { type: "paragraph", text: "From now on, use 'clawd' in your project directories instead of 'claude'. It'll build without stopping to ask." },
          { type: "callout", variant: "warning", text: "Because it doesn't ask before acting, watch what it's doing — especially when it suggests deleting or overwriting files." },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────
  // LESSON 2: The Big Picture
  // ──────────────────────────────────────────────
  {
    slug: "the-big-picture",
    number: 2,
    title: "The Big Picture",
    subtitle: "See how websites work by inspecting this one",
    estimatedMinutes: 10,
    sections: [
      {
        id: "what-is-vibecoding",
        title: "What is Vibecoding?",
        content: [
          { type: "paragraph", text: "You describe what you want in plain English. AI writes the code. You review, iterate, and ship." },
        ],
      },
      {
        id: "see-for-yourself",
        title: "Try It: Inspect This Page",
        content: [
          { type: "paragraph", text: "A website is just HTML (structure), CSS (design), and JavaScript (interactivity) files. Let's prove it:" },
          { type: "list", ordered: true, items: [
            "Right-click anywhere on this page → select 'Inspect'",
            "Look at the Elements tab — that's the HTML structure of what you're reading",
            "Try hovering over elements in the panel — watch them highlight on the page",
            "Click the Console tab — this is where errors show up",
          ] },
          { type: "callout", variant: "meta", text: "Everything you see in that panel was generated by the code in this project. You'll be looking at that code shortly." },
        ],
      },
      {
        id: "frontend-backend",
        title: "Frontend vs Backend",
        content: [
          { type: "list", items: [
            "Frontend — what the user sees. Runs in their browser. HTML, CSS, and JavaScript.",
            "Backend — what happens on the server. Databases, user accounts, payments, emails.",
          ] },
          { type: "paragraph", text: "Here's what that looks like in practice: you click 'Book a call' on someone's site. The frontend (the button, the calendar UI) sends a request to a backend. The backend checks availability, saves the booking to a database, and sends a confirmation email. The frontend shows you a success message." },
          { type: "heading", text: "APIs", level: 3 },
          { type: "paragraph", text: "Frontend and backend talk to each other through APIs — basically a set of URLs you can send requests to and get data back from. When you embed a third-party service, you're using their API. You don't have to understand the internals — just know the term, because it comes up constantly." },
          { type: "heading", text: "You Probably Don't Need to Build a Backend", level: 3 },
          { type: "paragraph", text: "Most things beginners think require a backend can be handled by third-party services. Some work directly in your frontend, others need a small serverless function to keep secret keys safe." },
          { type: "paragraph", text: "Works directly in your frontend — no backend needed:" },
          { type: "list", items: [
            "Calendar booking — [Cal.com](https://cal.com) or [Calendly](https://calendly.com) (embed a widget)",
            "Contact forms — [Formspree](https://formspree.io) (point your form at their URL, they handle the email)",
            "User accounts — [Clerk](https://clerk.com) (drop in their login UI)",
            "Database reads and writes — [Supabase](https://supabase.com) (their JS client works from the browser)",
          ] },
          { type: "paragraph", text: "These need a serverless function to keep your API keys off the frontend:" },
          { type: "list", items: [
            "Payments — [Stripe](https://stripe.com) (the checkout UI is frontend, but creating a payment has to happen on the server)",
            "Sending email — [Resend](https://resend.com) (your API key must stay secret)",
          ] },
          { type: "callout", variant: "info", title: "What's a serverless function?", text: "A small piece of code that runs on the server only when it's called — no full backend required. Next.js has them built in. You ask Claude to write one and it handles the rest." },
          { type: "callout", variant: "tip", text: "For most personal sites, you can get surprisingly far without touching a backend at all. Add complexity only when you actually need it." },
        ],
      },
      {
        id: "local-vs-production",
        title: "Local vs Production",
        content: [
          { type: "list", items: [
            "Local — your site running on your computer (localhost:3000). Only you can see it.",
            "Production — your site on a server, accessible to anyone with the URL.",
          ] },
          { type: "callout", variant: "meta", text: "This site is running in production on Vercel's servers right now. By the end of this session, you'll have deployed here too." },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────
  // LESSON 3: Understanding Your Tools
  // ──────────────────────────────────────────────
  {
    slug: "understanding-your-tools",
    number: 3,
    title: "Understanding Your Tools",
    subtitle: "Learn the difference by using both",
    estimatedMinutes: 10,
    sections: [
      {
        id: "two-claudes",
        title: "Two Claudes",
        content: [
          { type: "list", items: [
            "Claude.ai — for thinking and planning (web chat, good for questions and brainstorming)",
            "Claude Code — for building (terminal tool, reads and edits your files directly)",
          ] },
          { type: "callout", variant: "meta", text: "This entire website was built by typing prompts into Claude Code. Not a single line was typed by hand." },
        ],
      },
      {
        id: "try-claude-ai",
        title: "Try It: Ask Claude.ai a Question",
        content: [
          { type: "list", ordered: true, items: [
            "Open claude.ai in your browser",
            "Ask: 'Explain what Next.js is in 2 sentences'",
            "Now ask: 'What's the difference between a framework and a library?'",
          ] },
          { type: "paragraph", text: "This is where you go to think, plan, and understand. Keep it open during development." },
        ],
      },
      {
        id: "prompting-rules",
        title: "The 4 Rules of Prompting",
        content: [
          { type: "list", ordered: true, items: [
            "Be specific — 'a landing page with my name, bio, and 3 social links as buttons' not 'build me a website'",
            "Feed it errors — copy the ENTIRE error message and paste it in. This is the #1 vibecoding skill.",
            "Small steps — get one thing working, then add the next. Don't ask for the whole app at once.",
            "Start fresh when stuck — if Claude is going in circles, a new conversation with a clearer prompt is faster.",
          ] },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────
  // LESSON 4: Frameworks
  // ──────────────────────────────────────────────
  {
    slug: "frameworks",
    number: 4,
    title: "Frameworks",
    subtitle: "What they are, and which one to pick",
    estimatedMinutes: 5,
    sections: [
      {
        id: "what-is-a-framework",
        title: "What is a Framework?",
        content: [
          { type: "paragraph", text: "A pre-built structure for your code. It handles routing (URLs → pages), components (reusable UI pieces), and build tools so you don't start from zero." },
        ],
      },
      {
        id: "why-nextjs",
        title: "Why We're Using Next.js",
        content: [
          { type: "paragraph", text: "Next.js isn't always the simplest choice for a personal site — but it's the one we're teaching for three reasons:" },
          { type: "list", items: [
            "Claude knows it better than anything else — you'll hit fewer dead ends during vibecoding sessions",
            "Built by Vercel — deploys with zero configuration, no setup required",
            "It grows with you — when you're ready to add a backend, auth, or payments, you don't have to switch frameworks",
          ] },
          { type: "callout", variant: "meta", title: "Look Around You", text: "This site IS a Next.js app. Open src/app/lessons/[slug]/page.tsx — that single file renders every lesson page you're reading." },
        ],
      },
      {
        id: "alternatives",
        title: "Other Frameworks Worth Knowing",
        content: [
          { type: "paragraph", text: "Next.js is a good default, but it's not always the right tool. Here's when you'd reach for something else:" },
          { type: "expandable", title: "Astro — best for blogs, portfolios, and content sites", content: [
            { type: "paragraph", text: "Astro is purpose-built for sites that are mostly content — blogs, portfolios, documentation. It ships almost no JavaScript by default, which makes pages load faster." },
            { type: "paragraph", text: "It can also handle backend logic (contact forms, API calls, server-side data fetching) via serverless functions, so it's not purely limited to static content. For most personal sites and blogs, it's a better fit than Next.js." },
            { type: "paragraph", text: "The catch: Claude knows it less well than Next.js, so expect more back-and-forth when debugging." },
          ]},
          { type: "expandable", title: "Vite + React — best for dashboards and pure frontend apps", content: [
            { type: "paragraph", text: "Vite gives you a fast, minimal React setup with no opinions about routing or structure. Good for internal tools, dashboards, or anything that's a single-page app with no need for SEO or server-side logic." },
            { type: "paragraph", text: "Falls down if you ever need a backend — you'd have to add a separate API server." },
          ]},
          { type: "expandable", title: "Plain HTML/CSS — best for truly simple pages", content: [
            { type: "paragraph", text: "If you just need a single page — your name, a short bio, some links — plain HTML is perfectly valid. Claude can write it, Vercel can host it. No framework needed." },
            { type: "paragraph", text: "It hits a wall once things get repetitive — like wanting the same header on every page, or reusing any piece of the design. That's where frameworks earn their keep." },
          ]},
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────
  // LESSON 5: Version Control with GitHub
  // ──────────────────────────────────────────────
  {
    slug: "version-control",
    number: 5,
    title: "Version Control with GitHub",
    subtitle: "See it in action before learning the theory",
    estimatedMinutes: 10,
    sections: [
      {
        id: "try-it-first",
        title: "Try It: See Git in Action",
        content: [
          { type: "paragraph", text: "Git tracks every change to your code. GitHub stores it online. Let's see it working:" },
          { type: "command", command: "git log --oneline", description: "Run this in the project directory — you'll see every change that built this site" },
          { type: "command", command: "git diff HEAD~1", description: "See what changed in the most recent commit" },
          { type: "callout", variant: "meta", text: "That history IS the history of this website. Every commit is a snapshot — a save point you can always go back to." },
        ],
      },
      {
        id: "key-concepts",
        title: "4 Words to Know",
        content: [
          { type: "list", items: [
            "Repo — a project folder that Git is tracking",
            "Commit — a save point with a note about what changed",
            "Push — upload your commits to GitHub",
            "Branch — a parallel copy for experimenting (don't worry about this today)",
          ] },
        ],
      },
      {
        id: "why-it-matters",
        title: "Why This Matters",
        content: [
          { type: "paragraph", text: "Every time you push to GitHub, Vercel automatically redeploys your site. That's the whole pipeline: edit → commit → push → live." },
          { type: "callout", variant: "tip", text: "You don't need to memorize git commands. Just tell Claude Code 'commit and push' — it handles the rest." },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────
  // LESSON 6: Let's Build Something
  // ──────────────────────────────────────────────
  {
    slug: "lets-build-something",
    number: 6,
    title: "Let's Build Something",
    subtitle: "The hands-on part — follow along step by step",
    estimatedMinutes: 30,
    sections: [
      {
        id: "terminal-basics",
        title: "Step 1: Learn Four Terminal Commands",
        content: [
          { type: "paragraph", text: "You only need four commands to navigate your computer from the terminal. Run each one as you read it." },
          { type: "command", command: "pwd", description: "Print working directory — shows where you are right now" },
          { type: "command", command: "ls", description: "List — shows what's inside the current folder" },
          { type: "command", command: "cd Desktop", description: "Change directory — moves you into a folder. Try navigating to your Desktop." },
          { type: "command", command: "mkdir my-site", description: "Make directory — creates a new folder called 'my-site'" },
          { type: "command", command: "cd my-site", description: "Now move into it" },
          { type: "command", command: "pwd", description: "Confirm you're inside the new folder" },
          { type: "callout", variant: "tip", text: "Tab autocomplete is your friend — start typing a folder name and hit Tab to finish it." },
        ],
      },
      {
        id: "scaffold",
        title: "Step 2: Start Claude Code",
        content: [
          { type: "paragraph", text: "You should be inside your empty 'my-site' folder. Now start Claude Code:" },
          { type: "command", command: "clawd" },
          { type: "paragraph", text: "Ask Claude to set up the project:" },
          { type: "code", code: "Set up a new Next.js project in this folder with TypeScript and Tailwind CSS", language: "prompt" },
          { type: "callout", variant: "meta", text: "This is exactly how this website started." },
        ],
      },
      {
        id: "describe-and-build",
        title: "Step 3: Tell Claude What to Build",
        content: [
          { type: "paragraph", text: "Be specific. Here's an example prompt:" },
          { type: "code", code: `Build me a personal landing page with:
- My name "Alex" in large text at the top
- A short bio: "Designer and builder. I make things for the web."
- Three social links as styled buttons: Twitter, GitHub, LinkedIn
- A dark background with light text
- Clean, modern design with good spacing`, language: "prompt" },
        ],
      },
      {
        id: "run-locally",
        title: "Step 4: See It Running",
        content: [
          { type: "command", command: "npm run dev", description: "Start the dev server" },
          { type: "paragraph", text: "Open localhost:3000 in your browser. That's your site." },
        ],
      },
      {
        id: "iterate",
        title: "Step 5: Change Something",
        content: [
          { type: "paragraph", text: "Ask Claude to modify your site. Try each of these:" },
          { type: "list", ordered: true, items: [
            "'Make the buttons bigger and add hover effects'",
            "'Change the background to a dark gradient'",
            "'Add an emoji next to my name'",
          ] },
          { type: "paragraph", text: "Watch the browser update after each change. This is the iteration loop — the core of vibecoding." },
        ],
      },
      {
        id: "break-and-fix",
        title: "Step 6: Break Something on Purpose",
        content: [
          { type: "paragraph", text: "Tell Claude: 'Delete the closing tag on the main div in page.tsx'" },
          { type: "list", ordered: true, items: [
            "See the error in your browser",
            "Copy the entire error message",
            "Paste it back to Claude: 'I got this error, fix it'",
            "Watch Claude fix it",
          ] },
          { type: "callout", variant: "tip", text: "You just practiced the most important vibecoding skill: feeding errors to Claude. Remember this loop." },
        ],
      },
      {
        id: "push-to-github",
        title: "Step 7: Push to GitHub",
        content: [
          { type: "paragraph", text: "Tell Claude Code:" },
          { type: "code", code: "Initialise a git repo, commit everything, create a GitHub repo called my-site, and push", language: "prompt" },
          { type: "paragraph", text: "Claude handles all the git commands. Your code is now on GitHub." },
        ],
      },
      {
        id: "file-structure",
        title: "Step 8: Explore What Was Created",
        content: [
          { type: "command", command: "ls src/app/", description: "See the pages in your app" },
          { type: "command", command: "ls src/", description: "See the top-level source structure" },
          { type: "list", items: [
            "src/app/page.tsx — your homepage",
            "src/app/layout.tsx — the shell wrapping every page",
            "src/app/globals.css — your theme and styles",
            "package.json — your project's dependencies",
          ] },
          { type: "callout", variant: "meta", text: "Open src/app/page.tsx in this project. That's the file that renders the landing page you first saw. Every lesson uses the same pattern." },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────
  // LESSON 7: Deploying with Vercel
  // ──────────────────────────────────────────────
  {
    slug: "deploying-with-vercel",
    number: 7,
    title: "Deploying with Vercel",
    subtitle: "Put your site on the internet",
    estimatedMinutes: 10,
    sections: [
      {
        id: "deploy-walkthrough",
        title: "Deploy It",
        content: [
          { type: "paragraph", text: "Vercel takes your code from GitHub and makes it a live website. Every future push auto-redeploys." },
          { type: "list", ordered: true, items: [
            "Go to vercel.com (sign in with GitHub)",
            "Click 'New Project'",
            "Import your GitHub repo",
            "Click 'Deploy'",
            "Wait 30-60 seconds...",
          ] },
          { type: "callout", variant: "tip", title: "The Magic Moment", text: "Open the .vercel.app URL on your phone. Your site is on the internet. You built this." },
          { type: "callout", variant: "meta", text: "The URL you're reading this on IS a Vercel deployment. Same process, same tools." },
        ],
      },
      {
        id: "make-a-change",
        title: "Try It: Push an Update",
        content: [
          { type: "paragraph", text: "Now see continuous deployment in action:" },
          { type: "list", ordered: true, items: [
            "Ask Claude Code to change something on your site",
            "Tell Claude: 'commit and push'",
            "Watch Vercel auto-redeploy (check the Vercel dashboard)",
            "Refresh your live URL — the change is there",
          ] },
          { type: "paragraph", text: "That's the full loop: edit → push → live. Every time." },
        ],
      },
      {
        id: "good-to-know",
        title: "Good to Know (For Later)",
        content: [
          { type: "expandable", title: "Environment variables", content: [
            { type: "paragraph", text: "Vercel has a settings panel to store secrets (API keys, database passwords). Never put these in your code — anyone on GitHub can see them. You'll need this when you add databases or payments." },
          ]},
          { type: "expandable", title: "Custom domains", content: [
            { type: "paragraph", text: "Vercel gives you yourproject.vercel.app for free. You can connect a custom domain (yourname.com) in Vercel settings → Domains. Takes about 5 minutes." },
          ]},
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────
  // LESSON 8: The Debugging Mindset
  // ──────────────────────────────────────────────
  {
    slug: "the-debugging-mindset",
    number: 8,
    title: "The Debugging Mindset",
    subtitle: "Practice the skill that matters most",
    estimatedMinutes: 10,
    sections: [
      {
        id: "the-loop",
        title: "The Debugging Loop",
        content: [
          { type: "paragraph", text: "Errors are normal. Pros spend more time debugging than writing new code. Here's the process:" },
          { type: "list", ordered: true, items: [
            "See an error (in the browser or terminal)",
            "Copy the ENTIRE error message",
            "Paste it to Claude with context: 'I was trying to do X and got this error'",
            "Apply the fix",
            "Repeat until it works",
          ] },
          { type: "callout", variant: "tip", text: "Copy the ENTIRE error, not just the first line. The most useful info is often at the bottom." },
        ],
      },
      {
        id: "practice",
        title: "Try It: Break and Fix",
        content: [
          { type: "paragraph", text: "If you haven't already, let's practice:" },
          { type: "list", ordered: true, items: [
            "Right-click this page → Inspect → Console tab",
            "Note: no errors (this is a healthy page)",
            "Now in your project, ask Claude to 'add a component that imports something that doesn't exist'",
            "See the error → copy it → feed it back to Claude → fixed",
          ] },
        ],
      },
      {
        id: "when-stuck",
        title: "When You're Stuck",
        content: [
          { type: "list", items: [
            "Claude going in circles? Start a new conversation with a clearer prompt",
            "Stuck 15+ minutes? Describe the GOAL, not the error",
            "Google the error message — Stack Overflow often has the exact fix",
          ] },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────
  // LESSON 9: What Comes Next
  // ──────────────────────────────────────────────
  {
    slug: "what-comes-next",
    number: 9,
    title: "What Comes Next",
    subtitle: "Where to go from here",
    estimatedMinutes: 5,
    sections: [
      {
        id: "advanced-features",
        title: "Things to Add Next",
        content: [
          { type: "list", items: [
            "Databases (Supabase, Vercel Postgres) — store and retrieve data",
            "Authentication (NextAuth, Clerk) — user sign-up and login",
            "Payments (Stripe) — charge money",
            "APIs — send emails, pull data, add AI features",
          ] },
          { type: "paragraph", text: "Each of these is one vibecoding session away." },
        ],
      },
      {
        id: "resources",
        title: "Resources",
        content: [
          { type: "list", items: [
            "Claude.ai — for any question, any time",
            "vercel.com/docs — excellent documentation",
            "nextjs.org/learn — free interactive tutorial",
          ] },
        ],
      },
      {
        id: "key-takeaway",
        title: "The Key Takeaway",
        content: [
          { type: "paragraph", text: "You need four skills:" },
          { type: "list", ordered: true, items: [
            "Describe what you want clearly",
            "Understand the system (frontend, backend, GitHub, Vercel)",
            "Debug fearlessly",
            "Ship fast and iterate",
          ] },
          { type: "callout", variant: "meta", text: "This website was built with exactly the process you just learned. Same tools, same prompts, same deploy. Now go build something of your own." },
        ],
      },
    ],
  },
];

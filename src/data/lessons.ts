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
        id: "terminal",
        title: "What is the Terminal?",
        content: [
          { type: "paragraph", text: "The Terminal is a text-based way to talk to your computer. Instead of clicking buttons, you type commands — it's more powerful but less visual." },
          { type: "paragraph", text: "Think of it like texting your computer instead of pointing and clicking. Most developer tools work through the terminal." },
          { type: "command", command: "open -a Terminal", description: "Open Terminal on Mac (or use Spotlight: Cmd+Space → type 'Terminal' → Enter)" },
          { type: "callout", variant: "tip", text: "Don't be intimidated by the terminal. We'll mostly let Claude type commands for us — you just need to know where to look." },
        ],
      },
      {
        id: "homebrew",
        title: "Install Homebrew",
        content: [
          { type: "paragraph", text: "Homebrew is an app store for developer tools, but you install things by typing instead of clicking. It makes installing everything else easy and consistent." },
          { type: "command", command: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`, description: "Install Homebrew" },
          { type: "callout", variant: "warning", text: "It may ask for your Mac password (the one you use to log in). When you type it, nothing will appear on screen — that's normal, just type and hit Enter." },
          { type: "callout", variant: "tip", text: "After installation, Homebrew may print 'Next steps' about adding it to your PATH. Follow those instructions — they usually look like 'echo >> ~/.zprofile' and 'eval' commands." },
          { type: "command", command: "brew --version", description: "Verify Homebrew is installed" },
        ],
      },
      {
        id: "nodejs",
        title: "Install Node.js",
        content: [
          { type: "paragraph", text: "Node.js is the engine that runs JavaScript outside of a browser. Most modern web tools depend on it — including Claude Code and Next.js (the framework we'll use to build)." },
          { type: "command", command: "brew install node", description: "Install Node.js via Homebrew" },
          { type: "command", command: "node --version", description: "Verify Node.js is installed" },
          { type: "command", command: "npm --version", description: "Verify npm (Node's package manager) is installed" },
          { type: "callout", variant: "info", text: "npm is Node's 'package manager' — it's how you install JavaScript libraries and tools. Think of it like Homebrew but specifically for JavaScript stuff." },
        ],
      },
      {
        id: "git",
        title: "Install Git",
        content: [
          { type: "paragraph", text: "Git is the version control tool that tracks changes to your code. We'll cover what that means in detail later — for now, just install it." },
          { type: "command", command: "brew install git", description: "Install Git" },
          { type: "command", command: "git --version", description: "Verify Git is installed" },
          { type: "command", command: `git config --global user.name "Your Name"`, description: "Set your Git identity (use your real name)" },
          { type: "command", command: `git config --global user.email "your@email.com"`, description: "Set your Git email (use the same email as your GitHub account)" },
        ],
      },
      {
        id: "github-cli",
        title: "Install GitHub CLI & Authenticate",
        content: [
          { type: "paragraph", text: "The GitHub CLI lets you interact with GitHub from the terminal instead of the browser — so we can push code to GitHub without copying tokens around." },
          { type: "command", command: "brew install gh", description: "Install GitHub CLI" },
          { type: "command", command: "gh auth login", description: "Authenticate with GitHub" },
          { type: "list", items: [
            "Select: GitHub.com",
            "Select: HTTPS",
            "Select: Yes (authenticate with browser)",
            "Select: Login with browser",
            "A browser window opens — log into GitHub and approve",
          ] },
          { type: "command", command: "gh auth status", description: "Verify you're logged in" },
        ],
      },
      {
        id: "claude-code",
        title: "Install Claude Code",
        content: [
          { type: "paragraph", text: "Claude Code is Claude but in your terminal — it can read your code, write files, run commands, and build your app from natural language." },
          { type: "command", command: "npm install -g @anthropic-ai/claude-code", description: "Install Claude Code globally" },
          { type: "command", command: "claude --version", description: "Verify Claude Code is installed" },
          { type: "paragraph", text: "Run 'claude' in any directory — it will prompt you to log in via browser the first time. After that, it's just a chat interface inside your terminal." },
          { type: "callout", variant: "meta", text: "You're installing the very tools that were used to build this website. Every component, every page, every line of styling was generated by Claude Code from natural language prompts." },
        ],
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting",
        content: [
          { type: "expandable", title: "brew: command not found", content: [
            { type: "paragraph", text: "You need to run the PATH commands that Homebrew printed during installation. Look for lines starting with 'echo' and 'eval' — copy and run them." },
          ]},
          { type: "expandable", title: "npm install -g fails with permission errors", content: [
            { type: "paragraph", text: "Try running with sudo:" },
            { type: "command", command: "sudo npm install -g @anthropic-ai/claude-code" },
          ]},
          { type: "expandable", title: "gh auth login hangs", content: [
            { type: "paragraph", text: "Make sure you're logged into GitHub in your default browser first, then try again." },
          ]},
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
    subtitle: "How websites actually work, and what vibecoding means",
    estimatedMinutes: 15,
    sections: [
      {
        id: "what-is-vibecoding",
        title: "What is Vibecoding?",
        content: [
          { type: "paragraph", text: "Vibecoding is a new way to build software. You describe what you want in plain English, and AI writes the code for you." },
          { type: "paragraph", text: "You don't need to understand every line of code — you need to understand the system. Your job is to be a good communicator and decision-maker, not a syntax expert." },
          { type: "list", items: [
            "You describe what you want in natural language",
            "AI generates the code",
            "You review, test, and iterate",
            "You ship it to the world",
          ] },
          { type: "callout", variant: "info", text: "Think of it like being an architect — you don't lay every brick yourself, but you need to understand how buildings work to design one that stands up." },
        ],
      },
      {
        id: "how-websites-work",
        title: "How a Website Actually Works",
        content: [
          { type: "paragraph", text: "A website is just files (HTML, CSS, JavaScript) sitting on a computer somewhere. When someone visits your URL, that computer sends those files to their browser, and the browser turns them into what you see." },
          { type: "list", items: [
            "HTML — the structure and content (text, images, links)",
            "CSS — the visual design (colors, fonts, layout)",
            "JavaScript — the interactivity (clicks, animations, data fetching)",
          ] },
          { type: "heading", text: "Frontend vs Backend", level: 3 },
          { type: "paragraph", text: "Frontend is what the user sees and interacts with — it runs in the browser. Backend is what happens on the server that the user doesn't see — processing data, talking to databases, handling authentication." },
          { type: "paragraph", text: "For now, we're focused on frontend. That's where most vibecoded projects start, and it's the fastest way to get something visible and shareable." },
        ],
      },
      {
        id: "local-vs-production",
        title: "Local vs Production",
        content: [
          { type: "paragraph", text: "When you're building, your website runs on your own computer. This is called 'local development' — only you can see it, usually at an address like localhost:3000." },
          { type: "paragraph", text: "When you're ready to share it with the world, you 'deploy' it — uploading it to a server where anyone with the URL can access it. That's 'production'." },
          { type: "callout", variant: "tip", text: "Something can work perfectly on your computer and break in production — this is normal and not scary. It usually means there's a small configuration difference between your machine and the server." },
          { type: "callout", variant: "meta", text: "Right now, this website is running in production on Vercel's servers. Later in this lesson, you'll deploy it yourself and see it go live." },
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
    subtitle: "Claude.ai vs Claude Code, and how to talk to AI effectively",
    estimatedMinutes: 15,
    sections: [
      {
        id: "claude-ai",
        title: "Claude.ai (The Chat Interface)",
        content: [
          { type: "paragraph", text: "Claude.ai is the web-based chat interface. This is where you have conversations with Claude to plan, brainstorm, and debug." },
          { type: "list", items: [
            "Good for: asking questions, explaining concepts, planning what to build",
            "Good for: pasting error messages and getting explanations",
            "Good for: thinking through architecture before you code",
            "Good for: pasting screenshots of bugs or designs",
          ] },
          { type: "callout", variant: "tip", text: "Claude.ai has 'Projects' — you can upload files and give Claude persistent context about what you're working on. Great for ongoing work." },
        ],
      },
      {
        id: "claude-code",
        title: "Claude Code (The Terminal Tool)",
        content: [
          { type: "paragraph", text: "Claude Code is Claude but it can directly read and edit your code files. It lives in your terminal, right next to your code. It can create files, run your app, install packages, fix bugs — all from natural language." },
          { type: "paragraph", text: "The key distinction: Claude Code is how you build. Claude.ai is how you think and plan." },
          { type: "callout", variant: "meta", text: "This entire website was built by typing prompts into Claude Code. Every component, every page, every line of styling was generated from natural language descriptions — not typed out character by character." },
        ],
      },
      {
        id: "effective-prompting",
        title: "How to Talk to Claude Effectively",
        content: [
          { type: "heading", text: "Be specific about what you want", level: 3 },
          { type: "paragraph", text: "\"Build me a website\" is weak. \"Build me a single-page personal website with my name in large text, a short bio paragraph, and three social media links styled as buttons\" is strong." },
          { type: "heading", text: "Give context", level: 3 },
          { type: "paragraph", text: "Tell Claude what framework you're using, what you've already built, and what the goal is. The more context, the better the output." },
          { type: "heading", text: "Feed it errors", level: 3 },
          { type: "paragraph", text: "When something breaks, copy the entire error message and paste it in. This is the #1 vibecoding skill. Error messages are Claude's favorite food." },
          { type: "heading", text: "Iterate in small steps", level: 3 },
          { type: "paragraph", text: "Don't ask for the whole app at once. Get one thing working, then add the next thing. Small steps = fewer bugs = faster progress." },
          { type: "heading", text: "Know when to start fresh", level: 3 },
          { type: "paragraph", text: "If Claude is going in circles on a bug, sometimes a new conversation with a clearer prompt is faster than 20 more messages." },
          { type: "callout", variant: "tip", text: "The quality of what AI builds is directly proportional to the quality of how you describe what you want. This is the core skill of vibecoding." },
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
    subtitle: "What they are and why we picked Next.js",
    estimatedMinutes: 5,
    sections: [
      {
        id: "what-is-a-framework",
        title: "What is a Framework?",
        content: [
          { type: "paragraph", text: "A framework is a pre-built structure for organizing your code. It handles the repetitive boilerplate so you can focus on what makes your site unique." },
          { type: "paragraph", text: "Without a framework, you're writing raw HTML, CSS, and JavaScript files. That's fine for a single page, but it gets messy fast when you want multiple pages, reusable components, and modern features." },
          { type: "list", items: [
            "Routing — how different URLs show different pages",
            "Components — reusable building blocks for your UI",
            "Build tools — optimizing your code for fast loading",
            "Developer experience — hot reloading, error messages, TypeScript support",
          ] },
        ],
      },
      {
        id: "why-nextjs",
        title: "Why Next.js?",
        content: [
          { type: "paragraph", text: "Next.js is the most popular full-stack React framework. It's built by Vercel (the company whose platform we'll deploy to), and Claude knows it extremely well." },
          { type: "list", items: [
            "Most popular — huge community, tons of examples, Claude has trained on thousands of Next.js projects",
            "Full-stack — handles both frontend and backend in one project",
            "File-based routing — create a file, get a URL automatically",
            "Built by Vercel — deploys to Vercel with zero configuration",
          ] },
          { type: "callout", variant: "meta", title: "Look Around You", text: "This website IS a Next.js app. The page you're reading right now is rendered by a file called page.tsx using Next.js's App Router. Open your code editor and look at src/app/lessons/[slug]/page.tsx — that single file handles every lesson page." },
          { type: "callout", variant: "info", text: "Other frameworks exist (Astro, Remix, plain HTML). You can explore those later — Next.js is the best starting point for vibecoding because of Claude's deep familiarity with it." },
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
    subtitle: "Track every change and never lose your work",
    estimatedMinutes: 15,
    sections: [
      {
        id: "why-version-control",
        title: "Why Version Control Matters",
        content: [
          { type: "paragraph", text: "Imagine writing a 10-page essay with no 'undo' button and no way to see what you changed yesterday. That's coding without version control." },
          { type: "paragraph", text: "Git tracks every change you make to your code, like a timeline you can scroll through. GitHub is where your code lives online — it's like Google Drive for code, but with superpowers." },
        ],
      },
      {
        id: "key-concepts",
        title: "Key Concepts",
        content: [
          { type: "heading", text: "Repository (repo)", level: 3 },
          { type: "paragraph", text: "A project folder that Git is tracking. Your entire project is one repository." },
          { type: "heading", text: "Commit", level: 3 },
          { type: "paragraph", text: "A snapshot of your code at a specific moment, with a note about what changed. Think of it as a save point in a video game." },
          { type: "heading", text: "Push", level: 3 },
          { type: "paragraph", text: "Sending your local commits up to GitHub. Until you push, your changes only exist on your computer." },
          { type: "heading", text: "Branch", level: 3 },
          { type: "paragraph", text: "A parallel copy of your code where you can experiment without breaking the main version. We won't go deep on branches today — just know they exist." },
        ],
      },
      {
        id: "why-for-vibecoding",
        title: "Why This Matters for Vibecoding",
        content: [
          { type: "list", items: [
            "Vercel connects directly to GitHub — every time you push code, Vercel automatically rebuilds and deploys your site",
            "If you break something, you can always roll back to a previous commit",
            "Claude Code can handle git commands for you — just say 'commit this and push to GitHub'",
          ] },
          { type: "callout", variant: "meta", text: "Run 'git log' in this project's directory. You'll see the history of every change that built what you're reading right now — each commit is a snapshot of the project at a point in time." },
          { type: "callout", variant: "tip", text: "You don't need to memorize git commands. Claude Code handles them for you. But understanding what a commit and push do helps you understand the whole flow." },
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
    subtitle: "Hands-on: build and modify a real project with Claude",
    estimatedMinutes: 30,
    sections: [
      {
        id: "the-project",
        title: "The Project",
        content: [
          { type: "paragraph", text: "Everything before this was context. Now you see it all come together." },
          { type: "paragraph", text: "We're going to scaffold a Next.js project, modify it with Claude Code, and get it running locally. The project? A personal landing page — something you can actually use and share." },
          { type: "callout", variant: "meta", text: "Plot twist: this website IS the project. You're already looking at a Next.js app built with Claude Code. Now let's trace through how it was created." },
        ],
      },
      {
        id: "scaffold",
        title: "Step 1: Scaffold the Project",
        content: [
          { type: "paragraph", text: "Create a folder for your project and scaffold a new Next.js app:" },
          { type: "command", command: "mkdir my-site && cd my-site" },
          { type: "command", command: "npx create-next-app@latest . --typescript --tailwind --app --src-dir --eslint --use-npm", description: "Scaffold a new Next.js project in the current directory" },
          { type: "paragraph", text: "This creates a complete project structure with all the tools preconfigured. You'll see folders like src/app (your pages), src/components (reusable pieces), and config files." },
        ],
      },
      {
        id: "start-claude",
        title: "Step 2: Start Claude Code",
        content: [
          { type: "command", command: "claude", description: "Start Claude Code in your project directory" },
          { type: "paragraph", text: "Claude Code will see all your files and understand your project structure. Now you can talk to it in plain English." },
        ],
      },
      {
        id: "describe-and-build",
        title: "Step 3: Describe What You Want",
        content: [
          { type: "paragraph", text: "Tell Claude what you want on your page. Be specific! Here's an example prompt:" },
          { type: "code", code: `Build me a personal landing page with:
- My name "Alex" in large text at the top
- A short bio: "Designer and builder. I make things for the web."
- Three social links as styled buttons: Twitter, GitHub, LinkedIn
- A dark background with light text
- Clean, modern design with good spacing`, language: "prompt" },
          { type: "paragraph", text: "Watch as Claude creates the files. It will modify src/app/page.tsx and possibly create new components." },
        ],
      },
      {
        id: "run-locally",
        title: "Step 4: Run It Locally",
        content: [
          { type: "command", command: "npm run dev", description: "Start the development server" },
          { type: "paragraph", text: "Open your browser to localhost:3000 — you should see your site! This is running locally on your machine. Only you can see it (for now)." },
          { type: "callout", variant: "tip", text: "The dev server watches for changes. When Claude edits a file, the browser refreshes automatically. This is called 'hot reloading' and it makes development feel magical." },
        ],
      },
      {
        id: "iterate",
        title: "Step 5: Make Changes",
        content: [
          { type: "paragraph", text: "Now try asking Claude to change something. The iteration loop is the heart of vibecoding:" },
          { type: "list", ordered: true, items: [
            "Look at your site in the browser",
            "Decide what to change ('make the buttons bigger', 'change the background to dark blue')",
            "Tell Claude Code what you want",
            "Watch the browser update",
            "Repeat",
          ] },
          { type: "callout", variant: "tip", text: "Try breaking something on purpose! Introduce an error, see what happens, then paste the error message back to Claude. This is practice for the debugging mindset." },
        ],
      },
      {
        id: "push-to-github",
        title: "Step 6: Push to GitHub",
        content: [
          { type: "paragraph", text: "When you're happy with your site, ask Claude Code to save it to GitHub:" },
          { type: "code", code: "Initialise a git repo, commit everything, create a GitHub repo called my-site, and push", language: "prompt" },
          { type: "paragraph", text: "Claude Code handles all the git commands — init, add, commit, remote setup, and push. Your code is now on GitHub for the world to see (and for Vercel to deploy)." },
        ],
      },
      {
        id: "file-structure",
        title: "Understanding the File Structure",
        content: [
          { type: "paragraph", text: "Take a moment to look at what was created. You don't need to understand every file, but knowing the lay of the land helps:" },
          { type: "list", items: [
            "src/app/page.tsx — your homepage (this is the main file you'll edit)",
            "src/app/layout.tsx — the shell that wraps every page (fonts, metadata, shared UI)",
            "src/app/globals.css — your global styles and theme colors",
            "src/components/ — reusable building blocks",
            "package.json — lists your project's dependencies",
            "public/ — static files like images and icons",
          ] },
          { type: "callout", variant: "meta", text: "Open src/app/page.tsx in this project. That file generates the landing page you saw when you first visited this site. Every lesson page you're reading uses the same pattern — a page.tsx file that Next.js turns into a URL." },
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
    subtitle: "Put your site on the internet in under a minute",
    estimatedMinutes: 15,
    sections: [
      {
        id: "what-is-vercel",
        title: "What is Vercel?",
        content: [
          { type: "paragraph", text: "Vercel is a platform that takes your code from GitHub and turns it into a live website. It gives you a URL anyone in the world can visit." },
          { type: "paragraph", text: "The magic: every time you push new code to GitHub, Vercel automatically updates your live site. This is called 'continuous deployment' — you push, it deploys." },
          { type: "callout", variant: "meta", text: "The URL you're reading this on IS a Vercel deployment. This site was pushed to GitHub, Vercel detected the change, built it, and made it live — all automatically." },
        ],
      },
      {
        id: "deploy-walkthrough",
        title: "Deploy Walkthrough",
        content: [
          { type: "list", ordered: true, items: [
            "Go to vercel.com (you should already be signed up via GitHub)",
            "Click 'New Project'",
            "Import the GitHub repo you just created",
            "Vercel auto-detects it's a Next.js project and configures everything",
            "Click 'Deploy'",
            "Wait 30-60 seconds...",
            "Your site is live!",
          ] },
          { type: "callout", variant: "tip", title: "The Magic Moment", text: "Open the .vercel.app URL on your phone. Your site is on the internet. You built this. Show someone." },
        ],
      },
      {
        id: "environment-variables",
        title: "Environment Variables",
        content: [
          { type: "paragraph", text: "Vercel has a settings panel where you can store secrets — API keys, database passwords, configuration values. These are called environment variables." },
          { type: "paragraph", text: "You never put secrets in your code. Anyone on GitHub could see them. Instead, you store them in Vercel's dashboard and your code reads them at runtime." },
          { type: "callout", variant: "info", text: "You don't need environment variables for this project. But when you start adding databases, payments, or external APIs, this is where secrets go. Just know it exists." },
        ],
      },
      {
        id: "custom-domains",
        title: "Custom Domains",
        content: [
          { type: "paragraph", text: "Vercel gives you yourproject.vercel.app for free. But you can buy a custom domain (like yourname.com) and connect it in about 5 minutes." },
          { type: "list", ordered: true, items: [
            "Buy a domain from any registrar (Namecheap, Google Domains, Vercel itself)",
            "Go to your project settings in Vercel → Domains",
            "Add your domain and follow the DNS instructions",
            "Vercel handles SSL (the padlock icon) automatically",
          ] },
          { type: "paragraph", text: "This is how you go from a side project to something that looks professional." },
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
    subtitle: "Errors are information, not failure",
    estimatedMinutes: 10,
    sections: [
      {
        id: "errors-are-normal",
        title: "Errors Are Normal",
        content: [
          { type: "paragraph", text: "Professional developers spend more time debugging than writing new code. An error message is not a failure — it's the computer telling you exactly what's wrong." },
          { type: "paragraph", text: "When you see a red error, don't panic. Read it. Even if you don't fully understand every word, the error message contains clues that Claude can use to fix the problem." },
          { type: "callout", variant: "info", text: "The best developers aren't the ones who never get errors. They're the ones who are fast at figuring out what went wrong." },
        ],
      },
      {
        id: "debug-loop",
        title: "The Vibecoder's Debugging Loop",
        content: [
          { type: "list", ordered: true, items: [
            "Something breaks (you see an error in the browser or terminal)",
            "Read the error message (even if you don't fully understand it)",
            "Copy the entire error message",
            "Paste it to Claude with context: 'I was trying to do X and got this error'",
            "Claude suggests a fix — apply it",
            "Check if it works",
            "Repeat until fixed",
          ] },
          { type: "callout", variant: "tip", text: "The most important step is copying the ENTIRE error message, not just the first line. Error messages often have the most useful information at the bottom (the 'stack trace')." },
        ],
      },
      {
        id: "browser-devtools",
        title: "Browser DevTools",
        content: [
          { type: "paragraph", text: "Your browser has built-in developer tools. Right-click anywhere on a page and select 'Inspect' to open them." },
          { type: "list", items: [
            "Console tab — shows JavaScript errors and log messages",
            "Elements tab — shows the HTML structure of the page (you can even edit it live)",
            "Network tab — shows all the requests the page is making",
          ] },
          { type: "command", command: "console.log('Hello from the console!')", description: "Try typing this in the browser console" },
          { type: "callout", variant: "tip", text: "If something looks wrong visually but there's no error message, open DevTools → Console. There might be warnings or errors logged there that aren't shown on the page." },
        ],
      },
      {
        id: "when-to-escalate",
        title: "When to Escalate",
        content: [
          { type: "list", items: [
            "If Claude Code is going in circles (fixing one thing, breaking another), try Claude.ai for a fresh perspective",
            "If you've been stuck for 15+ minutes, describe the GOAL not the error — sometimes you're solving the wrong problem",
            "Google the error message — Stack Overflow and GitHub Issues often have exact solutions",
            "Take a break — seriously, stepping away for 5 minutes often leads to a breakthrough",
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
    subtitle: "Where to go from here and what to explore",
    estimatedMinutes: 5,
    sections: [
      {
        id: "advanced-features",
        title: "Advanced Features to Explore",
        content: [
          { type: "paragraph", text: "You've built and deployed a website. Here's what you can add next — each of these is a vibecoding session away:" },
          { type: "heading", text: "Databases", level: 3 },
          { type: "paragraph", text: "Supabase or Vercel Postgres. For storing and retrieving data — user profiles, blog posts, form submissions." },
          { type: "heading", text: "Authentication", level: 3 },
          { type: "paragraph", text: "NextAuth or Clerk. For user sign-up and login. Let people create accounts on your site." },
          { type: "heading", text: "Payments", level: 3 },
          { type: "paragraph", text: "Stripe. For charging money. If you want to sell something, this is the standard." },
          { type: "heading", text: "APIs", level: 3 },
          { type: "paragraph", text: "Connect to other services — send emails (Resend), pull data from other apps, add AI features (Claude API)." },
        ],
      },
      {
        id: "resources",
        title: "Resources",
        content: [
          { type: "list", items: [
            "Claude.ai — for any question you have, any time",
            "Vercel Documentation (vercel.com/docs) — genuinely excellent",
            "Next.js Tutorial (nextjs.org/learn) — free, interactive, and well-paced",
            "YouTube — search 'vibecoding tutorial' for visual walkthroughs",
          ] },
        ],
      },
      {
        id: "key-takeaway",
        title: "The Key Takeaway",
        content: [
          { type: "paragraph", text: "You don't need to learn to code in the traditional sense. You need to learn to:" },
          { type: "list", ordered: true, items: [
            "Describe what you want clearly",
            "Understand the system (frontend, backend, GitHub, Vercel)",
            "Debug fearlessly (errors are information, not failure)",
            "Ship fast and iterate",
          ] },
          { type: "paragraph", text: "You just built a website, deployed it to the internet, and learned the entire toolchain in about two hours. That's not beginner luck — that's the future of building software." },
          { type: "callout", variant: "meta", text: "This website — the one you're reading right now — was built using exactly the process you just learned. The tools, the prompts, the deploy. There is no gap between what was taught and what was done. Now go build something of your own." },
        ],
      },
    ],
  },
];

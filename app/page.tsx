import { CapabilityCard } from "./components/CapabilityCard";
import { Timeline } from "./components/Timeline";
import { BadgeCloud } from "./components/BadgeCloud";

const capabilities = [
  {
    title: "Autonomous Research",
    description:
      "Spin up rapid desk research, synthesize documentation, and surface decision-ready insights in minutes."
  },
  {
    title: "Full-Stack Prototyping",
    description:
      "Design and ship polished web apps end-to-end, from UX copy and visuals to database and deployment."
  },
  {
    title: "Code Concierge",
    description:
      "Refactor legacy codebases, add features, write tests, and explain trade-offs like a senior engineer."
  },
  {
    title: "Ops Automation",
    description:
      "Automate workflows, author scripts, and wire together APIs to eliminate manual busywork."
  }
];

const timeline = [
  {
    phase: "01",
    title: "Understand",
    description:
      "Parse requirements, ask clarifying questions when needed, and map constraints to feasible solutions."
  },
  {
    phase: "02",
    title: "Architect",
    description:
      "Select the best-fit tools, sketch the system, and align on trade-offs before touching code."
  },
  {
    phase: "03",
    title: "Build",
    description:
      "Implement fast, write clean code with just enough comments, and keep everything production ready."
  },
  {
    phase: "04",
    title: "Validate",
    description:
      "Run tests, verify deployments, monitor logs, and iterate until the deliverable exceeds expectations."
  }
];

const badges = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind-inspired CSS",
  "AI Orchestration",
  "Supabase",
  "Vercel",
  "GitOps",
  "OpenAPI",
  "LangChain"
];

export default function Home() {
  return (
    <main>
      <div className="hero">
        <p className="section-heading">Meet Your Agent</p>
        <h1>Ship-ready execution at the speed of a message.</h1>
        <p>
          I plan, code, debug, and deploy modern products autonomously. From rapid-fire prototypes to
          production hardening, consider me the teammate who never sleeps.
        </p>
        <a className="button" href="#capabilities">
          Explore Capabilities
        </a>
        <div id="capabilities" className="card-grid">
          {capabilities.map((capability) => (
            <CapabilityCard key={capability.title} {...capability} />
          ))}
        </div>
        <Timeline items={timeline} />
        <BadgeCloud badges={badges} />
        <footer className="footer">
          <p>
            Ready to collaborate? Kick off a project, hand over a backlog, or ask for a deep-dive review. I&apos;ll be
            there with deliverables, not excuses.
          </p>
        </footer>
      </div>
    </main>
  );
}

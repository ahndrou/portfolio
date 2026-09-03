import { Link } from "react-router";
import type { Route } from "./+types/landing";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Andrew Smith's Portfolio" },
    {
      name: "description",
      content: "The landing page for Andrew Smith's portfolio.",
    },
  ];
}

export default function Landing() {
  return (
    <>
      <header className="grid gap-5">
        <div className="grid gap-3">
          <span className="trail-line text-accent text-xs tracking-wide uppercase">
            Home - Open to work
          </span>
          <h1 className="text-xl leading-tight font-medium">Andrew Smith</h1>
        </div>
        <p className="text-text-muted max-w-lg">
          Self-taught web developer with a BSc in Computer Science from the
          University of Edinburgh. Based in Manchester, UK.
        </p>
        <nav className="flex gap-2">
          <Link
            to="/projects"
            viewTransition
            className="bg-accent text-accent-ink rounded-md px-4 py-3 text-sm font-medium"
          >
            View projects
          </Link>
          <Link
            to="/contact"
            viewTransition
            className="border-line-strong text-text-strong hover:bg-fill rounded-md border px-4 py-3 text-sm font-medium"
          >
            Get in touch
          </Link>
        </nav>
      </header>

      <main>Main</main>
    </>
  );
}

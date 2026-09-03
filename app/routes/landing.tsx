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
          <span className="trail-line text-accent font-mono text-xs tracking-wide uppercase">
            Home - Open to work
          </span>
          <h1 className="font-display text-text-strong text-xl leading-tight font-semibold">
            Andrew Smith
          </h1>
        </div>

        <p className="text-text-muted max-w-lg">
          Self-taught web developer with a BSc in Computer Science from the
          University of Edinburgh. Based in Manchester, UK.
        </p>
        <nav className="flex gap-3">
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

      <main className="grid gap-5">
        <h2 className="trail-line text-text-quiet font-mono text-xs tracking-wide uppercase">
          About
        </h2>

        <section className="surface border-line grid grid-cols-1 gap-5 rounded-lg border p-5 md:grid-cols-2">
          <div className="grid content-start gap-2">
            <h3 className="leading-tight font-medium">Hi, I'm Andrew</h3>
            <p className="text-text-muted">
              Frontend-focused, with fundamentals from two years of self-study
              on top of the degree.
            </p>
          </div>

          <div className="grid content-start gap-2">
            <h3 className="leading-tight font-medium">Recent Interests</h3>
            <p className="text-text-muted">
              Interactive browser experiences — a 3D game built with ThreeJS,
              custom shaders and physics.
            </p>
          </div>

          <div className="grid content-start gap-2">
            <h3 className="leading-tight font-medium">Currently Exploring</h3>
            <p className="text-text-muted">
              TypeScript across projects, and reading up on server-side
              rendering.
            </p>
          </div>

          <div className="grid content-start gap-2">
            <h3 className="leading-tight font-medium">Other Interests</h3>
            <p className="text-text-muted">
              3D modelling in Blender, and sharpening design skills generally.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

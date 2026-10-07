import { Link } from "react-router";
import type { Route } from "./+types/landing";

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

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
            className="bg-accent text-accent-ink hover:glow rounded-md px-4 py-3 text-sm font-medium"
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

      <main className="grid gap-7">
        <section className="grid gap-6">
          <h2 className="trail-line text-text-quiet font-mono text-xs tracking-wide uppercase">
            About
          </h2>

          <section className="surface border-line grid grid-cols-1 gap-5 rounded-md border p-4 md:grid-cols-2 lg:p-5">
            <div className="grid content-start gap-2">
              <h3 className="leading-tight font-medium">Hi, I'm Andy</h3>
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
        </section>

        <section className="grid gap-6">
          <h2 className="trail-line text-text-quiet font-mono text-xs tracking-wide uppercase">
            Writing
          </h2>

          <div className="grid grid-cols-[1fr_2fr] items-start gap-4">
            <div className="grid gap-5">
              <p className="text-text-muted">
                Notes on things I've learned and found interesting.
              </p>
              <Link
                to={"./"}
                className="bg-accent text-accent-ink hover:glow w-max rounded-md px-4 py-3 text-sm font-medium"
              >
                All Posts
              </Link>
            </div>

            <ul className="surface border-line-strong flex flex-col rounded-md border">
              {TEST_DATA.map(({ slug, date, title, duration, blurb }) => {
                return (
                  <li
                    key={slug}
                    className="not-last:border-line-strong flex gap-5 p-3 not-last:border-b"
                  >
                    <time
                      dateTime={date.toISOString().slice(0, 10)}
                      className="text-text-muted text-sm"
                    >
                      {dateFormatter.format(date)}
                    </time>
                    <div>
                      <h3 className="text-text-strong">{title}</h3>
                      <p className="text-text-muted text-sm">{blurb}</p>
                    </div>
                    <span className="text-text-muted grow text-end text-sm">
                      {duration}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

const TEST_DATA = [
  {
    slug: "test-post-1",
    date: new Date("2026-10-07"),
    title: "My first blog post",
    duration: "8 mins",
    blurb: "How I wrote my first blog post.",
  },
  {
    slug: "test-post-2",
    date: new Date("2026-10-07"),
    title: "My first blog post",
    duration: "8 mins",
    blurb: "How I wrote my first blog post.",
  },
  {
    slug: "test-post-3",
    date: new Date("2026-10-07"),
    title: "My first blog post",
    duration: "8 mins",
    blurb: "How I wrote my first blog post.",
  },
  {
    slug: "test-post-4",
    date: new Date("2026-10-07"),
    title: "My first blog post",
    duration: "8 mins",
    blurb: "How I wrote my first blog post.",
  },
];

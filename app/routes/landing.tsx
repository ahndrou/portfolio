import { Link } from "react-router";
import type { Route } from "./+types/landing";
import OrbDecoration from "~/components/orb-decoration";
import { BackgroundDecorations } from "~/components/background-decorations";

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
    <div className="justify-items-center self-center">
      <BackgroundDecorations />

      <main className="bg-bg-surface border-brdr-surface rounded-reg box-glow relative flex max-w-4xl items-center border">
        <DecorationSection />
        <MainSection />
      </main>
    </div>
  );
}

function DecorationSection() {
  return (
    <div aria-hidden className="hidden px-300 lg:block">
      <OrbDecoration diameter={"350px"} />
    </div>
  );
}

function MainSection() {
  return (
    <section className="border-brdr-surface col-divider">
      <div className="p-300">
        <h1 className="text-500 text-txt-heading-1 font-heading mb-200 font-medium [view-transition-name:name]">
          Andrew Smith
        </h1>

        <section className="grid gap-500">
          <BodyCopy />
          <Navigation />
        </section>
      </div>
    </section>
  );
}

function BodyCopy() {
  return (
    <section className="grid gap-200">
      <p>
        A self taught web developer with a Bsc. Computer Science (Ordinary
        Degree) from the University of Edinburgh.
      </p>
      <p>I’m currently based in Manchester, UK and seeking employment. </p>
      <p>
        You can learn more about me, or check out some of the projects I have
        been working on via the relevant pages below.
      </p>
    </section>
  );
}

function Navigation() {
  return (
    <nav>
      <ul className="text-100 md:text-100 grid grid-cols-2 justify-items-center gap-100 font-medium lg:grid-cols-4">
        <ListItem>
          <Link
            className="block w-full [view-transition-name:about-link]"
            to="about"
            viewTransition
          >
            About Me
          </Link>
        </ListItem>
        <ListItem>
          <Link
            className="block w-full [view-transition-name:projects-link]"
            to="projects"
            viewTransition
          >
            Projects
          </Link>
        </ListItem>
        <ListItem>
          <Link
            className="block w-full [view-transition-name:contact-link]"
            to="contact"
            viewTransition
          >
            Contact
          </Link>
        </ListItem>
        <ListItem>
          <a
            className="block w-full [view-transition-name:github-link]"
            href="https://github.com/ahndrou"
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
        </ListItem>
      </ul>
    </nav>
  );
}

function ListItem({ children }: { children: React.ReactElement }) {
  return (
    <li className="bg-bg-link border-brdr-link rounded-reg font-button box-glow w-full border py-0 text-center">
      {children}
    </li>
  );
}

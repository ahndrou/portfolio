import { Link } from "react-router";
import type { Route } from "./+types/landing";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Andrew Smith" },
    {
      name: "description",
      content: "The landing page for Andrew Smith's portfolio.",
    },
  ];
}

export default function Landing() {
  return (
    <main>
      <h1>Andrew Smith</h1>
      <p>
        A self taught web developer with a Bsc. Computer Science (Ordinary
        Degree) from the University of Edinburgh. Currently based in Manchester,
        UK.
      </p>
      <p>
        Having spent the last two years learning about the web platform and the
        technologies that have evolved to tackle the challenges inherent in
        developing for it, I’m now looking for a junior developer role where I
        can continue learning and contribute to real-world projects.
      </p>
      <p>
        This website showcases some of the projects I’m most proud of. Please
        take a look around!
      </p>
      <nav>
        <ul>
          <li>
            <Link to="projects">Projects</Link>
          </li>
          <li>
            <Link to="about">About Me</Link>
          </li>
          <li>
            <Link to="projects">Contact</Link>
          </li>
          <li>
            <Link to="projects">GitHub</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}

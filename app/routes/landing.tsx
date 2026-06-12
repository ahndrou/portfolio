import { Link } from "react-router";
import type { Route } from "./+types/landing";
import OrbDecoration from "~/components/orb-decoration";

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
    <>
      <main className="relative z-10 rounded-lg border border-neutral-50/45 bg-neutral-200/25">
        <div className="mb-500 p-200">
          <h1 className="text-600 mb-300">Andrew Smith</h1>
          <section className="grid gap-200">
            <p>
              A self taught web developer with a Bsc. Computer Science (Ordinary
              Degree) from the University of Edinburgh.
            </p>
            <p>
              I’m currently based in Manchester, UK and seeking employment.{" "}
            </p>
            <p>
              You can learn more about me, or check out some of the projects I
              have been working on via the relevant pages below.
            </p>
          </section>
        </div>

        <nav>
          <ul className="text-200 grid grid-cols-2 justify-items-center gap-[2px]">
            <li className="rounded-br-reg hover:bg-purple w-full border-2 border-neutral-100/20 bg-neutral-200/30 text-center">
              <Link className="block w-full" to="projects">
                Projects
              </Link>
            </li>
            <li className="rounded-bl-reg hover:bg-purple w-full border-2 border-neutral-100/20 bg-neutral-200/30 text-center">
              <Link className="block w-full" to="about">
                About Me
              </Link>
            </li>
            <li className="rounded-tr-reg hover:bg-purple w-full rounded-bl-lg border-2 border-neutral-100/20 bg-neutral-200/30 text-center">
              <Link className="block w-full" to="projects">
                Contact
              </Link>
            </li>
            <li className="rounded-tl-reg hover:bg-purple w-full rounded-br-lg border-2 border-neutral-100/20 bg-neutral-200/30 text-center">
              <Link className="block w-full" to="/">
                GitHub
              </Link>
            </li>
          </ul>
        </nav>
      </main>

      <div className="absolute top-[0] left-[0] h-full w-full overflow-clip">
        <OrbDecoration right={"-160"} top={"-330"} radius={"450"} />
        <OrbDecoration left={"-90"} top={"-80"} radius={"180"} />
        <OrbDecoration left={"-100"} bottom={"-390"} radius={"480"} />
      </div>
    </>
  );
}

function NavLink({ children, to }: { children: string; to: string }) {
  return (
    <li>
      <Link to={to}>{children}</Link>
    </li>
  );
}

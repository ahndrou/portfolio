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
      <main className="relative z-10 flex max-w-5xl items-center gap-400">
        <section className="rounded-lg border border-neutral-50/45 bg-neutral-200/25">
          <div className="mb-500 p-200">
            <h1 className="text-500 mb-200">Andrew Smith</h1>
            <section className="grid gap-200">
              <p>
                A self taught web developer with a Bsc. Computer Science
                (Ordinary Degree) from the University of Edinburgh.
              </p>
              <p>
                I’m currently based in Manchester, UK and seeking
                employment.{" "}
              </p>
              <p>
                You can learn more about me, or check out some of the projects I
                have been working on via the relevant pages below.
              </p>
            </section>
          </div>

          <nav>
            <ul className="text-100 md:text-100 grid grid-cols-2 justify-items-center gap-[2px] md:grid-cols-4">
              <li className="rounded-br-reg hover:bg-purple w-full border-2 border-neutral-100/20 bg-neutral-200/30 text-center md:rounded-br-none md:rounded-bl-lg">
                <Link className="block w-full py-100" to="projects">
                  Projects
                </Link>
              </li>
              <li className="rounded-bl-reg hover:bg-purple w-full border-2 border-neutral-100/20 bg-neutral-200/30 text-center md:rounded-bl-none">
                <Link className="block w-full py-100" to="about">
                  About Me
                </Link>
              </li>
              <li className="rounded-tr-reg hover:bg-purple w-full rounded-bl-lg border-2 border-neutral-100/20 bg-neutral-200/30 text-center md:rounded-tr-none md:rounded-bl-none">
                <Link className="block w-full py-100" to="projects">
                  Contact
                </Link>
              </li>
              <li className="rounded-tl-reg hover:bg-purple w-full rounded-br-lg border-2 border-neutral-100/20 bg-neutral-200/30 text-center md:rounded-tl-none">
                <Link className="block w-full py-100" to="/">
                  GitHub
                </Link>
              </li>
            </ul>
          </nav>
        </section>

        <div
          aria-hidden
          className="top-[-330px] right-[-160px] hidden md:block"
        >
          <OrbDecoration diameter={"350px"} />
        </div>
      </main>

      <div
        aria-hidden
        className="absolute top-[0] left-[0] h-full w-full overflow-clip md:hidden"
      >
        <div className="absolute top-[-330px] right-[-160px]">
          <OrbDecoration diameter={"450"} />
        </div>
        <div className="absolute top-[-80px] left-[-90px]">
          <OrbDecoration diameter={"180"} />
        </div>
        <div className="absolute bottom-[-390px] left-[-100px]">
          <OrbDecoration diameter={"480"} />
        </div>
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

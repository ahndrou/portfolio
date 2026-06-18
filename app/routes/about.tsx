import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Andrew Smith - About" },
    {
      name: "description",
      content:
        "Some information about Andrew Smith; his skills relating to Software Development, as well as a brief history of his journey.",
    },
  ];
}

export default function About() {
  return (
    <div className="grid gap-300">
      <h1 className="text-500 rounded-lg bg-neutral-200/25 p-300 leading-none font-bold shadow-lg">
        About Me
      </h1>

      <section className="gap-400 rounded-lg bg-neutral-200/25 p-300 shadow-lg *:mb-400 md:columns-2">
        <article className="grid gap-100">
          <h2 className="text-500 font-semibold">Hi! I'm Andrew</h2>
          <section className="*:mb-200">
            <p className="font-light">
              I’m a <span className="font-semibold">frontend-focused</span> web
              developer with strong technical fundamentals backed by a{" "}
              <span className="font-semibold">bachelor's degree</span> in
              computer science, as well as practical skills developed over the
              past{" "}
              <span className="font-semibold">two years of self-study</span>.
            </p>
          </section>
        </article>

        <article className="grid gap-100">
          <h2 className="text-500 font-semibold">Recent Interests</h2>
          <section className="*:mb-200">
            <p className="font-light">
              I am{" "}
              <span className="font-semibold">always trying to improve</span> my
              understanding of the web platform and its complexities, as well as
              the technologies which have developed to help solve them.
            </p>
            <p className="font-light">
              I have recently been exploring what is possible with interactive
              experiences in the browser; I recently{" "}
              <span className="font-semibold">created a 3D browser game</span>{" "}
              complete with custom shaders and physics using the JavaScript
              library <span className="font-semibold">ThreeJS</span>. I have
              also been exploring transitions and animation, along with emerging
              emerging techniques such as{" "}
              <span className="font-semibold">view transitions</span>.
            </p>
            <p className="font-light">
              In terms of more ‘core’ technologies, I have started integrating{" "}
              <span className="font-semibold">TypeScript</span> into my
              projects, as well as reading about performance optimisations such
              as <span className="font-semibold">server-side rendering</span>.
            </p>
            <p className="font-light">
              Take a look at my <span>projects page</span> for more insights on
              how I have been using these technologies.
            </p>
          </section>
        </article>

        <article className="grid gap-100">
          <h2 className="text-500 font-semibold">Other Interests</h2>
          <section className="*:mb-200">
            <p className="font-light">
              Outside of web development, I enjoy tinkering with{" "}
              <span className="font-semibold">3D modelling</span> in Blender, as
              well as trying to{" "}
              <span className="font-semibold">improve my design skills</span>.
            </p>
          </section>
        </article>
      </section>
    </div>
  );
}

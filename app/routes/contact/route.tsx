import type { Route } from "./+types/route";
import { EmailForm } from "./email-form";
import { LinkedInSVG } from "./linked-in-svg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Andrew Smith" },
    {
      name: "description",
      content: `Andrew Smith's web development portfolio. A collection of his projects, a description about him, as well as means to contact him can be found here.`,
    },
  ];
}

export default function Contact() {
  return (
    <>
      <header>
        <h1 className="surface text-text-strong font-display border-line rounded-lg border px-4 py-3 text-xl font-medium lg:px-5">
          Get in Touch
        </h1>
      </header>

      <main className="surface border-line grid rounded-lg border lg:grid-cols-2">
        <div className="grid grid-rows-[auto_1fr]">
          <section className="row-divider grid content-start gap-3 p-5 text-sm">
            <p>
              I’m currently seeking employment and would love to hear about any
              opportunities!
            </p>

            <p>
              You can contact me by email using the form provided, or
              alternatively by sending me a message on LinkedIn.
            </p>
          </section>

          <section className="max-lg:row-divider grid gap-4 self-start p-5">
            <h2 className="text-accent font-display text-lg leading-none">
              LinkedIn
            </h2>

            <a className="bg-fill-strong border-line-strong flex cursor-pointer items-center gap-2 justify-self-start rounded-md border px-3 py-2">
              <LinkedInSVG />
              Visit my LinkedIn profile
            </a>
          </section>
        </div>

        <section className="lg:col-divider grid gap-4 p-5">
          <h2 className="font-display text-accent text-lg leading-none">
            Email
          </h2>

          <EmailForm />
        </section>
      </main>
    </>
  );
}

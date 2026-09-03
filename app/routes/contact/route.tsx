import type { Route } from "./+types/route";
import { EmailForm } from "./email-form";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Andrew Smith - Contact" },
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
        <span className="trail-line text-accent font-mono text-xs tracking-wide uppercase">
          Contact - Open to work
        </span>
        <h1 className="text-text-strong font-display text-xl font-semibold">
          Get in Touch
        </h1>
        <p className="text-text-muted max-w-2xl">
          I’m currently seeking employment and would love to hear about any
          opportunities. Send me a message below, or reach me on LinkedIn.
        </p>
      </header>

      <main className="grid gap-5">
        <h2 className="trail-line text-text-quiet font-mono text-xs tracking-wide uppercase">
          Send a message
        </h2>

        <section className="surface border-line flex flex-col gap-6 rounded-md border p-6 md:flex-row">
          <div className="grow">
            <EmailForm />
          </div>

          <div className="grid content-start gap-6 md:basis-xs">
            <section className="grid gap-1">
              <h3 className="text-text-quiet mb-1 font-mono text-xs tracking-wide uppercase">
                Direct
              </h3>
              <a
                href="https://www.linkedin.com/in/andrew-smith-5a1b2132b/"
                className="hover:text-accent after:ml-1 after:inline-block after:content-['↗']"
              >
                LinkedIn
              </a>
            </section>

            <section className="grid gap-1">
              <h3 className="text-text-quiet mb-1 font-mono text-xs tracking-wide uppercase">
                Based In
              </h3>
              <span>Manchester, UK</span>
              <span className="text-text-muted">Remote or Hybrid</span>
            </section>

            <section className="grid gap-1">
              <h3 className="text-text-quiet mb-1 font-mono text-xs tracking-wide uppercase">
                Status
              </h3>
              <span>Available for work</span>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}

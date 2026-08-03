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
    <div className="grid gap-300">
      <PageTitle />
      <PageContent />
    </div>
  );
}

function PageTitle() {
  return (
    <h1 className="bg-bg-surface text-500 text-txt-heading-1 font-heading border-brdr-surface rounded-reg box-glow border px-300 py-200 font-medium lg:px-400">
      Get in Touch
    </h1>
  );
}

function PageContent() {
  return (
    <div className="bg-bg-surface border-brdr-surface rounded-reg box-glow grid border lg:grid-cols-2">
      <div className="grid grid-rows-[auto_auto]">
        <TextSection />
        <LinkedInSection />
      </div>

      <EmailSection />
    </div>
  );
}

function TextSection() {
  return (
    <section className="text-100 row-divider grid content-start gap-200 p-400">
      <p>
        I’m currently seeking employment and would love to hear about any
        opportunities!
      </p>

      <p>
        You can contact me by email using the form provided, or alternatively by
        sending me a message on LinkedIn.
      </p>
    </section>
  );
}

function LinkedInSection() {
  return (
    <section className="max-lg:row-divider grid gap-300 self-start p-400">
      <h2 className="text-txt-heading-2 text-400 font-heading leading-none">
        LinkedIn
      </h2>

      <a className="bg-bg-link border-brdr-link rounded-reg box-glow flex cursor-pointer items-center gap-100 justify-self-start border px-200 py-100">
        <LinkedInSVG />
        Visit my LinkedIn profile
      </a>
    </section>
  );
}

function EmailSection() {
  return (
    <section className="lg:col-divider grid gap-300 p-400">
      <h2 className="font-heading text-400 text-txt-heading-2 leading-none">
        Email
      </h2>

      <EmailForm />
    </section>
  );
}

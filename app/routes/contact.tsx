import DividerLine from "~/components/divider-line";
import type { Route } from "./+types/contact";

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
      <h1 className="bg-bg-surface text-500 text-txt-heading-1 font-heading border-brdr-surface rounded-reg box-glow border p-300 leading-none font-bold">
        Get in Touch
      </h1>

      <div className="bg-bg-surface border-brdr-surface rounded-reg box-glow grid border lg:grid-cols-2">
        <div className="grid grid-rows-2">
          <section className="text-100 row-divider grid content-start gap-200 p-300">
            <p>
              I’m currently seeking employment and would love to hear about any
              opportunities!
            </p>

            <p>
              You can contact me by email using the form provided, or
              alternatively by sending me a message on LinkedIn.
            </p>
          </section>

          <section className="max-lg:row-divider grid content-start gap-300 p-300">
            <h2 className="text-txt-heading-2 text-400 font-heading leading-none">
              LinkedIn
            </h2>

            <a className="bg-bg-link border-brdr-link rounded-reg flex cursor-pointer items-center gap-100 justify-self-start border px-200 py-100">
              <LinkedInSVG />
              Visit my LinkedIn profile
            </a>
          </section>
        </div>

        <section className="lg:col-divider grid gap-300 p-300 lg:col-start-2 lg:row-start-1">
          <h2 className="font-heading text-400 text-txt-heading-2 leading-none">
            Email
          </h2>

          <form className="grid gap-200">
            <label>
              <span className="hidden">Name</span>
              <input
                placeholder="Name:"
                className="bg-bg-link border-brdr-surface box-glow text-100 rounded-reg w-full justify-center border px-200 py-100"
              />
            </label>

            <label>
              <span className="hidden">Email</span>
              <input
                placeholder="Email:"
                className="bg-bg-link border-brdr-surface box-glow text-100 rounded-reg w-full justify-center border px-200 py-100"
              />
            </label>

            <label>
              <span className="hidden">Subject</span>
              <input
                placeholder="Subject:"
                className="bg-bg-link border-brdr-surface box-glow text-100 rounded-reg w-full justify-center border px-200 py-100"
              />
            </label>

            <label>
              <span className="hidden">Message</span>
              <textarea
                placeholder="Message:"
                className="bg-bg-link border-brdr-surface box-glow text-100 rounded-reg h-[10rem] w-full justify-center border px-200 py-100"
              />
            </label>

            <label>
              <span className="hidden">Submit</span>
              <button className="text-100 rounded-reg bg-bg-button font-button flex w-full cursor-pointer items-center justify-center py-100 text-center font-medium">
                Submit
              </button>
            </label>
          </form>
        </section>
      </div>
    </div>
  );
}

function LinkedInSVG() {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 382 382"
      className="h-300"
    >
      <path
        className="fill-brdr-link"
        d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
	C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
	H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
	c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
	s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
	c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
	c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
	c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
	L341.91,330.654L341.91,330.654z"
      />
    </svg>
  );
}

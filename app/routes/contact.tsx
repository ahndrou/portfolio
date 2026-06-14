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
      <h1 className="text-500 rounded-lg bg-neutral-200/25 p-300 leading-none font-bold">
        Get in Touch
      </h1>

      <div className="grid gap-200 lg:grid-cols-2">
        <section className="text-100 grid gap-500 rounded-lg bg-neutral-200/25 p-300">
          <p>
            I’m currently seeking employment and would love to hear about any
            opportunities! You can contact me by email using the form provided,
            or alternatively by sending me a message on LinkedIn.
          </p>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener"
            className="bg-purple text-100 flex items-center justify-center self-end rounded-lg py-100 text-center"
          >
            LinkedIn
          </a>
        </section>

        <form className="grid gap-200 rounded-lg bg-neutral-200/25 p-300">
          <label>
            <span className="hidden">Name</span>
            <input
              placeholder="Name:"
              className="bg-purple-desaturated text-100 w-full justify-center rounded-lg px-200 py-100"
            />
          </label>

          <label>
            <span className="hidden">Email</span>
            <input
              placeholder="Email:"
              className="bg-purple-desaturated text-100 w-full justify-center rounded-lg px-200 py-100"
            />
          </label>

          <label>
            <span className="hidden">Subject</span>
            <input
              placeholder="Subject:"
              className="bg-purple-desaturated text-100 w-full justify-center rounded-lg px-200 py-100"
            />
          </label>

          <label>
            <span className="hidden">Message</span>
            <textarea
              placeholder="Message:"
              className="bg-purple-desaturated text-100 h-[10rem] w-full justify-center rounded-lg px-200 py-100"
            />
          </label>

          <label>
            <span className="hidden">Submit</span>
            <button className="bg-purple text-100 flex w-full cursor-pointer items-center justify-center rounded-lg py-100 text-center">
              Submit
            </button>
          </label>
        </form>
      </div>
    </div>
  );
}

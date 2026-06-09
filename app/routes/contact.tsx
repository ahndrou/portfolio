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
  return <h1>Contact Page</h1>;
}

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
  return <h1>About Page</h1>;
}

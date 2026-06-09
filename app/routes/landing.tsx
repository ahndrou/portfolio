import type { Route } from "./+types/landing";

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
  return <h1>Landing</h1>;
}

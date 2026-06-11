import type { Route } from "./+types/projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Andrew Smith - Projecta" },
    {
      name: "description",
      content: "A collection of Andrew Smith's web projects.",
    },
  ];
}

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
    </>
  );
}

import type { Route } from "./+types/route";
import { Card } from "./card";

import { projects } from "./project-data";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Andrew Smith - Projects" },
    {
      name: "description",
      content: "A collection of Andrew Smith's web projects.",
    },
  ];
}

export default function Projects() {
  return (
    <div className="grid gap-300">
      <Heading />
      <CardList />
    </div>
  );
}

function Heading() {
  return (
    <h1 className="text-500 rounded-reg bg-bg-surface border-brdr-surface box-glow font-heading text-txt-heading-1 border px-300 py-200 font-medium lg:px-400">
      Projects
    </h1>
  );
}

function CardList() {
  return (
    <ol className="text-100 rounded-reg bg-bg-surface border-brdr-surface box-glow grid list-none content-center border">
      {projects.map((project) => (
        <li key={project.slug} className="row-divider">
          <div className="p-300 lg:p-400">
            <Card
              title={project.title}
              imgSrc={project.imgSrc}
              paragraphs={project.paragraphs}
              githubUrl={project.githubUrl}
              websiteUrl={project.websiteUrl}
            />
          </div>
        </li>
      ))}
    </ol>
  );
}

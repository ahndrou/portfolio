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
    <h1 className="text-500 font-heading text-txt-heading-1 font-medium">
      Projects
    </h1>
  );
}

function CardList() {
  return (
    <ol className="text-100 grid list-none content-center">
      {projects.map((project) => (
        <li key={project.slug} className="row-divider py-300">
          <div>
            <Card
              title={project.title}
              imgSrc={project.imgSrc}
              paragraphs={project.paragraphs}
              githubUrl={project.githubUrl}
              websiteUrl={project.websiteUrl}
              techList={project.techList}
            />
          </div>
        </li>
      ))}
    </ol>
  );
}

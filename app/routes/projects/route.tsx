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
    <div className="grid gap-4">
      <Heading />
      <CardList />
    </div>
  );
}

function Heading() {
  return (
    <div>
      <span className="text-xs">Portfolio - 2026</span>
      <h1 className="text-xl font-display text-text-strong font-semibold">
        Projects
      </h1>
      <p className="text-base">
        A collection of projects I have worked on to further my skills. Each one
        is deployed with a well documented public repository.
      </p>
    </div>
  );
}

function CardList() {
  return (
    <ol className="text-sm grid list-none content-center">
      {projects.map((project) => (
        <li key={project.slug} className="row-divider py-4">
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

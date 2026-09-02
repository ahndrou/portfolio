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
    <div className="grid gap-7">
      <div>
        <span className="text-accent trail-line font-mono text-xs tracking-wide uppercase">
          Portfolio - 2026
        </span>
        <h1 className="font-display text-text-strong text-xl font-semibold">
          Projects
        </h1>
        <p className="text-text-muted max-w-4xl text-base">
          A collection of projects I have worked on to further my skills. Each
          one is deployed with a well documented public repository.
        </p>
      </div>

      <div>
        <h2 className="text-text-quiet trail-line font-mono text-xs tracking-wide uppercase">
          Selected Works
        </h2>

        <ol className="grid list-none content-center text-sm">
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
      </div>
    </div>
  );
}

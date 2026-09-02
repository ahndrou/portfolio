import { Links } from "./links";
import TechList from "./tech-list";

export function Card({
  imgSrc,
  title,
  paragraphs,
  websiteUrl,
  githubUrl,
  techList,
}: {
  imgSrc: string;
  title: string;
  paragraphs: string[];
  websiteUrl: string;
  githubUrl: string;
  techList: string[];
}) {
  return (
    <article className="surface border-line grid grid-rows-[auto_1fr] gap-4 overflow-clip rounded-lg border">
      <ProjectImage src={imgSrc} />
      <div className="grid grid-cols-[2fr_1fr] items-start gap-4 rounded-md p-6">
        <div className="grid gap-4">
          <Heading heading={title} />
          <ProjectBlurb paragraphs={paragraphs} />
          <Links githubUrl={githubUrl} websiteUrl={websiteUrl} />
        </div>
        <TechList technologies={techList} />
      </div>
    </article>
  );
}

function Heading({ heading }: { heading: string }) {
  return (
    <h2 className="font-display text-lg leading-none font-bold">{heading}</h2>
  );
}

function ProjectImage({ src }: { src: string }) {
  return (
    <div className="max-h-[600px] min-h-[350px]">
      <img
        className="block h-full w-full object-cover lg:object-top"
        src={src}
      />
    </div>
  );
}

function ProjectBlurb({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="text-text-muted grid gap-3">
      {paragraphs.map((content) => (
        <p>{content}</p>
      ))}
    </div>
  );
}

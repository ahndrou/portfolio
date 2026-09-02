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
    <article className="grid grid-rows-[auto_1fr] gap-4">
      <ProjectImage src={imgSrc} />
      <div className="bg-bg border-line rounded-md glow grid gap-4 border p-3">
        <Heading heading={title} />
        <ProjectBlurb paragraphs={paragraphs} />
      </div>
      <TechList technologies={techList} />
      <Links githubUrl={githubUrl} websiteUrl={websiteUrl} />
    </article>
  );
}

function Heading({ heading }: { heading: string }) {
  return (
    <h2 className="text-lg text-accent font-display leading-none font-medium">
      {heading}
    </h2>
  );
}

function ProjectImage({ src }: { src: string }) {
  return (
    <div className="drop-glow rounded-lg border-line max-h-[600px] min-h-[350px] overflow-clip border">
      <img
        className="block h-full w-full object-cover lg:object-top"
        src={src}
      />
    </div>
  );
}

function ProjectBlurb({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="grid w-[80ch] gap-3">
      {paragraphs.map((content) => (
        <p>{content}</p>
      ))}
    </div>
  );
}

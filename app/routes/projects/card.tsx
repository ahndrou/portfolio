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
    <article className="grid grid-rows-[auto_1fr] gap-300">
      <ProjectImage src={imgSrc} />
      <div className="bg-bg-surface-2 border-outline-2 rounded-reg box-glow grid gap-300 border p-200">
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
    <h2 className="text-400 text-txt-heading-2 font-heading leading-none font-medium">
      {heading}
    </h2>
  );
}

function ProjectImage({ src }: { src: string }) {
  return (
    <div className="drop-glow rounded-reg border-brdr-surface max-h-[600px] min-h-[350px] overflow-clip border">
      <img
        className="block h-full w-full object-cover lg:object-top"
        src={src}
      />
    </div>
  );
}

function ProjectBlurb({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="grid w-[80ch] gap-200">
      {paragraphs.map((content) => (
        <p>{content}</p>
      ))}
    </div>
  );
}

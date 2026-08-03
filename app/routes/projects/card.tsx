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
    <article className="grid grid-rows-[auto_1fr] gap-x-400 gap-y-300 lg:gap-y-200">
      <ProjectImage src={imgSrc} />

      <Heading heading={title} />

      <div className="grid gap-100">
        <div className="grid gap-100">
          {paragraphs.map((content) => (
            <p>{content}</p>
          ))}
        </div>

        <div className="mbs-300 grid gap-300 lg:mbs-auto">
          <TechList technologies={techList} />

          <Links githubUrl={githubUrl} websiteUrl={websiteUrl} />
        </div>
      </div>
    </article>
  );
}

function Heading({ heading }: { heading: string }) {
  return (
    <h2 className="text-400 text-txt-heading-2 font-heading leading-none">
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

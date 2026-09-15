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
      <div className="max-h-[600px]">
        <img
          className="block h-full w-full object-cover lg:object-top"
          src={imgSrc}
        />
      </div>

      <div className="grid grid-cols-[2fr_1fr] items-start gap-4 rounded-md p-6">
        <div className="grid gap-4">
          <h2 className="font-display text-lg leading-none font-bold">
            {title}
          </h2>

          <div className="text-text-muted grid gap-3">
            {paragraphs.map((content) => (
              <p>{content}</p>
            ))}
          </div>

          <Links githubUrl={githubUrl} websiteUrl={websiteUrl} />
        </div>
        <TechList technologies={techList} />
      </div>
    </article>
  );
}

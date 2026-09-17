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
    <article className="surface border-line grid grid-cols-[1fr_1fr_1fr] gap-5 overflow-clip rounded-lg border p-5">
      <div className="reveal border-line col-span-3 overflow-clip rounded-md border md:col-span-2">
        <img className="block h-full object-cover" src={imgSrc} />
      </div>

      <div className="border-line col-span-3 flex flex-col gap-4 rounded-md pt-1 md:col-span-1">
        <h2 className="font-display text-lg leading-none font-medium">
          {title}
        </h2>

        <div className="text-text-muted grid gap-3">
          {paragraphs.map((content) => (
            <p>{content}</p>
          ))}
        </div>

        <TechList technologies={techList} className="grow content-end" />
      </div>

      <Links
        githubUrl={githubUrl}
        websiteUrl={websiteUrl}
        className="col-span-3"
      />
    </article>
  );
}

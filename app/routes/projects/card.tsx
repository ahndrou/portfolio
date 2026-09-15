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
    <article className="surface border-line grid grid-rows-[auto_1fr] overflow-clip rounded-lg border">
      <div className="max-h-[450px]">
        <img className="block h-full w-full object-cover" src={imgSrc} />
      </div>

      <div className="grid grid-cols-[2fr_1fr] items-start gap-5 rounded-md p-4 pt-6 *:col-span-2 md:p-6 md:*:col-span-1">
        <div className="grid gap-5">
          <h2 className="font-display text-lg leading-none font-bold">
            {title}
          </h2>

          <div className="text-text-muted grid gap-3">
            {paragraphs.map((content) => (
              <p>{content}</p>
            ))}
          </div>
        </div>

        <TechList technologies={techList} className="md:col-start-2" />

        <Links
          githubUrl={githubUrl}
          websiteUrl={websiteUrl}
          className="mt-5 lg:mt-0"
        />
      </div>
    </article>
  );
}

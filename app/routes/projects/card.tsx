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
    <article className="grid grid-rows-[auto_1fr] gap-x-400 gap-y-300 [grid-template-areas:'heading'_'img'_'details'] lg:gap-y-200 lg:[grid-template-areas:'img_heading'_'img_details']">
      <h2 className="text-400 text-txt-heading-2 font-heading leading-none [grid-area:heading]">
        {title}
      </h2>

      <div className="[grid-area:img] lg:w-[600px]">
        <img
          className="border-brdr-surface rounded-reg drop-glow block h-full w-full border object-cover"
          src={imgSrc}
        />
      </div>

      <div className="grid gap-100 [grid-area:details]">
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

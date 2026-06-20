import type React from "react";
import { Links } from "./links";
import DividerLine from "~/components/divider-line";

export function Card({
  imgSrc,
  title,
  paragraphs,
}: {
  imgSrc: string;
  title: string;
  paragraphs: string[];
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

      <div className="flex flex-col [grid-area:details]">
        {paragraphs.map((content) => (
          <p>{content}</p>
        ))}

        <Links className="mbs-300 lg:mbs-auto" />
      </div>
    </article>
  );
}

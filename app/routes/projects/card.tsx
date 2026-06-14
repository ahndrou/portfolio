import type React from "react";
import { Links } from "./links";

export function Card({
  children,
  imgSrc,
  title,
}: {
  children: React.ReactNode;
  imgSrc: string;
  title: string;
}) {
  return (
    <article className="grid grid-rows-[auto_1fr] gap-x-300 gap-y-300 [grid-template-areas:'heading'_'img'_'details'] lg:[grid-template-areas:'img_heading'_'img_details']">
      <h2 className="text-500 leading-none font-semibold [grid-area:heading]">
        {title}
      </h2>
      <img
        className="rounded-lg object-cover [grid-area:img] md:min-w-md"
        src={imgSrc}
      />
      <div className="flex flex-col [grid-area:details]">
        {children}
        <Links className="mbs-300 lg:mbs-auto" />
      </div>
    </article>
  );
}

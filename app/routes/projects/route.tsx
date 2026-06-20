import DividerLine from "~/components/divider-line";
import type { Route } from "./+types/route";
import { Card } from "./card";

import cards from "./card-data.json";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Andrew Smith - Projects" },
    {
      name: "description",
      content: "A collection of Andrew Smith's web projects.",
    },
  ];
}

export default function Projects() {
  return (
    <div className="grid gap-300">
      <Heading />
      <CardList />
    </div>
  );
}

function Heading() {
  return (
    <h1 className="text-500 rounded-reg bg-bg-surface border-brdr-surface box-glow font-heading text-txt-heading-1 border px-300 py-200 font-medium">
      Projects
    </h1>
  );
}

function CardList() {
  return (
    <ol className="text-100 rounded-reg bg-bg-surface border-brdr-surface box-glow grid list-none content-center gap-300 border">
      {cards.map((card, i) => (
        <li>
          <Card
            title={card.title}
            imgSrc={card.imgSrc}
            paragraphs={card.paragraphs}
          />

          {i !== cards.length - 1 && <DividerLine height="1px" />}
        </li>
      ))}
    </ol>
  );
}

import type { Route } from "./+types/route";
import { Card } from "./card";
import { Links } from "./links";

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
      <h1 className="text-500 rounded-lg bg-neutral-200/25 px-300 py-200 font-bold shadow-lg">
        Projects
      </h1>

      <section className="text-100 grid gap-500 rounded-lg bg-neutral-200/25 p-300 shadow-lg">
        <Card imgSrc="/weather-app.png" title="Weather App">
          <p>
            Lorem ipsum laoreet congue aliquet senectus netus non mollis vel
            venenatis enim velit rutrum nunc nisi viverra condimentum vel ipsum.
            Lorem ipsum laoreet congue aliquet senectus netus non mollis vel
            venenatis enim velit rutrum nunc nisi viverra condimentum vel ipsum.
          </p>
        </Card>

        <Card imgSrc="/weather-app.png" title="Weather App">
          <p>
            Lorem ipsum laoreet congue aliquet senectus netus non mollis vel
            venenatis enim velit rutrum nunc nisi viverra condimentum vel ipsum.
            Lorem ipsum laoreet congue aliquet senectus netus non mollis vel
            venenatis enim velit rutrum nunc nisi viverra condimentum vel ipsum.
          </p>
        </Card>
      </section>
    </div>
  );
}

import { Links } from "./links";
import TechList from "./tech-list";
import testVideo from "./assets/asteroid_field_demo.mp4";
import { useEffect, useRef, useState } from "react";

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
      <div className="reveal border-line-strong col-span-3 overflow-clip rounded-md border lg:col-span-2">
        <Video src={""} />
      </div>

      <div className="border-line col-span-3 flex flex-col gap-4 rounded-md pt-1 lg:col-span-1">
        <h2 className="font-display text-lg leading-none font-medium">
          {title}
        </h2>

        <div className="text-text-muted grid gap-2">
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

function Video({ src }: { src: string }) {
  const video = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (video.current === null) return;

    if (isPlaying) {
      video.current.pause();
    } else {
      video.current.play();
    }
  }, [isPlaying]);

  return (
    <video
      ref={video}
      muted
      playsInline
      src={testVideo}
      onClick={() => setIsPlaying(!isPlaying)}
      className="cursor-pointer"
    />
  );
}

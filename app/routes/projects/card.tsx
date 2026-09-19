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

  const [isPlaying, setIsPlaying] = useState(false);

  function togglePlaying() {
    const videoElement = video.current;

    if (videoElement === null) return;

    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  }

  const overlayCn =
    "after:bg-dark-tint/75 after:absolute after:inset-[0] after:content-[''] after:z-20";
  const className =
    "cursor-pointer relative isolate" + " " + (!isPlaying ? overlayCn : null);

  return (
    <div className={className}>
      <video
        ref={video}
        autoPlay={false}
        src={testVideo}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        className="z-10"
      />

      <button
        onClick={togglePlaying}
        className="absolute inset-[0] z-30 h-full w-full cursor-pointer"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
}

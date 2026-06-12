import { type CSSProperties, useId } from "react";

interface OrbDecorationProps {
  diameter: CSSProperties["width"];
}

export default function OrbDecoration({ diameter }: OrbDecorationProps) {
  let id = useId();
  id = `${id}-orb-decoration`;

  return (
    <svg
      className="overflow-visible"
      style={{
        height: diameter,
        width: diameter,
      }}
      viewBox="0 0 100 100"
    >
      <defs>
        <radialGradient id={id}>
          <stop offset="0%" stopColor="#3B38D4" />
          <stop offset="75%" stopColor="#4E4DC2" />
          <stop offset="100%" stopColor="#6363C2" />
        </radialGradient>
      </defs>

      <circle r="50" cy="50" cx="50" fill={`url(#${id})`} />
    </svg>
  );
}

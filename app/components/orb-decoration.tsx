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
          <stop offset="0%" stopColor="hsl(241, 60%, 47%)" />
          <stop offset="75%" stopColor="hsl(240, 44%, 48%)" />
          <stop offset="100%" stopColor="hsl(240, 39%, 52%)" />
        </radialGradient>
      </defs>

      <circle
        r="50"
        cy="50"
        cx="50"
        fill={`url(#${id})`}
        stroke={"var(--clr-green-400)"}
        strokeWidth={"2"}
        vector-effect="non-scaling-stroke"
        className="drop-glow"
      />
    </svg>
  );
}

import { type CSSProperties, useId } from "react";

interface OrbDecorationProps {
  top?: CSSProperties["top"];
  left?: CSSProperties["left"];
  right?: CSSProperties["right"];
  bottom?: CSSProperties["bottom"];
  radius: CSSProperties["width"];
}

export default function OrbDecoration({
  top,
  left,
  right,
  bottom,
  radius,
}: OrbDecorationProps) {
  let id = useId();
  id = `${id}-orb-decoration`;

  return (
    <svg
      className="absolute overflow-visible"
      style={{
        top: top,
        left: left,
        right: right,
        bottom: bottom,
        height: radius,
        width: radius,
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

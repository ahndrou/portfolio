import type { CSSProperties } from "react";

interface HorizontalDivider {
  height: NonNullable<CSSProperties["height"]>;
  width?: never;
}

interface VerticalDivider {
  height?: never;
  width: NonNullable<CSSProperties["width"]>;
}

type DividerLineProps = HorizontalDivider | VerticalDivider;

/**
 * Used instead of a border to create divisions. Primarily because I am using
 * a box shadow to create a glow effect.
 */
export default function DividerLine(props: DividerLineProps) {
  const style =
    props.height !== undefined
      ? { height: props.height }
      : { width: props.width, height: "100%" };

  return (
    <div
      className="bg-brdr-surface box-glow-divider self-stretch"
      style={style}
      aria-hidden
    />
  );
}

export function BackgroundDecorations() {
  return (
    <div
      aria-hidden
      className="absolute top-[0] bottom-[0] left-[0] -z-20 w-full overflow-clip"
    >
      <canvas id="canvas" style={{ width: "100%", height: "100%" }}></canvas>
    </div>
  );
}

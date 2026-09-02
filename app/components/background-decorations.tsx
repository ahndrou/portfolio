import OrbDecoration from "./orb-decoration";

export function BackgroundDecorations() {
  return (
    <div
      aria-hidden
      className="absolute top-[0] bottom-[0] left-[0] -z-20 w-full overflow-clip blur-lg brightness-30"
    >
      <div className="absolute top-[-330px] right-[-160px]">
        <OrbDecoration diameter={"450"} />
      </div>
      <div className="absolute top-[-80px] left-[-90px]">
        <OrbDecoration diameter={"180"} />
      </div>
      <div className="absolute bottom-[-390px] left-[-100px]">
        <OrbDecoration diameter={"480"} />
      </div>
    </div>
  );
}

import type React from "react";
import { Links } from "./links";

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <article className="grid gap-y-300">
      {children}
      <Links />
    </article>
  );
}

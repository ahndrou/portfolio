import type React from "react";
import { Link } from "react-router";

export function LinkButton({
  children,
  to,
}: {
  children: React.ReactNode;
  to: string;
}) {
  return (
    <Link
      to={to}
      className="text-sm rounded-md bg-fill-strong border-line-strong glow font-mono flex items-center justify-center border py-1 text-center"
    >
      {children}
    </Link>
  );
}

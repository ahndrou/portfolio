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
      className="bg-fill-strong border-line-strong flex items-center justify-center rounded-md border py-1 text-center font-mono text-sm"
    >
      {children}
    </Link>
  );
}

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
      className="text-100 rounded-reg bg-bg-link border-brdr-link box-glow font-button flex items-center justify-center border py-0 text-center"
    >
      {children}
    </Link>
  );
}

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
    <Link to={to} className="bg-purple text-200 rounded-reg py-100 text-center">
      {children}
    </Link>
  );
}

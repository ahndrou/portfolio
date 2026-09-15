import { Link as RouterLink } from "react-router";

export function Links({
  websiteUrl,
  githubUrl,
  className = "",
}: {
  websiteUrl: string;
  githubUrl: string;
  className?: string;
}) {
  return (
    <nav
      className={`grid w-full grid-flow-col grid-cols-3 gap-2 font-medium ${className}`}
    >
      <Link to="/" accent>
        Case Study
      </Link>
      <Link to={websiteUrl} offSite>
        Live Website
      </Link>
      <Link to={githubUrl} offSite>
        GitHub
      </Link>
    </nav>
  );
}

interface LinkProps {
  children: React.ReactNode;
  accent?: boolean;
  offSite?: boolean;
  to: string;
}

function Link({ to, accent = false, offSite = false, children }: LinkProps) {
  let className =
    "border border-line-strong flex justify-center p-3 rounded-md items-center";

  if (accent) {
    className += " bg-accent text-accent-ink hover:glow";
  } else {
    className += " hover:bg-fill";
  }

  if (offSite) {
    className += " after:content-['↗'] after:inline-block after:ml-1";
  }

  return (
    <RouterLink to={to} className={className}>
      {children}
    </RouterLink>
  );
}

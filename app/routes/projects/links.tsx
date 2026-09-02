import { Link as RouterLink } from "react-router";

export function Links({
  websiteUrl,
  githubUrl,
}: {
  websiteUrl: string;
  githubUrl: string;
}) {
  return (
    <nav className="flex w-full gap-2 font-medium *:grow">
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
    "border border-line-strong flex justify-center p-3 rounded-md";

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

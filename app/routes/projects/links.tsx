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
      className={`flex w-full flex-wrap gap-2 font-medium *:grow *:basis-1 ${className}`}
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
    "border border-line-strong flex justify-center p-2 rounded-md items-center";

  if (accent) {
    className += " bg-accent text-accent-ink hover:glow";
  } else {
    className += " hover:bg-fill";
  }

  if (offSite) {
    className += " after:content-['↗'] after:inline-block after:ml-1";
  }

  return (
    <div className={className}>
      <RouterLink to={to} className="w-max">
        {children}
      </RouterLink>
    </div>
  );
}

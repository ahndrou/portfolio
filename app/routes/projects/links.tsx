import { LinkButton } from "~/components/link-button";

export function Links({
  className,
  websiteUrl,
  githubUrl,
}: {
  className: string;
  websiteUrl: string;
  githubUrl: string;
}) {
  const cn = `flex w-full gap-100 font-medium *:grow ${className}`;

  return (
    <nav className={cn}>
      <LinkButton to="/">Case Study</LinkButton>
      <LinkButton to={websiteUrl}>Live Website</LinkButton>
      <LinkButton to={githubUrl}>GitHub</LinkButton>
    </nav>
  );
}

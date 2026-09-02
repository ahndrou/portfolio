import { LinkButton } from "~/components/link-button";

export function Links({
  websiteUrl,
  githubUrl,
}: {
  websiteUrl: string;
  githubUrl: string;
}) {
  return (
    <nav className="flex w-full gap-2 font-medium *:grow">
      <LinkButton to="/">Case Study</LinkButton>
      <LinkButton to={websiteUrl}>Live Website</LinkButton>
      <LinkButton to={githubUrl}>GitHub</LinkButton>
    </nav>
  );
}

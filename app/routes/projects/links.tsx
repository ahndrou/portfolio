import { LinkButton } from "~/components/linkButton";

export function Links() {
  return (
    <nav className="flex w-full gap-300 *:grow">
      <LinkButton to="/">Case Study</LinkButton>
      <LinkButton to="/">Live Website</LinkButton>
      <LinkButton to="/">GitHub</LinkButton>
    </nav>
  );
}

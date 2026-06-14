import { LinkButton } from "~/components/linkButton";

export function Links({ className }: { className: string }) {
  const cn = `flex w-full gap-300 *:grow ${className}`;

  return (
    <nav className={cn}>
      <LinkButton to="/">Case Study</LinkButton>
      <LinkButton to="/">Live Website</LinkButton>
      <LinkButton to="/">GitHub</LinkButton>
    </nav>
  );
}

import { LinkButton } from "~/components/link-button";

export function Links({ className }: { className: string }) {
  const cn = `flex w-full gap-100 font-medium *:grow ${className}`;

  return (
    <nav className={cn}>
      <LinkButton to="/">Case Study</LinkButton>
      <LinkButton to="/">Live Website</LinkButton>
      <LinkButton to="/">GitHub</LinkButton>
    </nav>
  );
}

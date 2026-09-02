import { Link, useLocation } from "react-router";

const links = [
  { to: "/about", label: "About Me", transitionName: "about-link" },
  { to: "/projects", label: "Projects", transitionName: "projects-link" },
  { to: "/contact", label: "Contact", transitionName: "contact-link" },
];

export default function NavBar() {
  const location = useLocation();

  return (
    <nav className="@container mx-auto w-full max-w-5xl py-4 text-sm font-medium">
      <ul className="flex gap-6">
        <li className="grow [view-transition-name:name]">
          <Link to="/" viewTransition>
            Andrew Smith
          </Link>
        </li>

        {links.map(({ to, label, transitionName }) => (
          <li
            key={to}
            className={`@max-[40ch]:hidden ${location.pathname === to ? "text-accent" : ""}`}
          >
            <Link
              to={to}
              viewTransition
              className={`[view-transition-name:${transitionName}]`}
            >
              {label}
            </Link>
          </li>
        ))}

        <li className="@max-[40ch]:hidden">
          <a
            href="https://github.com/ahndrou"
            target="_blank"
            rel="noopener"
            className="[view-transition-name:github-link]"
          >
            GitHub
          </a>
        </li>

        <li className="hidden @max-[40ch]:block">Menu</li>
      </ul>
    </nav>
  );
}

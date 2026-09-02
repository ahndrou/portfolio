import { Link, useLocation } from "react-router";

const links = [
  { to: "/about", label: "About Me", transitionName: "about-link" },
  { to: "/projects", label: "Projects", transitionName: "projects-link" },
  { to: "/contact", label: "Contact", transitionName: "contact-link" },
];

export default function NavBar() {
  const location = useLocation();

  return (
    <nav className="border-line @container sticky top-[0] w-full border-b py-4 text-sm backdrop-blur-2xl">
      <ul className="mx-auto flex max-w-5xl items-center gap-6">
        <li className="text-md grow [view-transition-name:name]">
          <Link to="/" viewTransition>
            Andrew Smith
          </Link>
        </li>

        {links.map(({ to, label, transitionName }) => (
          <li key={to}>
            <Link
              to={to}
              viewTransition
              className={`[view-transition-name:${transitionName}] hover:text-text flex items-center rounded-md p-3 @max-[40ch]:hidden ${location.pathname === to ? "bg-fill text-text" : "text-text-muted"}`}
            >
              {label}
            </Link>
          </li>
        ))}

        <li>
          <a
            href="https://github.com/ahndrou"
            target="_blank"
            rel="noopener"
            className="border-line-strong hover:bg-fill rounded-md border p-3 [view-transition-name:github-link] @max-[40ch]:hidden"
          >
            <span className="after:ml-1 after:inline-block after:content-['↗']">
              GitHub
            </span>
          </a>
        </li>

        <li className="hidden @max-[40ch]:block">Menu</li>
      </ul>
    </nav>
  );
}

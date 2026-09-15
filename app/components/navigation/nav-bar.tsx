import { Link, useLocation } from "react-router";
import { githubUrl, navLinks } from "./nav-data";

type NavBarProps = {
  menuOpen: boolean;
  onMenuOpen: () => void;
};

export default function NavBar({ menuOpen, onMenuOpen }: NavBarProps) {
  const location = useLocation();

  return (
    <nav className="border-line @container sticky top-[0] w-full border-b py-3 backdrop-blur-2xl @min-[70ch]:py-4">
      <ul className="mx-auto flex max-w-5xl items-center gap-6 px-6 lg:px-0">
        <li className="grow">
          <Link to="/" viewTransition className="text-md">
            Andrew Smith
          </Link>
        </li>

        {navLinks.map(({ to, label }) => (
          <li className="@max-[70ch]:hidden" key={to}>
            <Link
              to={to}
              viewTransition
              className={`hover:text-text flex items-center rounded-md p-3 ${location.pathname === to ? "bg-fill text-text" : "text-text-muted"}`}
            >
              {label}
            </Link>
          </li>
        ))}

        <li className="@max-[70ch]:hidden">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener"
            className="border-line-strong hover:bg-fill rounded-md border p-3"
          >
            <span className="after:ml-1 after:inline-block after:content-['↗']">
              GitHub
            </span>
          </a>
        </li>

        <li className="hidden @max-[70ch]:block">
          <button
            type="button"
            onClick={onMenuOpen}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="nav-drawer"
            className="border-line-strong hover:bg-fill grid cursor-pointer gap-1 rounded-md border p-3"
          >
            <span className="bg-text block h-[2px] w-5" />
            <span className="bg-text block h-[2px] w-5" />
            <span className="bg-text block h-[2px] w-5" />
          </button>
        </li>
      </ul>
    </nav>
  );
}

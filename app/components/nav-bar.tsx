import { Link, useLocation } from "react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function NavBar() {
  const location = useLocation();

  return (
    <nav className="border-line @container sticky top-[0] w-full border-b py-4 text-sm backdrop-blur-2xl">
      <ul className="mx-auto flex max-w-5xl items-center gap-6 px-6 lg:px-0">
        <li className="text-md grow">
          <Link to="/" viewTransition>
            Andrew Smith
          </Link>
        </li>

        {links.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              viewTransition
              className={`hover:text-text flex items-center rounded-md p-3 @max-[40ch]:hidden ${location.pathname === to ? "bg-fill text-text" : "text-text-muted"}`}
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
            className="border-line-strong hover:bg-fill rounded-md border p-3 @max-[40ch]:hidden"
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

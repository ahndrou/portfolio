import { Link, useLocation } from "react-router";

export default function NavBar() {
  const location = useLocation();

  return (
    <nav className="text-100 @container w-full font-medium">
      <ul className="flex gap-300">
        <li className="grow">
          <Link to="/">Andrew Smith</Link>
        </li>

        <li
          className={`@max-[40ch]:hidden ${location.pathname === "/about" && "text-txt-link-active"}`}
        >
          <Link to="/about">About Me</Link>
        </li>
        <li
          className={`@max-[40ch]:hidden ${location.pathname === "/projects" && "text-txt-link-active"}`}
        >
          <Link to="/projects">Projects</Link>
        </li>
        <li
          className={`@max-[40ch]:hidden ${location.pathname === "/contact" && "text-txt-link-active"}`}
        >
          <Link to="/contact">Contact</Link>
        </li>
        <li className="@max-[40ch]:hidden">
          <a href="https://github.com/ahndrou" target="_blank" rel="noopener">
            GitHub
          </a>
        </li>

        <li className="hidden @max-[40ch]:block">Menu</li>
      </ul>
    </nav>
  );
}

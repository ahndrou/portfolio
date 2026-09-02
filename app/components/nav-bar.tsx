import { Link, useLocation } from "react-router";

export default function NavBar() {
  const location = useLocation();

  return (
    <nav className="text-100 @container mx-auto w-full max-w-5xl p-300 font-medium">
      <ul className="flex gap-300">
        <li className="grow [view-transition-name:name]">
          <Link to="/" viewTransition>
            Andrew Smith
          </Link>
        </li>

        <li
          className={`@max-[40ch]:hidden ${location.pathname === "/about" && "text-txt-link-active"}`}
        >
          <Link
            to="/about"
            viewTransition
            className="[view-transition-name:about-link]"
          >
            About Me
          </Link>
        </li>
        <li
          className={`@max-[40ch]:hidden ${location.pathname === "/projects" && "text-txt-link-active"}`}
        >
          <Link
            to="/projects"
            viewTransition
            className="[view-transition-name:projects-link]"
          >
            Projects
          </Link>
        </li>
        <li
          className={`@max-[40ch]:hidden ${location.pathname === "/contact" && "text-txt-link-active"}`}
        >
          <Link
            to="/contact"
            viewTransition
            className="[view-transition-name:contact-link]"
          >
            Contact
          </Link>
        </li>
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

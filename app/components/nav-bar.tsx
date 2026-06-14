import { Link } from "react-router";

export default function NavBar() {
  return (
    <nav className="text-100 @container w-full font-medium">
      <ul className="flex gap-200">
        <li className="grow">
          <Link to="/">Andrew Smith</Link>
        </li>

        <li className="@max-[40ch]:hidden">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="@max-[40ch]:hidden">
          <Link to="/about">About Me</Link>
        </li>
        <li className="@max-[40ch]:hidden">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="@max-[40ch]:hidden">
          <Link to="/">GitHub</Link>
        </li>

        <li className="hidden @max-[40ch]:block">Menu</li>
      </ul>
    </nav>
  );
}

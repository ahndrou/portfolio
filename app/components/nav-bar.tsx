import { Link } from "react-router";

export default function NavBar() {
  return (
    <nav className="text-100 font-medium">
      <ul className="flex gap-200 px-300 py-200">
        <li className="grow">
          <Link to="/">Andrew Smith</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/">GitHub</Link>
        </li>
      </ul>
    </nav>
  );
}

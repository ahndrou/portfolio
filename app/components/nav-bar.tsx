import { Link } from "react-router";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
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

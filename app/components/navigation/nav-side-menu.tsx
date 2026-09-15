import { Link, useLocation } from "react-router";
import reactBurgerMenu from "react-burger-menu";
import { githubUrl, navLinks } from "./nav-data";

// react-burger-menu uses CommonJS. Its exports are dynamically created
// and so static analysis cannot discover named exports. Thus we
// destructure it here instead. At this point the module has been evaluated
// and so its types are known.
const { pushRotate: PushRotateMenu } = reactBurgerMenu;

// pushRotate positions the drawer and overlay itself, we just need to provide
// styles for everything else.
const styles = {
  bmMenu: {
    background: "var(--bg)",
    borderLeft: "1px solid var(--line)",
    backdropFilter: "var(--blur)",
  },
  bmItemList: {
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-2)",
    padding: "var(--space-7) var(--space-5)",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.5)",
  },
  bmCrossButton: {
    right: "var(--space-5)",
    top: "var(--space-5)",
  },
  bmCross: {
    background: "var(--text-muted)",
  },
};

type NavSideMenuProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onOpenChange: (isOpen: boolean) => void;
};

export default function NavSideMenu({
  isOpen,
  setIsOpen,
  onOpenChange,
}: NavSideMenuProps) {
  const location = useLocation();

  return (
    <PushRotateMenu
      id="nav-drawer"
      right
      isOpen={isOpen}
      onStateChange={({ isOpen }) => onOpenChange(isOpen)}
      customBurgerIcon={false}
      pageWrapId="page-wrap"
      outerContainerId="outer-container"
      width={220}
      styles={styles}
    >
      {navLinks.map(({ to, label }) => (
        <Link
          to={to}
          viewTransition
          onClick={() => setIsOpen(false)}
          key={to}
          className={`hover:text-text flex items-center rounded-md p-3 ${location.pathname === to ? "bg-fill text-text" : "text-text-muted"}`}
        >
          {label}
        </Link>
      ))}

      <a
        href={githubUrl}
        target="_blank"
        rel="noopener"
        className="border-line-strong hover:bg-fill mt-3 rounded-md border p-3"
      >
        <span className="after:ml-1 after:inline-block after:content-['↗']">
          GitHub
        </span>
      </a>
    </PushRotateMenu>
  );
}

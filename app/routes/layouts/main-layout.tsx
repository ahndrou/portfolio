import { useState } from "react";
import { Outlet } from "react-router";
import NavBar from "~/components/navigation/nav-bar";
import NavSideMenu from "~/components/navigation/nav-side-menu";

export default function MainLayout() {
  // The button for react-burger-menu is in the NavBar component, separate from its
  // menu component. State is required to coordinate the two.
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* pushRotate from react-burger-menu applies transforms to outer-container and
          page-wrap, making them the new containing block for positioning.
            The menu uses fixed positioning, and we want it to be relative to the viewport.
          As such, it is kept outside of outer-container. This differs slightly from the usage
          in the docs. */}
      <div className="contents">
        <NavSideMenu
          isOpen={menuOpen}
          onOpenChange={setMenuOpen}
          setIsOpen={setMenuOpen}
        />
      </div>

      <div id="outer-container" className="flex flex-col">
        <div id="page-wrap" className="grid grow content-start gap-7">
          <NavBar menuOpen={menuOpen} onMenuOpen={() => setMenuOpen(true)} />
          <div className="mx-auto mb-7 grid w-full max-w-5xl gap-6 px-3 lg:px-0">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

import { Outlet } from "react-router";
import NavBar from "~/components/nav-bar";

export default function MainLayout() {
  return (
    <div className="grid content-start justify-center gap-7">
      <NavBar />
      <div className="grid max-w-5xl gap-7">
        <Outlet />
      </div>
    </div>
  );
}

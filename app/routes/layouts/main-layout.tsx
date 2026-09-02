import { Outlet } from "react-router";
import NavBar from "~/components/nav-bar";

export default function MainLayout() {
  return (
    <div className="grid content-start gap-7">
      <NavBar />
      <div className="mx-auto grid max-w-5xl gap-7">
        <Outlet />
      </div>
    </div>
  );
}

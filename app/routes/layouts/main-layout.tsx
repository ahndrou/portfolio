import { Outlet } from "react-router";
import NavBar from "~/components/nav-bar";

export default function MainLayout() {
  return (
    <div className="grid content-start gap-7">
      <NavBar />
      <div className="mx-auto mb-7 grid max-w-5xl gap-6">
        <Outlet />
      </div>
    </div>
  );
}

import { Outlet } from "react-router";
import NavBar from "~/components/nav-bar";

export default function MainLayout() {
  return (
    <div className="grid content-start gap-7">
      <NavBar />
      <div className="mx-auto mb-7 grid w-full max-w-5xl gap-6 px-6 lg:px-0">
        <Outlet />
      </div>
    </div>
  );
}

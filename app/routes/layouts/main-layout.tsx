import { Outlet } from "react-router";
import NavBar from "~/components/nav-bar";

export default function MainLayout() {
  return (
    <div className="grid justify-items-center">
      <header className="w-full max-w-5xl bg-neutral-200/25">
        <NavBar />
      </header>
      <main className="w-full max-w-5xl py-400">
        <Outlet />
      </main>
    </div>
  );
}

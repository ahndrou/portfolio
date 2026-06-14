import { Outlet } from "react-router";
import NavBar from "~/components/nav-bar";

export default function MainLayout() {
  return (
    <div>
      <header className="mb-400 max-w-5xl bg-neutral-200/25 px-300 py-200">
        <NavBar />
      </header>

      <main className="max-w-5xl">
        <Outlet />
      </main>
    </div>
  );
}

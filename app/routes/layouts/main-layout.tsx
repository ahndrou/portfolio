import { Outlet } from "react-router";
import NavBar from "~/components/nav-bar";

export default function MainLayout() {
  return (
    <div className="grid justify-items-center py-200">
      <header className="mb-400 w-full max-w-5xl bg-neutral-200/25">
        <NavBar />
      </header>
      <main className="w-full max-w-5xl">
        <Outlet />
      </main>
    </div>
  );
}

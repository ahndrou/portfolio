import { Outlet } from "react-router";
import NavBar from "~/components/nav-bar";

export default function MainLayout() {
  return (
    <div className="flex flex-col items-center">
      <header className="mb-400 w-full max-w-5xl rounded-lg bg-neutral-200/25 px-300 py-200">
        <NavBar />
      </header>

      <main className="max-w-5xl grow">
        <Outlet />
      </main>
    </div>
  );
}

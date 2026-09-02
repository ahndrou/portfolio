import { Outlet } from "react-router";
import NavBar from "~/components/nav-bar";

export default function MainLayout() {
  return (
    <div className="flex flex-col items-center">
      <header className="border-b-line sticky top-[0] mb-6 w-full border-b backdrop-blur-2xl">
        <NavBar />
      </header>

      <main className="w-full max-w-5xl grow">
        <Outlet />
      </main>
    </div>
  );
}

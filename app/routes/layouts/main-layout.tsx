import { Outlet } from "react-router";
import NavBar from "~/components/nav-bar";

export default function MainLayout() {
  return (
    <div className="flex flex-col items-center">
      <header className="mb-500 w-full border-b border-b-[#E7ECE8]">
        <NavBar />
      </header>

      <main className="w-full max-w-5xl grow">
        <Outlet />
      </main>
    </div>
  );
}

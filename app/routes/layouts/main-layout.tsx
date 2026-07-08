import { Outlet } from "react-router";
import { BackgroundDecorations } from "~/components/background-decorations";
import NavBar from "~/components/nav-bar";

export default function MainLayout() {
  return (
    <div className="flex flex-col items-center">
      <header className="bg-bg-surface rounded-reg border-brdr-surface box-glow mb-500 w-full max-w-5xl border px-300 py-200">
        <NavBar />
      </header>

      <main className="w-full max-w-5xl grow">
        <Outlet />
      </main>
    </div>
  );
}

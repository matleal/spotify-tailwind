import { HomeIcon, Library, Search } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <nav className="space-y-5">
        <a
          href=""
          className="flex items-center gap-2 text-xs font-semibold text-zinc-200"
        >
          <HomeIcon />
          Home
        </a>
        <a
          href=""
          className="flex items-center gap-2 text-xs font-semibold text-zinc-200"
        >
          <Search />
          Search
        </a>
        <a
          href=""
          className="flex items-center gap-2 text-xs font-semibold text-zinc-200"
        >
          <Library />
          Your Library
        </a>
      </nav>

      <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-2">
        <a
          href=""
          className="text-sm text-zinc-400 hover:text-zinc-100 font-semibold"
        >
          Lo-fi for coding
        </a>
        <a
          href=""
          className="text-sm text-zinc-400 hover:text-zinc-100 font-semibold"
        >
          This is Linkin Park
        </a>
        <a
          href=""
          className="text-sm text-zinc-400 hover:text-zinc-100 font-semibold"
        >
          Nu metal
        </a>
        <a
          href=""
          className="text-sm text-zinc-400 hover:text-zinc-100 font-semibold"
        >
          Da o Play ai Daizinha!
        </a>
        <a
          href=""
          className="text-sm text-zinc-400 hover:text-zinc-100 font-semibold"
        >
          Rapping!
        </a>
      </nav>
    </aside>
  );
}

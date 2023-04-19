import {
  Laptop2,
  LayoutList,
  Maximize2,
  Mic2,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src="/album-meteora.jpg"
          width={64}
          height={64}
          alt="Capa do album"
        />
        <div className="flex flex-col gap-1">
          <strong className="font-normal">Don't Stay</strong>
          <span className="text-xs text-zinc-400">Linkin Park</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5">
        <div className="flex items-center gap-5">
          <Shuffle size={20} className="text-zinc-200" />
          <SkipBack size={20} className="text-zinc-200" />

          <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
            <Play />
          </button>

          <SkipForward size={20} className="text-zinc-200" />
          <Repeat size={20} className="text-zinc-200" />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="h-1 rounded-full w-24 bg-zinc-200"></div>
          </div>
          <span className="text-xs text-zinc-400">3:08</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-1">
          <Volume size={20} />
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="h-1 rounded-full w-5 bg-zinc-200"></div>
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  );
}

import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-zinc-900 text-zinc-50">
      <Component {...pageProps} />
    </div>
  );
}

import Link from "next/link";

export default async function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] p-8 pb-20 gap-4">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold text-blue-500">Next.js 15 rendering experimentation</h1>
        <ul className="space-y-2">
          <li><Link href="/top-rated" className="hover:underline">Top rated movies and TV shows (with PPR)</Link></li>
          <li><Link href="/about" className="hover:underline">About (with SSR)</Link></li>
        </ul>
      </main>
    </div>
  );
}

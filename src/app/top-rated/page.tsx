import { Suspense } from "react";

import Movies from "@/components/movies";
import Link from "next/link";
import Skeleton from "@/components/skeleton";
import TvShows from "@/components/tv-shows";

const TopRatedPage = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-blue-500 my-4">Top rated movies</h1>
            <Suspense fallback={<Skeleton />}>
                <Movies />
            </Suspense>
            <h1 className="text-3xl font-bold text-blue-500 my-4">Top rated tv shows</h1>
            <Suspense fallback={<Skeleton />}>
                <TvShows />
            </Suspense>
            <div>
                <Link href="/" className="hover:underline">Go back home</Link>
            </div>
        </div>
    )
}

export default TopRatedPage;
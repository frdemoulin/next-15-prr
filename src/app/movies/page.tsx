import { Suspense } from "react";

import Movies from "@/components/movies";
import MoviesSkeleton from "@/components/movies-skeleton";

const MoviesPage = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-blue-500 my-4">Top rated movies</h1>
            <Suspense fallback={<MoviesSkeleton />}>
                <Movies />
            </Suspense>
        </div>
    )
}

export default MoviesPage;
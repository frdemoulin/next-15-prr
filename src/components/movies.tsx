import Link from 'next/link';
import { headers } from 'next/headers';

import { delayMovies, withDelay } from '@/lib/delay';
import { Movie } from '@/types/movie';
import MovieCard from './movie-card';

interface MoviesResponseProps {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

const Movies = async () => {
    headers();

    let movies: Movie[] = await withDelay(
        fetch(
            // delay the response to simulate a slow data request that would benefit from streaming
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_API}&language=en-US&page=1`,
            {
                // disable Next.js Cache to better demo streaming
                cache: 'no-store',
            }
        )
        .then((res) => res.json())
        .then((data: MoviesResponseProps) => data.results),
        delayMovies
    );

    return (
        <div className="space-y-6" data-headers={headers()}>
            <div className="grid grid-cols-4 gap-6">
                {movies.map((movie) => (
                    <div key={movie.id} className="col-span-2 md:col-span-1">
                        <MovieCard movie={movie} />
                    </div>
                ))}
            </div>
            <div>
                <Link href="/" className="hover:underline">Go back home</Link>
            </div>
        </div>
    )
}

export default Movies;
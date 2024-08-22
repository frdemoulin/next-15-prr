import Link from 'next/link';
import { headers } from 'next/headers';

import { delayTvShows, withDelay } from '@/lib/delay';
import { TvShow } from '@/types/tv-show';
import TvShowCard from './tv-show-card';

interface TvShowsResponseProps {
    page: number;
    results: TvShow[];
    total_pages: number;
    total_results: number;
}

const TvShows = async () => {
    headers();

    let tvShows: TvShow[] = await withDelay(
        fetch(
            // delay the response to simulate a slow data request that would benefit from streaming
            `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_API}&language=en-US&page=1`,
            {
                // disable Next.js Cache to better demo streaming
                cache: 'no-store'
                // agent: httpsAgent,
            }
        )
        .then((res) => res.json())
        .then((data: TvShowsResponseProps) => data.results.slice(0, 4)),
        delayTvShows
    );

    return (
        <div className="space-y-6" data-headers={headers()}>
            <div className="grid grid-cols-4 gap-6">
                {tvShows.map((tvShow) => (
                    <div key={tvShow.id} className="col-span-2 md:col-span-1">
                        <TvShowCard tvShow={tvShow} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TvShows;
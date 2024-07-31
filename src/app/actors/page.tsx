import { Suspense } from "react";

import { SkeletonCard } from "@/components/skeleton-card";
import UserCard from "@/components/user-card";

interface dataProps {
  id: number;
  cast: Array<actorProps>;
}

interface actorProps {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

const getActors = async (): Promise<Array<actorProps>> => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/299054/credits?api_key=${process.env.NEXT_PUBLIC_TMDB_API}`,
      {
        // We intentionally disable Next.js Cache to better demo streaming
        cache: 'no-store',
      }
    );

    await new Promise((resolve) => setTimeout(resolve, 4000));
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data: dataProps = await response.json();
    
    return data.cast;
  } catch (error) {
    console.error('error: ', error);

    return [];
  }
};

export default async function Home() {
  const actors = await getActors();

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] p-8 pb-20 gap-4">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold text-blue-500">Expendables 4</h1>
        <h2 className="text-2xl font-bold">Liste des acteurs</h2>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
        {actors && actors.map((actor) => {
            return (
              <Suspense
                fallback={<SkeletonCard />}
                key={actor.id}>
              <UserCard
                key={actor.id}
                originalName={actor.original_name}
              />
              </Suspense>
            );
          })}
        </div>
      </main>
    </div>
  );
}

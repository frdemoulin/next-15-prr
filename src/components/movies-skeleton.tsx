import { SkeletonCard } from "./skeleton-card";

const MoviesSkeleton = () => {
    return (
        <div className="grid grid-cols-4 gap-6">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
      </div>
    )
}

export default MoviesSkeleton;
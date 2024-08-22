import { SkeletonCard } from "./skeleton-card";

const Skeleton = () => {
    return (
        <div className="grid grid-cols-4 gap-6">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
      </div>
    )
}

export default Skeleton;
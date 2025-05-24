import { Skeleton } from "@/components/ui/skeleton";

export function ProductSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="relative">
        <Skeleton className="w-full h-48" />
        <Skeleton className="absolute top-2 left-2 h-6 w-20" />
      </div>
      <div className="p-4">
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-3/4 mb-3" />
        <div className="flex items-center justify-between mb-3">
          <div>
            <Skeleton className="h-5 w-20 mb-1" />
            <Skeleton className="h-3 w-16" />
          </div>
          <Skeleton className="h-5 w-12" />
        </div>
        <Skeleton className="h-8 w-full" />
      </div>
    </div>
  );
}

export function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <ProductSkeleton key={index} />
      ))}
    </div>
  );
}

import { Skeleton } from "@/components/ui/skeleton";

export function FilterSkeleton() {
  return (
    <div className="w-full md:w-64 flex-shrink-0">
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <div className="flex items-center justify-between mb-4">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-4 w-16" />
        </div>

        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, sectionIndex) => (
            <div
              key={sectionIndex}
              className="border-t pt-4 first:border-t-0 first:pt-0"
            >
              <div className="flex items-center justify-between mb-2">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-4 w-4" />
              </div>
              <div className="space-y-2">
                {Array.from({ length: 4 }).map((_, optionIndex) => (
                  <div key={optionIndex} className="flex items-center">
                    <Skeleton className="h-4 w-4 mr-2" />
                    <Skeleton className="h-4 flex-1" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

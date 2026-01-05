import { Skeleton } from '@/components/ui/skeleton';

export function ProjectsViewSkeleton() {
    return (
        <div className="grid gap-6 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
                <div
                    key={i}
                    className="bg-card/50 border-border/50 overflow-hidden rounded-2xl border backdrop-blur-sm"
                >
                    <Skeleton className="aspect-video w-full" />

                    <div className="space-y-4 p-6">
                        <Skeleton className="h-5 w-2/3" />

                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />

                        <div className="flex gap-2">
                            <Skeleton className="h-5 w-14 rounded-md" />
                            <Skeleton className="h-5 w-12 rounded-md" />
                            <Skeleton className="h-5 w-16 rounded-md" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

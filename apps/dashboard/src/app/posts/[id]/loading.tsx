import { Skeleton } from '@apps/components';

export default function Loading() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        <Skeleton className="h-10 w-3/5" />
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6 flex flex-col gap-2">
        <Skeleton className="h-4 w-1/2" /> <Skeleton className="h-4 w-2/3" />{' '}
        <Skeleton className="h-4 w-1/3" />{' '}
      </p>
    </div>
  );
}

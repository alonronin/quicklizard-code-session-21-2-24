import { Skeleton } from '@apps/components';

export default function Loading() {
  return (
    <ul className="flex flex-col gap-4">
      <li>
        <Skeleton className="h-4 w-1/3" />
      </li>
      <li>
        <Skeleton className="h-4 w-2/3" />
      </li>
      <li>
        <Skeleton className="h-4 w-1/5" />
      </li>
    </ul>
  );
}

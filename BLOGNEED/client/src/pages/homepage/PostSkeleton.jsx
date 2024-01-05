import React from 'react';
import { Skeleton } from '@mui/material';

export default function PostSkeleton() {
  return (
    <div className='flex flex-col gap-2 my-4'>
         <Skeleton variant="rounded" width={600} height={35} />
         <Skeleton variant="rounded" width={200} height={25} />
         <Skeleton variant="rounded" width={700} height={100} />
    </div>
  )
}

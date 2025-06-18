'use client'
import DestinationClient from '@/components/shared/DestinationClient';
import { Suspense } from 'react';

export default function DestinationPage() {
  return(
    <div>
      <Suspense>
      <DestinationClient />;
      </Suspense>
    </div>
  )
}
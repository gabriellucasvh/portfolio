'use client';

import { useState, useEffect } from 'react';
import Loading from '@/components/Loading';

export default function WithLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simula 2s de carregamento
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <div className={isLoading ? 'hidden' : ''}>{children}</div>
    </>
  );
}

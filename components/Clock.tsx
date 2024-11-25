"use client";

import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const updateClock = () => {
      setTime(new Date().toLocaleTimeString("pt-BR", { hour12: false }));
    };

    updateClock(); // Atualiza a hora imediatamente
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval); // Cleanup do intervalo
  }, []);

  // Mostra um placeholder enquanto o componente não está pronto
  if (!time) return null;

  return (
    <div className="hidden md:flex justify-center items-center">
      <p className="text-lg font-mono text-neutral-950 dark:text-white">
        {time}
        </p>
    </div>
  );
};

export default Clock;

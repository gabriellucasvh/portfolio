'use client'

import { useState, useEffect } from "react";

export default function ToggleThemeButton() {
  const [theme, setTheme] = useState<"light" | "dark" | "loading">("loading");

  useEffect(() => {
    // Verifica o tema preferido do usuário após a renderização no cliente
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(preferredTheme);
    // Sincroniza a classe 'dark' no HTML com o tema
    document.documentElement.classList.toggle("dark", preferredTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  if (theme === "loading") {
    return null; // Evita renderizar enquanto o tema não estiver definido
  }

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md hover:shadow-lg transition-all"
      aria-label={`Ativar tema ${theme === "light" ? "escuro" : "claro"}`}
    >
      {theme === "light" ? "🌙 Tema Escuro" : "☀️ Tema Claro"}
    </button>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


const lora = Lora({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Gabriel Gonçalves",
  description: "Portfolio de Gabriel Gonçalves",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} antialiased flex flex-col items-center justify-center px-4`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
          </ThemeProvider>
      </body>
    </html>
  );
}

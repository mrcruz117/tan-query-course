
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

// const queryClient = new QueryClient();

export const metadata: Metadata = {
  title: "React Query Course",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <QueryClientProvider client={queryClient}> */}
        <body className={inter.className}>{children}</body>
      {/* </QueryClientProvider> */}
    </html>
  );
}

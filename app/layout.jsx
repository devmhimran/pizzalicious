"use client";
import Navbar from "@/components/NavBar/Navbar";
import "./globals.css";
import { fonts } from "@/utlis/fonts/font";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className={`${fonts.plus_jakarta_sans.className} min-h-screen`}>
          <Navbar />
          {children}
          <Toaster />
        </body>
      </QueryClientProvider>
    </html>
  );
}

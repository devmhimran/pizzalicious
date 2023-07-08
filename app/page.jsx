import AllPizzas from "@/components/AllPizzas/AllPizzas";
import Blob from "@/components/Blob/Blob";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import PizzaShowcase from "@/components/PizzaShowcase/PizzaShowcase";
import Head from "next/head";
import Image from "next/image";

export const metadata = {
  title: "Home - Pizzalicious",
  description: "...",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-brand__bg__color">
      <Hero />
      {/* <Blob /> */}
      <AllPizzas page="home" />
      <Footer />
    </main>
  );
}

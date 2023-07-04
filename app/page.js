import AllPizzas from "@/components/AllPizzas/AllPizzas";
import Blob from "@/components/Blob/Blob";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import PizzaShowcase from "@/components/PizzaShowcase/PizzaShowcase";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      {/* <Blob />
      <PizzaShowcase /> */}
      <AllPizzas page="home" />
      <Footer />
    </main>
  );
}

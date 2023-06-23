import Hero from "@/components/Hero/Hero";
import PizzaShowcase from "@/components/PizzaShowcase/PizzaShowcase";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <PizzaShowcase />
    </main>
  );
}

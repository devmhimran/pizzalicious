import AllPizzas from "@/components/AllPizzas/AllPizzas";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Our Hot Deals - Pizzalicious",
  description: "...",
};

const Page = () => {
  return (
    <div>
      <div className="min-h-screen bg-brand__bg__color">
        <AllPizzas />
      </div>
      <Footer />
    </div>
  );
};

export default Page;

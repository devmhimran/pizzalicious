import AllPizzas from "@/components/AllPizzas/AllPizzas";
import Footer from "@/components/Footer/Footer";

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

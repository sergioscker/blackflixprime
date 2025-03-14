import Features from "@/components/features/page";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page"
import Hero from "@/components/hero/page";
import Price from "@/components/price/page";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Price />
      <Footer />
    </div>
  );
}

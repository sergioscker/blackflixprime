import Features from "@/components/features/page";
import Footer from "@/components/footer/page";
import Hero from "@/components/hero/page";
import Price from "@/components/price/page";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Features />
      <Price />
      <Footer />
    </div>
  );
}

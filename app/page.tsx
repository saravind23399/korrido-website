import { Hero } from "./sections/Hero";
import { HowItWorks } from "./sections/HowItWorks";
import { ForBrands } from "./sections/ForBrands";
import { ForRiders } from "./sections/ForRiders";
import { ForDrivers } from "./sections/ForDrivers";
import { ProductDemo } from "./sections/ProductDemo";
import { WhyKorrido } from "./sections/WhyKorrido";
import { Testimonials } from "./sections/Testimonials";
import { FinalCTA } from "./sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <ForBrands />
      <ForRiders />
      <ForDrivers />
      <ProductDemo />
      <WhyKorrido />
      <Testimonials />
      <FinalCTA />
    </>
  );
}

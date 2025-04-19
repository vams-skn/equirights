export const metadata = {
  title: "EquiRights",
  description: "a global legislations aggregator and navigator for marginalised communities",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Features from "@/components/features";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Features />
    </>
  );
}

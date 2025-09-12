import Hero from "@/components/about/Hero"
import Meet from "@/components/about/Meet"
import Mission from "@/components/about/Mission"
import Reviews from "@/components/about/Reviews"
import CTA from "@/components/CTA"
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About - G19 Global Consultancy",
	description: "G19 Global Consultancy",
};
const page = () => {
  return (
    <div>
      <Hero />
      <Meet />
      <Mission />
      <Reviews />
      <CTA />
    </div>
  )
}
export default page
import ServiceHero from "@/components/services/ServiceHero";
import Services from "@/components/services/Services";
import { Metadata } from "next";
export const metadata: Metadata = {
	title: "Our Services - G19 Global Consultancy ",
	description: "G19 Global Consultancy",
	icons: {
		icon: "/g19logo.png",
	},
};
const page = () => {
	return (
		<div>
			<ServiceHero />
      <Services />
		</div>
	);
};
export default page;

import Hero from "@/components/home/Hero";
import WhatWeDo from "@/components/home/WhatWeDo";
import WhoWeAre from "@/components/home/WhoWeAre";
import WhyChooseUs from "@/components/home/WhyChooseUs";

const page = () => {
	return (
		<div className='min-h-screen'>
			<Hero />
			<WhoWeAre />
			<WhatWeDo />
			<WhyChooseUs />
		</div>
	);
};
export default page;

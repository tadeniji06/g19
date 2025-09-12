import { neg } from "@/assets";
import Image from "next/image";

const ServiceHero = () => {
	return (
		<div className='w-full min-h-[550px] bg-gradient-to-b from-light-gray to-white flex items-center'>
			<div className='container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-around items-center gap-10'>
				<div className='flex flex-col gap-6 max-w-xl text-center md:text-left'>
					<span className='text-sm font-semibold tracking-wide text-primary-blue uppercase'>
						Our Services
					</span>

					<h1 className='text-3xl md:text-5xl font-bold text-gray-900 leading-snug'>
						Practical, scalable solutions for telecoms and recommerce
						operations
					</h1>

					<button className='self-center md:self-start px-6 py-3 rounded-lg text-white bg-primary-blue hover:bg-blue-700 transition-all duration-300'>
						Book Consultation
					</button>
				</div>

				<div className='hidden md:block w-[500px] h-[300px]'>
					<Image
						src={neg}
						alt='Services'
						className='w-full rounded-2xl shadow-lg h-full'
					/>
				</div>
			</div>
		</div>
	);
};
export default ServiceHero;

import { heroImg, neg } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
	return (
		<div className='w-full min-h-[550px] bg-gradient-to-b from-light-gray to-white flex items-center'>
			<div className='container mx-auto p-8 flex flex-col-reverse md:flex-row justify-around items-center'>
				{/* Text Section */}
				<div className='flex flex-col gap-6 max-w-lg text-center md:text-left'>
					<span className='text-gray-500 font-semibold text-xl sm:text-2xl'>
						ABOUT G19 CONSULTANCY
					</span>
					{/* <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-snug'>
						Your Global Consultancy Partner
					</h1> */}
					<p className='text-gray-600 text-sm sm:text-base'>
						Trusted expertise in telecoms and recommerce for over 30
						years
					</p>
					<Link href={"/contact"}>
						<button className='bg-primary-blue text-white px-6 py-3 rounded-md w-fit cursor-pointer mx-auto md:mx-0 shadow-md hover:bg-green-400 transition'>
							Contact Gareth Williams
						</button>
					</Link>
				</div>

				{/* Image Section */}
				<div className='md:flex hidden justify-center'>
					<Image
						src={heroImg}
						alt='Hero Image'
						className='w-[250px] sm:w-[300px] md:w-[400px] h-auto md:h-[450px] object-cover drop-shadow-lg'
						priority
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;

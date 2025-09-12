"use client";
import { w } from "@/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const WhoWeAre = () => {
	return (
		<div className='w-full bg-white py-20 flex justify-center border-t border-gray-500'>
			<div className='container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12 text-center md:text-left max-w-6xl'>
				{/* Text Section */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: true }}
					className='flex flex-col gap-6 max-w-lg'
				>
					<span className='text-gray-500 font-semibold text-lg'>
						WHO WE ARE
					</span>
					<p className='text-gray-700 leading-relaxed text-sm sm:text-base'>
						G19 Global Consultancy provides expert guidance in used
						telecoms consultancy and recommerce infrastructure,
						helping businesses maximize value from surplus equipment
						and build scalable, efficient operations. With over 30
						years of experience in device distribution and global
						recommerce, we deliver trusted, practical solutions in
						asset recovery, resale strategy, warehouse design, and
						supply chain optimisation—empowering clients to thrive in
						a fast-evolving marketplace.
					</p>
					<Link href={"/about"}>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className='bg-primary-blue text-white px-6 py-3 rounded-md shadow-md w-fit mx-auto md:mx-0 hover:bg-green-400 transition cursor-pointer'
						>
							Discover more about G19
						</motion.button>
					</Link>
				</motion.div>

				{/* Image Section */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
					viewport={{ once: true }}
					className='flex justify-center w-full md:w-1/2'
				>
					<Image
						src={w}
						alt='Who We Are'
						className='w-[280px] sm:w-[350px] md:w-full h-auto object-contain drop-shadow-lg rounded-xl'
						priority
					/>
				</motion.div>
			</div>
		</div>
	);
};

export default WhoWeAre;

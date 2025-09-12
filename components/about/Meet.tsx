"use client";

import { gw } from "@/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const Meet = () => {
	return (
		<section className='bg-light-gray/30 py-16'>
			<div className='container mx-auto px-6 text-center md:text-left'>
				<motion.h2
					className='text-2xl md:text-3xl font-bold text-gray-800 mb-10'
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					MEET GARETH WILLIAMS
				</motion.h2>

				<div className='flex flex-col-reverse md:flex-row items-center gap-10 max-w-6xl mx-auto'>
					{/* Text Section */}
					<motion.div
						className='w-full md:w-2/3 text-gray-700 leading-relaxed'
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
					>
						<p className='mb-4'>
							Gareth Williams is the Director of G19 Global
							Consultancy, bringing over 30 years of experience in
							device distribution and the global recommerce space.
							Throughout his career, he has played a key role in
							shaping the secondary market for telecom equipment,
							guiding businesses in asset recovery, resale strategy,
							and international distribution.
						</p>
						<p className='mb-4'>
							His expertise spans the design of recommerce
							infrastructures, including warehouse operations, supply
							chain optimization, and technology integration. Gareth’s
							achievements include leading large-scale distribution
							projects across multiple continents, building efficient
							operational frameworks, and advising global partners on
							sustainable, scalable business growth.
						</p>
						<p>
							With a reputation for integrity, global reach, and
							practical solutions, Gareth continues to support
							businesses and investors seeking to unlock value in used
							telecoms and recommerce markets.
						</p>
					</motion.div>

					{/* Image Section */}
					<motion.div
						className='w-full md:w-1/3 flex justify-center'
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						<Image
							src={gw}
							alt='Gareth Williams'
							className='w-[320px] h-[380px] object-cover rounded-2xl shadow-lg'
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Meet;

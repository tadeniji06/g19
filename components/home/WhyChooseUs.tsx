"use client";

import { map } from "@/assets";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { whyUs } from "@/utils/data";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
	return (
		<div className='bg-gradient-to-r from-light-gray to-primary-blue border-t border-gray-300 py-12'>
			<div className='container mx-auto px-6 text-center'>
				<motion.h2
					className='text-2xl md:text-3xl font-bold text-gray-800 mb-10'
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					WHY CHOOSE US
				</motion.h2>

				<div className='flex flex-col-reverse md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto'>
					{/* Text List */}
					<div className='flex flex-col gap-6 text-left w-full md:w-1/2'>
						{whyUs.map((why, index) => (
							<motion.div
								key={index}
								className='flex items-start gap-4'
								initial={{ opacity: 0, x: -40 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: index * 0.2 }}
							>
								<Icon
									icon='lets-icons:check-fill'
									className='text-primary-blue text-2xl flex-shrink-0'
								/>
								<p className='text-gray-700 leading-relaxed'>
									<span className='font-semibold'>{why.title}:</span>{" "}
									{why.desc}
								</p>
							</motion.div>
						))}
					</div>

					{/* Map Image */}
					<motion.div
						className='w-full hidden md:w-1/2 md:flex justify-center'
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						<Image
							src={map}
							alt='Global Map'
							className='w-[400px] h-[450px] object-contain'
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default WhyChooseUs;

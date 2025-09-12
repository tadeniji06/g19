"use client";

import { whatWeDo } from "@/utils/data";
import { motion } from "framer-motion";

const WhatWeDo = () => {
	return (
		<div className='container p-8 mx-auto text-center'>
			<motion.span
				className='text-primary-blue font-semibold tracking-wide block mb-8'
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				WHAT WE DO
			</motion.span>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
				{whatWeDo.map((what, index) => (
					<motion.div
						key={index}
						className='bg-primary-blue rounded-2xl flex flex-col text-white p-6 shadow-lg'
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.6,
							delay: index * 0.2,
							ease: "easeOut",
						}}
					>
						<span className='text-xl font-bold mb-2'>
							{what.title}
						</span>
						<p className='text-sm leading-relaxed'>{what.desc}</p>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default WhatWeDo;

"use client";

import { reviews } from "@/utils/data";
import { motion } from "framer-motion";

const Reviews = () => {
	return (
		<section className='bg-light-gray/30 py-16'>
			<div className='container mx-auto px-6 text-center'>
				<motion.h2
					className='text-2xl md:text-3xl font-bold text-gray-800 mb-12'
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					Trusted by businesses worldwide to deliver scalable
					solutions
				</motion.h2>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
					{reviews.map((review, i) => (
						<motion.div
							key={i}
							className='bg-white shadow-md rounded-2xl p-6 text-left flex flex-col gap-4 hover:shadow-lg transition'
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: i * 0.1 }}
						>
							<p className='text-gray-600 leading-relaxed italic'>
								“{review.body}”
							</p>
							<div>
								<p className='font-semibold text-gray-900'>
									{review.author}
								</p>
								<p className='text-sm text-gray-500'>{review.pos}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Reviews;

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CTA = () => {
	return (
		<section className='bg-gradient-to-r from-primary-blue/10 to-light-gray py-16'>
			<div className='container mx-auto flex flex-col gap-6 justify-center items-center text-center px-6'>
				<motion.span
					className='text-xl md:text-2xl font-semibold text-gray-800 max-w-2xl'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					Looking for strategic guidance in telecoms or recommerce?
				</motion.span>

				<Link href={"/contact"}>
					<motion.button
						className='bg-primary-blue text-white px-8 py-4 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300'
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.4 }}
					>
						Contact Gareth Williams
					</motion.button>
				</Link>
			</div>
		</section>
	);
};

export default CTA;

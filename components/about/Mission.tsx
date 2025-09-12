"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

const Mission = () => {
	return (
		<section className='bg-light-gray/30 py-16'>
			<div className='container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10'>
				{/* Mission */}
				<motion.div
					className='flex flex-col gap-6 bg-primary-blue text-white p-8 rounded-2xl shadow-lg'
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<div className='flex gap-4 items-center text-xl font-semibold'>
						<Icon icon='mingcute:aiming-line' width={28} />
						<span>Our Mission</span>
					</div>
					<p className='leading-relaxed opacity-90'>
						At G19 Global Consultancy, our mission is to provide
						trusted, practical, and scalable solutions that empower
						businesses to succeed in the evolving markets of used
						telecoms and recommerce. We are committed to helping
						companies unlock the full potential of their surplus
						assets, streamline operational processes, and build
						infrastructures that support long-term growth.
					</p>
				</motion.div>

				{/* Values */}
				<motion.div
					className='flex flex-col gap-6 bg-primary-blue text-white p-8 rounded-2xl shadow-lg'
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					<div className='flex gap-4 items-center text-xl font-semibold'>
						<Icon icon='mdi:handshake-outline' width={28} />
						<span>Our Values</span>
					</div>

					<div className='flex flex-col gap-4'>
						<div className='flex items-center gap-3'>
							<Icon
								icon='lets-icons:check-fill'
								className='text-green-400'
								width={20}
							/>
							<span>Global Reach</span>
						</div>
						<div className='flex items-center gap-3'>
							<Icon
								icon='lets-icons:check-fill'
								className='text-green-400'
								width={20}
							/>
							<span>Integrity</span>
						</div>
						<div className='flex items-center gap-3'>
							<Icon
								icon='lets-icons:check-fill'
								className='text-green-400'
								width={20}
							/>
							<span>Efficiency</span>
						</div>
						<div className='flex items-center gap-3'>
							<Icon
								icon='lets-icons:check-fill'
								className='text-green-400'
								width={20}
							/>
							<span>Expertise</span>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Mission;

import { logo } from "@/assets";
import { headerLinks } from "@/utils/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className='bg-primary-blue text-white p-8 border-t border-white'>
			{/* Top Section */}
			<div className='container mx-auto max-w-7xl flex flex-col md:grid md:grid-cols-5 gap-12 text-center md:text-left'>
				{/* Company Info */}
				<div className='flex flex-col max-w-sm space-y-4 md:col-span-2 mx-auto md:mx-0'>
					<Image
						src={logo}
						alt='G19 Logo'
						className='w-[140px] h-[120px] object-contain mx-auto md:mx-0'
						priority
					/>
					<p className='text-xs sm:text-sm leading-relaxed opacity-90'>
						With over 30 years of experience in device distribution
						and global recommerce, we deliver trusted, practical
						solutions in asset recovery, resale strategy, warehouse
						design, and supply chain optimisation—empowering clients
						to thrive in a fast-evolving marketplace.
					</p>
				</div>

				{/* Quick Links */}
				<div>
					<h3 className='text-base font-bold mb-4'>Quick Links</h3>
					<ul className='space-y-2'>
						{headerLinks.map((link) => (
							<li key={link.title}>
								<Link
									href={link.link}
									className='text-sm opacity-90 hover:opacity-100 hover:underline transition-all'
								>
									{link.title}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Services */}
				<div>
					<h3 className='text-base font-bold mb-4'>Services</h3>
					<ul className='space-y-2 text-sm opacity-90'>
						<li>Telecom Consultancy</li>
						<li>Re-commerce</li>
						<li>Infrastructure</li>
						<li>Advisory & Strategy</li>
					</ul>
				</div>

				{/* Contact Us */}
				<div>
					<h3 className='text-base font-bold mb-4'>Contact Us</h3>
					<Link
						href='#'
						className='text-sm opacity-90 hover:opacity-100 hover:underline'
					>
						Book Consultation
					</Link>
				</div>

				{/* Social */}
				<div>
					<h3 className='text-base font-bold mb-4'>Social</h3>
					<div className='flex justify-center md:justify-start gap-4'>
						<Link href='#' aria-label='Facebook'>
							<Icon icon='mdi:facebook' width={20} />
						</Link>
						<Link href='#' aria-label='Instagram'>
							<Icon icon='mdi:instagram' width={20} />
						</Link>
						<Link href='#' aria-label='Twitter'>
							<Icon icon='mdi:twitter' width={20} />
						</Link>
						<Link href='#' aria-label='Youtube'>
							<Icon icon='mdi:youtube' width={20} />
						</Link>
					</div>
				</div>
			</div>

			{/* Bottom Section */}
			<div className='container mx-auto max-w-7xl mt-8 pt-4 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-75 text-center md:text-left'>
				<p>
					&copy; {new Date().getFullYear()} G19. All rights reserved.
				</p>
				<div className='flex gap-4'>
					<Link
						href='#'
						className='hover:opacity-100 transition-opacity'
					>
						Privacy Policy
					</Link>
					<Link
						href='#'
						className='hover:opacity-100 transition-opacity'
					>
						Terms of Service
					</Link>
				</div>
				<p>
					Developed by{" "}
					<Link
						href='https://olutunmise.vercel.app'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:underline'
					>
						Olutunmise
					</Link>
				</p>
			</div>
		</footer>
	);
};

export default Footer;

import { Icon } from "@iconify/react/dist/iconify.js";

const Contact = () => {
	return (
		<section className='w-full bg-gradient-to-b from-white to-gray-50 py-16'>
			<div className='container mx-auto px-6 flex flex-col gap-12'>
				{/* Heading */}
				<div className='text-center'>
					<p className='uppercase text-sm tracking-wide text-gray-500'>
						We’ll Be Glad To Hear From You
					</p>
					<h2 className='text-2xl md:text-3xl font-semibold text-gray-800 mt-2'>
						We’re ready to support your business journey
					</h2>
				</div>

				{/* Contact Content */}
				<div className='flex flex-col md:flex-row gap-10'>
					{/* Left: Info */}
					<div className='flex-1 bg-[#1f2d3d] text-white rounded-xl p-8 flex flex-col gap-6'>
						<h3 className='text-lg font-semibold'>Get in Touch</h3>

						<div>
							<p className='font-medium'>Visit Us:</p>
							<p className='text-sm text-gray-300'>
							Manchester, UK
							</p>
						</div>

						{/* <div>
							<p className='font-medium'>Chat Us:</p>
							<p className='text-sm text-gray-300'>
								Our friendly team is here to help
							</p>
							<a
								href='mailto:garethwilliams@g19.com'
								className='text-white underline'
							>
								garethwilliams@g19.com
							</a>
						</div> */}

						<div>
							<p className='font-medium'>Call Us:</p>
							<p className='text-sm text-gray-300'>
								Mon – Fri, 8am – 5pm
							</p>
							<a
								href='tel:+447725686317'
								className='text-white underline'
							>
								+447725686317
							</a>
						</div>

						<div>
							<p className='font-medium'>Social Media</p>
							<div className='flex gap-4 mt-2'>
								<Icon icon='mdi:facebook' className='w-5 h-5' />
								<Icon icon='mdi:instagram' className='w-5 h-5' />
								<Icon icon='mdi:linkedin' className='w-5 h-5' />
								<Icon icon='mdi:youtube' className='w-5 h-5' />
							</div>
						</div>
					</div>

					{/* Right: Form */}
					<div className='flex-1 border rounded-xl p-8 bg-white shadow-sm'>
						<h3 className='text-lg font-semibold text-gray-800 mb-6'>
							Send Us A Message
						</h3>

						<form className='flex flex-col gap-5'>
							<input
								type='text'
								placeholder='Name'
								className='border rounded-lg p-3 w-full focus:ring-2 focus:ring-primary-blue outline-none'
							/>
							<input
								type='email'
								placeholder='Email'
								className='border rounded-lg p-3 w-full focus:ring-2 focus:ring-primary-blue outline-none'
							/>
							<select className='border rounded-lg p-3 w-full focus:ring-2 focus:ring-primary-blue outline-none'>
								<option>Advisory & Strategy</option>
								<option>Recommerce Infrastructure</option>
								<option>Used Telecoms Consultancy</option>
							</select>
							<textarea
								placeholder='Message'
								rows={5}
								className='border rounded-lg p-3 w-full focus:ring-2 focus:ring-primary-blue outline-none'
							></textarea>
							<button
								type='submit'
								className='bg-primary-blue text-white py-3 rounded-lg hover:bg-blue-700 transition'
							>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;

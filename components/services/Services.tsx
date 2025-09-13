import { advise, tele, infra } from "@/assets";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

const Services = () => {
	return (
		<div className='flex flex-col gap-12 mt-6'>
			{/* Service Card 1 */}
			<div className='container mx-auto flex flex-col md:flex-row items-center gap-10 border border-gray-300 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow'>
				{/* Text */}
				<div className='flex-1 flex flex-col gap-4'>
					<h3 className='text-xl font-semibold text-gray-900'>
						Used Telecoms Consultancy
					</h3>
					<p className='text-gray-600 leading-relaxed'>
						We help businesses unlock the hidden value of surplus
						telecom equipment through expert asset recovery and resale
						strategies.
					</p>

					<ul className='flex flex-col gap-3 text-primary-blue font-medium'>
						<li className='flex items-center gap-3'>
							<Icon icon='icon-park-solid:check-one' /> Asset Recovery
						</li>
						<li className='flex items-center gap-3'>
							<Icon icon='icon-park-solid:check-one' /> Resale
							Strategy
						</li>
						<li className='flex items-center gap-3'>
							<Icon icon='icon-park-solid:check-one' /> Compliance
						</li>
						<li className='flex items-center gap-3'>
							<Icon icon='icon-park-solid:check-one' /> Global
							Distribution Insight
						</li>
					</ul>
				</div>

				{/* Image */}
				<div className='flex-1 flex justify-center'>
					<Image
						alt='telecommunication'
						src={tele}
						className='rounded-lg object-contain'
					/>
				</div>
			</div>

			{/* Service Card 2 */}
			<div className='container mx-auto flex flex-col md:flex-row-reverse items-center gap-10 border border-gray-300 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow'>
				<div className='flex-1 flex flex-col gap-4'>
					<h3 className='text-xl font-semibold text-gray-900'>
						Recommerce Infrastructure
					</h3>
					<p className='text-gray-600 leading-relaxed'>
						From warehouse design to process optimization, we build
						scalable recommerce frameworks tailored to your
						operations.
					</p>

					<ul className='flex flex-col gap-3 text-primary-blue font-medium'>
						<li className='flex items-center gap-3'>
							<Icon icon='icon-park-solid:check-one' /> Warehouse
							Design
						</li>
						<li className='flex items-center gap-3'>
							<Icon icon='icon-park-solid:check-one' /> Process
							Optimization
						</li>
						<li className='flex items-center gap-3'>
							<Icon icon='icon-park-solid:check-one' /> Tech Stack
							Selection
						</li>
					</ul>
				</div>

				<div className='flex-1 flex justify-center'>
					<Image
						alt='infrastructure'
						src={infra}
						className='rounded-lg object-contain'
					/>
				</div>
			</div>

			{/* Service Card 3 */}
			<div className='mb-6 container mx-auto flex flex-col md:flex-row items-center gap-10 border border-gray-300 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow'>
				<div className='flex-1 flex flex-col gap-4'>
					<h3 className='text-xl font-semibold text-gray-900'>
						Advisory & Strategy
					</h3>
					<p className='text-gray-600 leading-relaxed'>
						We provide actionable audits and strategic guidance to
						optimize supply chains and drive operational excellence.
					</p>

					<ul className='flex flex-col gap-3 text-primary-blue font-medium'>
						<li className='flex items-center gap-3'>
							<Icon icon='icon-park-solid:check-one' /> Audits
						</li>
						<li className='flex items-center gap-3'>
							<Icon icon='icon-park-solid:check-one' /> Supply Chain
							Design
						</li>
						<li className='flex items-center gap-3'>
							<Icon icon='icon-park-solid:check-one' /> Global
							Expansion
						</li>
					</ul>
				</div>

				<div className='flex-1 flex justify-center'>
					<Image
						alt='advisory'
						src={advise}
						className='rounded-lg object-contain'
					/>
				</div>
			</div>
		</div>
	);
};
export default Services;

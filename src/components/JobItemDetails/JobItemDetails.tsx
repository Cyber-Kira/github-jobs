import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'

export const JobItemDetails = () => {
	window.scrollTo({
		top: 0,
	})

	const { id } = useParams()
	const { jobs } = useAppSelector(store => store.craigslist)

	const currentJob = jobs.jobs.find(
		item => item.detail_url.replaceAll('/', '') === id
	)

	if (!currentJob) {
		return null
	}

	const date = new Date(currentJob.date_posted)

	const ImageNotFound = (
		<div className='grid place-items-center rounded-primary bg-gray min-w-[2.625rem] min-h-[2.625rem] max-w-[2.625rem] max-h-[2.625rem]'>
			<span className='font-roboto font-medium text-base leading-[.875rem] text-[#292929]' />
		</div>
	)

	return (
		<section className='grid lg:grid-cols-12 gap-[77px]'>
			<div className='lg:col-span-3'>
				<Link to='/' className='flex items-center gap-[15px] text-accent'>
					<span className='material-icons text-lg'>keyboard_backspace</span>
					<p className='font-poppins font-medium text-sm'>Back to search</p>
				</Link>
				<div className='mt-9'>
					<p className='font-poppins font-bold text-sm uppercase text-gray'>
						How to apply
					</p>
					<p className='font-poppins font-medium text-sm text-primary mt-4'>
						Please email a copy of your resume and online portfolio to
						wes@kasisto.com & CC eric@kasisto.com
					</p>
				</div>
			</div>
			<div className='lg:col-span-9'>
				<div>
					<div className='flex items-center gap-4'>
						<h1 className='font-roboto font-bold text-2xl leading-[1.75rem] text-primary max-w-[80%]'>
							{currentJob?.title}
						</h1>
					</div>
					<div className='mt-1'>
						<span className='flex items-center gap-[8.5008px] font-roboto font-medium text-xs leading-[.875rem] text-gray'>
							<span className='material-icons text-gray text-[.9375rem]'>
								schedule
							</span>
							{String(date).slice(0, 15)}
						</span>
					</div>
				</div>
				<div className='flex gap-3 mt-8'>
					{ImageNotFound}
					<div className='flex flex-col justify-between'>
						<span className='flex items-center gap-[7.5008px] font-roboto font-medium text-xs leading-[.75rem] text-gray'>
							<span className='material-icons text-gray text-[.9375rem]'>
								public
							</span>
							{currentJob?.location}
						</span>
					</div>
				</div>
				<div className='mt-8'>
					<pre className='whitespace-pre-line font-roboto font-normal text-base leading-[1.5rem] text-primary'>
						{currentJob?.description}
					</pre>
				</div>
			</div>
		</section>
	)
}

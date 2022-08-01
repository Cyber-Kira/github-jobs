/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { checkString } from '../../lib/utils'

export interface JobItemInterface {
	id: string
	title: string
	location: string
	publishedDate: string
}

export const JobItem = ({
	id,
	title,
	location,
	publishedDate,
}: JobItemInterface) => {
	const ImageNotFound = (
		<div className='grid place-items-center rounded-primary bg-gray min-w-[5.625rem] min-h-[5.625rem]'>
			<span className='font-roboto font-medium text-2xl leading-[14px] text-[#292929]' />
		</div>
	)

	function getDateXDaysAgo(date: Date, currentDate = new Date()) {
		const daysAgo = new Date(date.getTime())

		daysAgo.setDate(currentDate.getDate() - date.getDate())

		return daysAgo.getDate()
	}

	const date = new Date(publishedDate)

	const publishedDateElement = (
		<div className='mr-[2.4375rem] md:mr-0'>
			<span className='flex items-center gap-[.4688rem] font-roboto font-medium text-xs leading-[14px] text-gray'>
				<span className='material-icons text-gray text-[15px]'>schedule</span>
				{String(getDateXDaysAgo(date))} days ago
			</span>
		</div>
	)

	return (
		<Link
			to={`/job/${id.replaceAll('/', '')}`}
			type='button'
			className='md:flex justify-between items-end w-full bg-white rounded-primary shadow p-3 hover:shadow-md transition-shadow'
		>
			<div className='flex gap-4 mb-[.9375rem] md:mb-0 basis-full items-center'>
				{ImageNotFound}
				<div className='flex flex-col items-start'>
					<span className='font-roboto font-bold text-xs leading-[14px] text-primary mb-2' />
					<p className='font-roboto font-normal text-base leading-[19px] text-primary text-start mb-[.875rem]'>
						{title}
					</p>
				</div>
			</div>
			<div className='flex gap-[1.7813rem] basis-5/6'>
				<div className='ml-auto'>
					<span className='flex items-center gap-[.4688rem] font-roboto font-medium text-xs leading-[14px] text-gray'>
						<span className='material-icons text-gray text-[.9375rem]'>
							public
						</span>
						{location}
					</span>
				</div>
				{publishedDate ? publishedDateElement : null}
			</div>
		</Link>
	)
}

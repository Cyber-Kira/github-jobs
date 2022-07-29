/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { checkString } from '../../lib/utils'

export interface JobItemInterface {
	id: string
	image?: string
	employer: string
	title: string
	type?: string
	location: string
	publishedDate: string
}

export const JobItem = ({
	id,
	image,
	employer,
	title,
	type,
	location,
	publishedDate,
}: JobItemInterface) => {
	const ImageNotFound = (
		<div className='grid place-items-center rounded-primary bg-gray min-w-[5.625rem] min-h-[5.625rem]'>
			<span className='font-roboto font-medium text-2xl leading-[14px] text-[#292929]'>
				{employer
					.split(' ')
					.map(word => {
						if (!checkString(word)) {
							return word[0]
						}
						return null
					})
					.join('')}
			</span>
		</div>
	)

	const publishedDateElement = (
		<div className='mr-[2.4375rem] md:mr-0'>
			<span className='flex items-center gap-[.4688rem] font-roboto font-medium text-xs leading-[14px] text-gray'>
				<span className='material-icons text-gray text-[15px]'>schedule</span>
				{publishedDate}
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
				{image ? (
					<img
						className='min-w-[5.625rem] min-h-[5.625rem] max-w-[5.625rem] max-h-[5.625rem] object-contain'
						src={image}
						alt={employer}
					/>
				) : (
					ImageNotFound
				)}
				<div className='flex flex-col items-start'>
					<span className='font-roboto font-bold text-xs leading-[14px] text-primary mb-2'>
						{employer}
					</span>
					<p className='font-roboto font-normal text-base leading-[19px] text-primary text-start mb-[.875rem]'>
						{title}
					</p>
					<div>
						{type ? (
							<span className='font-roboto font-bold text-xs leading-[14px] text-primary py-[.375rem] px-[8px] border-[1px] border-primary rounded-primary'>
								{type}
							</span>
						) : null}
					</div>
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

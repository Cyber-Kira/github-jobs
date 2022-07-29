import React from 'react'

export const JobItemSkeleton = () => {
	return (
		<div className='md:flex justify-between items-end w-full bg-white rounded-primary shadow p-3'>
			<div className='flex gap-4 mb-[.9375rem] md:mb-0 basis-full items-center animate-pulse'>
				<div className='grid place-items-center rounded-primary bg-gray min-w-[5.625rem] min-h-[5.625rem]' />
				<div className='flex flex-col w-full gap-3'>
					<div className='w-1/2 h-5 bg-gray rounded-full' />
					<div className='w-3/4 h-5 bg-gray rounded-full' />
					<div>
						<div className='w-1/4 h-5 bg-gray rounded-full' />
					</div>
				</div>
			</div>
			<div className='flex gap-[1.7813rem] basis-5/6 animate-pulse'>
				<div className='ml-auto'>
					<div className='flex items-center gap-[.4688rem] font-roboto font-medium text-xs leading-[14px] text-gray w-full'>
						<div className='w-20 h-5 bg-gray rounded-full' />
					</div>
				</div>
				<div className='mr-[2.4375rem] md:mr-0'>
					<div className='flex items-center gap-[.4688rem] font-roboto font-medium text-xs leading-[14px] text-gray w-full'>
						<div className='w-20 h-5 bg-gray rounded-full' />
					</div>
				</div>
			</div>
		</div>
	)
}

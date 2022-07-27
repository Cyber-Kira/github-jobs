import React from 'react'
import { Search } from './components'

export const Location = () => {
	return (
		<div className='flex flex-col gap-5'>
			<span className='font-poppins font-bold text-sm uppercase text-gray'>
				Location
			</span>
			<Search />
			<div className='flex flex-col gap-[.9375rem] ml-[.875rem]'>
				<label
					className='relative cursor-pointer font-poppins font-medium text-sm text-primary flex items-center gap-[.7813rem]'
					htmlFor='city1'
				>
					<input
						className='appearance-none cursor-pointer w-[1.125rem] h-[1.125rem] border-[1px] border-gray checked:border-accent rounded-full peer'
						type='radio'
						id='city1'
						name='city'
						value='London'
					/>
					<div className='absolute w-[.75rem] h-[.75rem] left-[3px] top-[4px] rounded-full peer-checked:bg-accent scale-75 peer-checked:scale-100 transition-colors' />
					London
				</label>

				<label
					className='relative cursor-pointer font-poppins font-medium text-sm text-primary flex items-center gap-[.7813rem]'
					htmlFor='city2'
				>
					<input
						className='appearance-none cursor-pointer w-[1.125rem] h-[1.125rem] border-[1px] border-gray checked:border-accent rounded-full peer'
						type='radio'
						id='city2'
						name='city'
						value='Amsterdam'
					/>
					<div className='absolute w-[.75rem] h-[.75rem] left-[3px] top-[4px] rounded-full peer-checked:bg-accent scale-75 peer-checked:scale-100 transition-colors' />
					Amsterdam
				</label>
				<label
					className='relative cursor-pointer font-poppins font-medium text-sm text-primary flex items-center gap-[.7813rem]'
					htmlFor='city3'
				>
					<input
						className='appearance-none cursor-pointer w-[1.125rem] h-[1.125rem] border-[1px] border-gray checked:border-accent rounded-full peer'
						type='radio'
						id='city3'
						name='city'
						value='New York'
					/>
					<div className='absolute w-[.75rem] h-[.75rem] left-[3px] top-[4px] rounded-full peer-checked:bg-accent scale-75 peer-checked:scale-100 transition-colors' />
					New York
				</label>
				<label
					className='relative cursor-pointer font-poppins font-medium text-sm text-primary flex items-center gap-[.7813rem]'
					htmlFor='city4'
				>
					<input
						className='appearance-none cursor-pointer w-[1.125rem] h-[1.125rem] border-[1px] border-gray checked:border-accent rounded-full peer'
						type='radio'
						id='city4'
						name='city'
						value='Berlin'
					/>
					<div className='absolute w-[.75rem] h-[.75rem] left-[3px] top-[4px] rounded-full peer-checked:bg-accent scale-75 peer-checked:scale-100 transition-colors' />
					Berlin
				</label>
			</div>
		</div>
	)
}

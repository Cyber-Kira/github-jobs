import React from 'react'
import Image from './assets/backgroundImg.png'

export const Search = () => {
	return (
		<section>
			<div
				className='px-[1.125rem] py-10 bg-gray bg-top bg-no-repeat bg-cover rounded-lg shadow-neutral'
				style={{ backgroundImage: `url(${Image})` }}
			>
				<div className='flex items-center justify-between w-full h-[60px] bg-white rounded-primary'>
					<label
						className='relative flex items-center w-full h-full'
						htmlFor='job-search'
					>
						<span className='material-icons absolute text-gray z-10 ml-[1.0938rem] text-[15px]'>
							work_outline
						</span>
						<input
							className='font-roboto font-normal text-xs leading-[14px] placeholder:text-gray text-primary absolute inset-0 pl-[42px] truncate rounded-primary outline-none'
							type='text'
							name='job-search'
							placeholder='Title, companies, expertise or benefits'
						/>
					</label>
					<div className='py-1 px-[5px] ml-4'>
						<button
							className='font-roboto font-medium text-base leading-[19px] text-white px-[1.6875rem] py-[.875rem] bg-accent rounded-primary select-none outline-none hover:bg-opacity-90 focus:outline focus:outline-offset-2 focus:outline-accent transition-all'
							type='button'
						>
							Search
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

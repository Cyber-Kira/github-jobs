import React from 'react'

export const Search = () => {
	return (
		<div>
			<label
				className='relative flex items-center w-full h-[3rem] shadow hover:shadow-md transition-shadow'
				htmlFor='locationSearch'
			>
				<span className='material-icons absolute text-gray z-10 ml-[.875rem] text-[.9375rem]'>
					public
				</span>
				<input
					className='font-roboto font-normal text-xs leading-[14px] placeholder:text-gray text-primary absolute inset-0 pl-[45px] truncate rounded-primary outline-none'
					type='text'
					name='locationSearch'
					id='locationSearch'
					placeholder='City, state, zip code or country'
				/>
			</label>
		</div>
	)
}

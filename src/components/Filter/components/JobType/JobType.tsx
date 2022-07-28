import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setIsFullTime } from '../../../../features/search/searchSlice'

export const JobType = () => {
	const dispatch = useAppDispatch()
	const { isFullTime } = useAppSelector(store => store.search)

	return (
		<div className='ml-[.875rem]'>
			<label
				className='relative flex items-center gap-3 cursor-pointer'
				htmlFor='jobType'
			>
				<input
					className='appearance-none w-[18px] h-[18px] border-[1px] rounded-sm border-gray checked:bg-accent checked:border-accent peer transition-colors'
					type='checkbox'
					name='jobType'
					id='jobType'
					checked={isFullTime}
					onChange={() => dispatch(setIsFullTime())}
				/>
				<span className='material-icons absolute left-[2px] -top-[1px] text-sm hidden peer-checked:text-white peer-checked:block pointer-events-none transition-all'>
					done
				</span>
				<span className='font-poppins font-medium text-sm leading-[18px] text-primary select-none'>
					Full time
				</span>
			</label>
		</div>
	)
}

import React from 'react'
import { JobType } from './components/JobType'
import { Location } from './components/Location'

export const Filter = () => {
	return (
		<section className='flex flex-col gap-8'>
			<JobType />
			<Location />
		</section>
	)
}

import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { JobItemInterface } from '../JobItem/JobItem'
import { Pagination } from '../Pagination'

	if (!jobs.jobs_results && !isLoading) {
		return (
			<div className='w-full text-center font-raleway flex flex-col gap-5 text-2xl text-lightestGray'>
				<span className='material-icons text-[100px]'>warning</span>
				<p>No results found.</p>
				<p>Try adjusting your search to find your jobs.</p>
			</div>
		)
	}

export const JobItems = () => {
	const { jobs } = useAppSelector(store => store.googleJobs)

	return <Pagination projects={jobs.jobs_results} itemsPerPage={5} />
}

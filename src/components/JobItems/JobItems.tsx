import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { JobItemSkeleton } from '../JobItem/components/JobItemsSkeleton'
import { Pagination } from '../Pagination'

export const JobItems = () => {
	const { jobs, isLoading } = useAppSelector(store => store.googleJobs)

	if (!jobs.jobs_results && !isLoading) {
		return (
			<div className='w-full text-center font-raleway flex flex-col gap-5 text-2xl text-lightestGray'>
				<span className='material-icons text-[100px]'>warning</span>
				<p>No results found.</p>
				<p>Try adjusting your search to find your jobs.</p>
			</div>
		)
	}

	const skeletonElements = Array.from(Array(5).keys()).map(item => {
		return <JobItemSkeleton key={item} />
	})

	if (isLoading) {
		return <div className='flex flex-col gap-8'>{skeletonElements}</div>
	}

	return <Pagination projects={jobs.jobs_results} itemsPerPage={5} />
}

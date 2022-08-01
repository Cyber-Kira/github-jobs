import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useAppSelector } from '../../app/hooks'
import {
	JobResulInterface,
	JobsResultInterface,
} from '../../features/jobs/craigslistSlice'
import { JobItem } from '../JobItem'
import { JobItemSkeleton } from '../JobItem/components/JobItemsSkeleton'

const Items = ({ currentItems }: { currentItems: JobsResultInterface[] }) => {
	const { isLoading } = useAppSelector(store => store.googleJobs)
	const skeletonElements = Array.from(Array(5).keys()).map(item => {
		return <JobItemSkeleton key={item} />
	})

	if (isLoading) {
		return <div className='flex flex-col gap-8'>{skeletonElements}</div>
	}

	return (
		<div className='flex flex-col gap-8'>
			{currentItems &&
				currentItems.map(item => {
					return (
						<JobItem
							key={item.detail_url}
							id={item.detail_url}
							location={item.location}
							publishedDate={item.date_posted}
							title={item.title}
						/>
					)
				})}
		</div>
	)
}

export const Pagination = ({
	itemsPerPage,
	projects,
}: {
	itemsPerPage: number
	projects: JobResulInterface
}) => {
	if (!projects || projects.jobs.length === 0) {
		return null
	}

	const [currentItems, setCurrentItems] = useState<JobsResultInterface[]>([])
	const [pageCount, setPageCount] = useState(0)
	const [itemOffset, setItemOffset] = useState(0)

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage
		setCurrentItems(projects.jobs.slice(itemOffset, endOffset))
		setPageCount(Math.ceil(projects.jobs.length / itemsPerPage))
	}, [itemOffset, itemsPerPage, projects])

	const handlePageClick = (event: { selected: number }) => {
		const newOffset = (event.selected * itemsPerPage) % projects.jobs.length
		const top = document.getElementById('jobs')?.offsetTop

		setItemOffset(newOffset)

		if (top)
			window.scrollTo({
				top: top - 20,
				behavior: 'smooth',
			})
	}

	return (
		<section>
			<Items currentItems={currentItems} />
			<ReactPaginate
				breakLabel={<span className='material-icons'>more_horiz</span>}
				breakClassName='w-[2.25rem] h-[2.25rem] flex items-center justify-center'
				breakLinkClassName='font-roboto text-[22px] text-dark-200 flex items-center justify-center select-none'
				nextLabel={<span className='material-icons'>chevron_right</span>}
				nextClassName='border border-dark-200 hover:border-accent hover:text-accent dark:hover:text-accent dark:hover:border-accent dark:border-neutral-200 rounded-[.25rem] w-[2.25rem] h-[2.25rem] transition-colors'
				nextLinkClassName='font-roboto text-[.75rem] leading-[.875rem] font-normal w-full h-full flex items-center justify-center select-none'
				previousLabel={<span className='material-icons'>chevron_left</span>}
				previousClassName='border border-dark-200 hover:border-accent hover:text-accent dark:hover:text-accent dark:hover:border-accent dark:border-neutral-200 dark:text-neutral-200 rounded-[.25rem] w-[2.25rem] h-[2.25rem] transition-colors'
				previousLinkClassName='font-roboto text-[.75rem] leading-[.875rem] font-normal w-full h-full flex items-center justify-center select-none'
				activeClassName='border-accent dark:border-accent'
				activeLinkClassName='bg-accent text-white'
				pageClassName='border border-dark-200 dark:border-neutral-200 dark:text-neutral-200 rounded-[4px] w-[2.25rem] h-[2.25rem] hover:border-accent dark:hover:border-accent dark:hover:text-accent hover:text-accent transition-colors'
				pageLinkClassName='font-roboto text-[.75rem] leading-[.875rem] font-normal w-full h-full flex items-center justify-center select-none'
				containerClassName='flex gap-4 justify-end mt-[2rem]'
				onPageChange={handlePageClick}
				pageCount={pageCount}
				pageRangeDisplayed={2}
				marginPagesDisplayed={2}
			/>
		</section>
	)
}

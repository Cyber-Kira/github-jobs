import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { JobItem, JobItemInterface } from '../JobItem'

const Items = ({ currentItems }: { currentItems: JobItemInterface[] }) => {
	return (
		<div className='flex flex-col gap-8'>
			{currentItems &&
				currentItems.map(item => {
					return (
						<JobItem
							key={item.id}
							image={item.image}
							description={item.description}
							employer={item.employer}
							location={item.location}
							publishedDate={item.publishedDate}
							title={item.title}
							type={item.type}
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
	projects: JobItemInterface[]
}) => {
	const [currentItems, setCurrentItems] = useState<JobItemInterface[]>([])
	const [pageCount, setPageCount] = useState(0)
	const [itemOffset, setItemOffset] = useState(0)

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage
		setCurrentItems(projects.slice(itemOffset, endOffset))
		setPageCount(Math.ceil(projects.length / itemsPerPage))
	}, [itemOffset, itemsPerPage, projects])

	const handlePageClick = (event: { selected: number }) => {
		const newOffset = (event.selected * itemsPerPage) % projects.length
		const top = document.getElementById('Projects')?.offsetTop

		setItemOffset(newOffset)

		// Not DRY : Layout, line 293
		// TODO: create helper function
		if (top)
			window.scrollTo({
				top,
				behavior: 'smooth',
			})
	}

	return (
		<>
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
		</>
	)
}

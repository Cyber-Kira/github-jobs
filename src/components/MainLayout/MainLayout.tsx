import React from 'react'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import { Filter } from '../Filter'
import { JobItems } from '../JobItems'
import { Search } from '../Search'

export const MainLayout = () => {
	return (
		<main className='flex flex-col gap-8'>
			<Search />
			<div className='grid grid-cols-1 gap-8 md:grid-cols-12'>
				<div className='md:col-span-4'>
					<Filter />
				</div>
				<div className='md:col-span-8'>
					<div id='jobs' />
					<ErrorBoundary>
						<JobItems />
					</ErrorBoundary>
				</div>
			</div>
		</main>
	)
}

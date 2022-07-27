import React from 'react'
import { FIlter } from '../Filter'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { JobItems } from '../JobItems'
import { Pagination } from '../Pagination'
import { Search } from '../Search'

export const App = () => {
	return (
		<div className='max-w-5xl mx-auto'>
			<Header />
			<Search />
			<div className='grid grid-cols-12'>
				<div className='col-span-4'>
					<FIlter />
				</div>
				<div className='col-span-8'>
					<JobItems />
				</div>
				<Pagination />
			</div>
			<Footer />
		</div>
	)
}

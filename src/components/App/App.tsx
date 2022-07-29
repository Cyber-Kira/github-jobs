import React from 'react'
import { Filter } from '../Filter'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { JobItems } from '../JobItems'
import { Search } from '../Search'

export const App = () => {
	return (
		<div className='max-w-5xl md:mx-auto flex flex-col gap-8 px-3 md:px-0'>
			<Header />
			<Search />
			<div className='grid grid-cols-1 gap-8 md:grid-cols-12'>
				<div className='md:col-span-4'>
					<Filter />
				</div>
				<div className='md:col-span-8'>
						<div id='jobs' />
				</div>
			</div>
			<Footer />
		</div>
	)
}

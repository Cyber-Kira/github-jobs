import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { JobItemDetails } from '../JobItemDetails'
import { MainLayout } from '../MainLayout'

export const App = () => {
	return (
		<div className='max-w-5xl md:mx-auto flex flex-col gap-8 px-3 md:px-0'>
			<Header />
			<Routes>
				<Route path='/' element={<MainLayout />} />
				<Route path='/job/:id' element={<JobItemDetails />} />
			</Routes>
			<Footer />
		</div>
	)
}

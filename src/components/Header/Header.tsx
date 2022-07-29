import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
	return (
		<header className='mt-3'>
			<Link
				to='/'
				className='font-poppins font-light text-2xl text-dark leading-[36px]'
			>
				<span className='font-bold'>Github</span> Jobs
			</Link>
		</header>
	)
}

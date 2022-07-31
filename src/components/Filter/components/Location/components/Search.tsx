/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks'
import {
	fetchLocationsByQuery,
	setLocationQuery,
} from '../../../../../features/search/searchSlice'

export const Search = () => {
	const { locationQuery, locations } = useAppSelector(store => store.search)
	const [searchTerm, setSearchTerm] = useState<string | null>(null)
	const [isInFocus, setIsInFocus] = useState(false)
	const dispatch = useAppDispatch()
	let currentFocus = -1

	const handleChange = (query: string) => {
		dispatch(setLocationQuery(query))
		setSearchTerm(query)
	}

	const removeActive = (searchItems: NodeListOf<Element>) => {
		searchItems.forEach(item => item.classList.remove('text-white'))
		searchItems.forEach(item => item.classList.remove('bg-primary'))
	}

	const addActive = (
		elements: HTMLCollectionOf<HTMLButtonElement> | undefined
	) => {
		const searchItems = document.querySelectorAll('.search-item')

		removeActive(searchItems)

		if (currentFocus >= searchItems.length) {
			currentFocus = 0
		}

		if (currentFocus < 0) {
			currentFocus = searchItems.length - 1
		}

		if (elements) {
			elements[currentFocus].classList.add('text-white')
			elements[currentFocus].classList.add('bg-primary')
		}
	}

	const handleClick = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		query: string
	) => {
		setSearchTerm(query)
		dispatch(setLocationQuery(query))
		dispatch(fetchLocationsByQuery(null))

		setIsInFocus(false)
	}

	const handleBlur = () => {
		if (!isInFocus) setIsInFocus(true)
	}

	const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		const currentElements = document
			.getElementById('search-items')
			?.getElementsByTagName('button')

		if (e.key === 'ArrowDown') {
			e.preventDefault()
			currentFocus += 1
			addActive(currentElements)
		} else if (e.key === 'ArrowUp') {
			e.preventDefault()
			currentFocus -= 1
			addActive(currentElements)
		} else if (e.key === 'Enter') {
			e.preventDefault()
			if (currentFocus > -1) {
				if (document.getElementById(`${currentFocus}`)) {
					document.getElementById(`${currentFocus}`)?.click()
					currentFocus = -1
					removeActive(document.querySelectorAll('.search-item'))
				}
			}
		}
	}

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			if (searchTerm) {
				dispatch(fetchLocationsByQuery(searchTerm))
			} else {
				dispatch(fetchLocationsByQuery(null))
			}
		}, 450)

		return () => clearTimeout(delayDebounceFn)
	}, [searchTerm])

	return (
		<div className='relative flex items-center w-full h-[3rem] z-20 shadow hover:shadow-md transition-shadow'>
			<label htmlFor='locationSearch'>
				<span className='material-icons absolute top-1/2 -translate-y-1/2 cursor-text select-none text-gray z-10 ml-[.875rem] text-[.9375rem]'>
					public
				</span>
				<p className='w-0 opacity-0'>Locations search</p>
			</label>
			<div className='relative w-full h-full'>
				<input
					className='font-roboto font-normal text-xs leading-[14px] placeholder:text-gray text-primary absolute inset-0 pl-[45px] truncate rounded-primary outline-none'
					type='text'
					name='locationSearch'
					id='locationSearch'
					autoComplete='off'
					list='omdb'
					placeholder='City, state, zip code or country'
					value={locationQuery}
					onChange={e => handleChange(e.target.value)}
					onKeyDown={e => handleKeyDown(e)}
					onFocus={() => {
						setIsInFocus(true)
						dispatch(fetchLocationsByQuery(searchTerm))
					}}
					onBlur={() => handleBlur()}
				/>
				{isInFocus ? (
					<div
						id='search-items'
						className='absolute flex flex-col z-30 top-full left-0 right-0 border-l-[1px] border-r-[1px] border-gray max-h-64 overflow-y-auto border-t'
					>
						{locations?.map((location, idx) => {
							return (
								<button
									key={location.id}
									id={String(idx)}
									type='button'
									className={`search-item text-primary font-poppins text-base py-3 px-4 border-b-[1px] border-gray text-start hover:bg-primary hover:text-white transition-colors ${
										(idx + 1) % 2 === 0 ? 'bg-light' : 'bg-white'
									}`}
									onClick={e => handleClick(e, location.name)}
								>
									{location.name}
								</button>
							)
						})}
					</div>
				) : null}
			</div>
		</div>
	)
}

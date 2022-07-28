import { createSlice } from '@reduxjs/toolkit'

interface InitialStateInterface {
	searchQuery: string
	locationQuery: string
	favLocation?: string
	isFullTime: boolean
}

const initialState: InitialStateInterface = {
	searchQuery: '',
	locationQuery: '',
	favLocation: '',
	isFullTime: false,
}

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearchQuery: (state, { payload }) => {
			state.searchQuery = payload
		},
		setFavLocation: (state, { payload }) => {
			state.favLocation = payload
		},
		setLocationQuery: (state, { payload }) => {
			state.favLocation = undefined
			state.locationQuery = payload
		},
		setIsFullTime: state => {
			state.isFullTime = !state.isFullTime
		},
	},
})

export const {
	setSearchQuery,
	setFavLocation,
	setLocationQuery,
	setIsFullTime,
} = searchSlice.actions

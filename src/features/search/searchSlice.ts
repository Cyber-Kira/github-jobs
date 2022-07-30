import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchLocations } from '../../lib/api/GoogleJobs'

interface InitialStateInterface {
	searchQuery: string
	locationQuery: string
	favLocation?: string
	isFullTime: boolean
	locations:
		| [
				{
					id: string
					canonical_name: string
					name: string
				}
		  ]
		| null
}

const initialState: InitialStateInterface = {
	searchQuery: '',
	locationQuery: '',
	favLocation: '',
	isFullTime: false,
	locations: null,
}

export const fetchLocationsByQuery = createAsyncThunk(
	'search/fetchLocations',
	async (query: string | null) => {
		if (query === null) {
			return null
		}

		const locations = fetchLocations(query)
		return locations
	}
)

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
	extraReducers: builder =>
		builder.addCase(fetchLocationsByQuery.fulfilled, (state, { payload }) => {
			state.locations = payload
		}),
})

export const {
	setSearchQuery,
	setFavLocation,
	setLocationQuery,
	setIsFullTime,
} = searchSlice.actions

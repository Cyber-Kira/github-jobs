import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchCraigslist } from '../../lib/api/Craigslist'

export interface JobsResultInterface {
	detail_url: string
	title: string
	date_posted: string
	location: string
	description: string
}

export interface JobResulInterface {
	date: string
	jobs: JobsResultInterface[]
}

interface InitialStateInterface {
	isLoading: boolean
	jobs: JobResulInterface
}

const initialState: InitialStateInterface = {
	isLoading: false,
	jobs: { date: '', jobs: [] },
}

export const fetchCraigslistJobs = createAsyncThunk(
	'jobs/fetchCraigslist',
	async ({
		searchQuery,
		searchLocationQuery,
	}: {
		searchQuery: string
		searchLocationQuery: string
	}) => {
		const data = await fetchCraigslist<JobResulInterface>(
			searchQuery,
			searchLocationQuery.length === 0 ? 'sfbay' : ''
		)

		return data
	}
)

export const craigslistSlice = createSlice({
	name: 'jobs',
	initialState,
	reducers: {},
	extraReducers: builder =>
		builder
			.addCase(fetchCraigslistJobs.pending, state => {
				state.isLoading = true
			})
			.addCase(fetchCraigslistJobs.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.jobs = payload
			})
			.addCase(fetchCraigslistJobs.rejected, state => {
				state.isLoading = false
			}),
})

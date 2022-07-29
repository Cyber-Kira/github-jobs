import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchJobsByQuery } from '../../lib/api/GoogleJobs'

export interface JobsResultInterface {
	job_id: string
	title: string
	company_name: string
	location: string
	description: string
	thumbnail?: string
	detected_extensions: {
		posted_at: string
		schedule_type?: string
	}
	extensions?: string[]
}

export interface JobsInterface {
	jobs_results: JobsResultInterface[]
}

interface InitialStateInterface {
	isLoading: boolean
	jobs: JobsInterface
}

const initialState: InitialStateInterface = {
	isLoading: false,
	jobs: {
		jobs_results: [],
	},
}

export const fetchGoogleJobs = createAsyncThunk(
	'jobs/fetchGoogleJobs',
	async ({
		searchQuery,
		favLocation,
		searchLocationQuery,
		isFullTime,
	}: {
		searchQuery: string
		favLocation?: string
		searchLocationQuery?: string
		isFullTime: boolean
	}) => {
		const data = await fetchJobsByQuery<JobsInterface>(
			searchQuery,
			isFullTime,
			favLocation ?? searchLocationQuery
		)

		return data
	}
)

export const googleJobsSlice = createSlice({
	name: 'jobs',
	initialState,
	reducers: {},
	extraReducers: builder =>
		builder
			.addCase(fetchGoogleJobs.pending, state => {
				state.isLoading = true
			})
			.addCase(fetchGoogleJobs.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.jobs = payload
			})
			.addCase(fetchGoogleJobs.rejected, state => {
				state.isLoading = false
			}),
})

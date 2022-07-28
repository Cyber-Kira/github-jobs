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
		jobs_results: [
			{
				title: 'Juice Bar Barista',
				company_name: 'Padel Haus',
				location: 'Brooklyn, NY',
				description: `Description
        Padel Haus (the first and only padel tennis club in NYC) is seeking 3 juice bar baristas to assist the Manager of the juice bar with its daily operation. Baristas will be tasked with ensuring a high quality of service as well as increased customer engagement. They will be accountable for the preparation of menu items and general administrative duties as delegated by the juice bar... manager`,
				thumbnail:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmwco8qIaJLVVvYkToywALmU5TAreQ0p7ulaV91Dw&s',
				extensions: ['2 days ago', 'Part-time', 'No degree mentioned'],
				detected_extensions: {
					posted_at: '2 days ago',
					schedule_type: 'Part-time',
				},
				job_id:
					'eyJqb2JfdGl0bGUiOiJKdWljZSBCYXIgQmFyaXN0YSIsImh0aWRvY2lkIjoiQy1uOHMtU3dPV1lBQUFBQUFBQUFBQT09IiwiaGwiOiJlbiIsImZjIjoiRXVJQkNxSUJRVUYwVm14aVExQkZUMnRSTmxnMVJtSkZabXQyWW1kekxVdEdaamM1U3pkNFQzbFZZa2xDVm1KdE5HVktVVkp5UldSVWVrNVhaR0ZmVmxCcWNYQjNTa0phUkV3dFgyaDNWRmd0WjBFellrbEdlVXRZUzIxVmEwbG1UVFpNZW1GVGFuRnVMVGxYT0dkNk9FeDZWamRrUjNONlZsQldSakJQU0U5Rk9UWk5iR3h3TjBjM2NtZEZkVXhNWVhWVFl6RjVlRmhFYTBSbGFtbEVUMTh3YkhWME9EWlJFaGN0ZUhKcFdYRm1TVVpOZFhVMVRtOVFkRGx0U1RCQlVSb2lRVVJWZVVWSFpYTjVObmxGWkRKdVVESkNSa0pDYkRoUlUyVlJSVzF3UVZselVRIiwiZmN2IjoiMyIsImZjX2lkIjoiZmNfNiIsImFwcGx5X2xpbmsiOnsidGl0bGUiOiJBcHBseSBkaXJlY3RseSBvbiBDdWxpbmFyeSBBZ2VudHMiLCJsaW5rIjoiaHR0cHM6Ly9jdWxpbmFyeWFnZW50cy5jb20vam9icy8zNzc3MjQtSnVpY2UtQmFyLUJhcmlzdGE/dXRtX2NhbXBhaWduPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX3NvdXJjZT1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9tZWRpdW09b3JnYW5pYyJ9fQ==',
			},
		],
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

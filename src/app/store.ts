import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { craigslistSlice } from '../features/jobs/craigslistSlice'
import { googleJobsSlice } from '../features/jobs/googleJobsSlice'
import { searchSlice } from '../features/search/searchSlice'

export const store = configureStore({
	reducer: {
		googleJobs: googleJobsSlice.reducer,
		search: searchSlice.reducer,
		craigslist: craigslistSlice.reducer,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>

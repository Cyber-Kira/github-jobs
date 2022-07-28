/* eslint-disable no-console */
import axios, { AxiosError, AxiosResponse } from 'axios'

const url = 'https://serpapi.com/search.json'
const corsApiHost = 'cors-anywhere.herokuapp.com'

export const fetchJobsByQuery = <T = any>(
	searchQuery: string,
	isFullTime: boolean,
	locationQuery?: string
): Promise<T> => {
	return axios
		.request({
			method: 'GET',
			url: `https://${corsApiHost}/${url}`,
			params: {
				engine: 'google_jobs',
				q: searchQuery,
				hl: 'en',
				location: locationQuery ?? null,
				chips: isFullTime ? `type: ${isFullTime ? 'FULLTIME' : ''}` : '',
				api_key: `${process.env.REACT_APP_GOOGLE_JOBS_API_KEY}`,
			},
		})
		.then((response: AxiosResponse<T>) => {
			const { data } = response
			console.log(data)
			return data
		})
		.catch((error: AxiosError) => {
			throw new Error(`error: ${error}`)
		})
}

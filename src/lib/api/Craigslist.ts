/* eslint-disable no-console */
import axios, { AxiosError, AxiosResponse } from 'axios'

const url = 'https://job-search4.p.rapidapi.com/craigslist/search'

export const fetchCraigslist = <T = any>(
	searchQuery: string,
	locationQuery: string
): Promise<T> => {
	return axios
		.request({
			method: 'GET',
			url,
			params: {
				query: searchQuery,
				region_id: locationQuery,
			},
			headers: {
				'X-RapidAPI-Key': 'b3a9939d20msh05dce97708c9291p153128jsnbf7fedc8c1c7',
				'X-RapidAPI-Host': 'job-search4.p.rapidapi.com',
			},
		})
		.then((response: AxiosResponse<T>) => {
			const { data } = response
			return data
		})
		.catch((error: AxiosError) => {
			throw new Error(`error: ${error}`)
		})
}

export const fetchLocations = () => {
	return axios
		.request({
			method: 'GET',
			url: `https://job-search4.p.rapidapi.com/craigslist/regions`,
		})
		.then((response: AxiosResponse) => {
			const { data } = response
			return data
		})
		.catch((error: AxiosError) => {
			throw new Error(`error: ${error}`)
		})
}

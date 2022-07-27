import React from 'react'
import { JobItem } from '../JobItem/JobItem'

export const JobItems = () => {
	return (
		<div>
			{[1, 2, 3, 4, 5].map(item => (
				<JobItem item={item} />
			))}
		</div>
	)
}

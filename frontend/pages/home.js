import AppContext from '../AppContext'
import React from 'react'

const home = ({}) => {
	const context = React.useContext(AppContext)

	const apiRes = context.response.home
	const information = apiRes ? home.data.attributes : []

	return (
		<div>
			{' '}
			{information && (
				<>
					<h1>{information.title}</h1>
					<h2>{information.subtitle}</h2>
					<p>{information.description}</p>
				</>
			)}
		</div>
	)
}

export default home

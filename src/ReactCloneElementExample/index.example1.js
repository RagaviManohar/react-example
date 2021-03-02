import React from 'react'
// import PropTypes from 'prop-types'

import CustomComp from './CustomComp'

export const ReactCloneElementExample1 = () => (
	<CustomComp>
		<button className="btn btn-transparent">
			<span>Login</span>
			<span>Login 1</span>
		</button>

		<div className="mx-2">
			<p>Submit</p>
			<p>
				<span>Forgot</span>
			</p>
			<span>Password</span>
		</div>

		<span>Register</span>
	</CustomComp>
)

ReactCloneElementExample1.propTypes = {}

export default ReactCloneElementExample1

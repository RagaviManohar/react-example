/**
 *
 * CustomComp
 *
 */

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'

const CustomComp = ({ children }) => {
	const obj = item => {
		if (get(item, 'props.children.type') === 'span') {
			const val = React.cloneElement(get(item, 'props.children'), {
				style: { color: 'red' }
			})

			return React.cloneElement(item, item.props, val)
		}
		return item
	}

	const fn = child => {
		if (Array.isArray(get(child, 'props.children'))) {
			const element = React.Children.map(child.props.children, fn)
			return React.cloneElement(child, child.props, ...element)
		}
		if (typeof get(child, 'props.children') === 'object') {
			return obj(child)
		}
		if (child.type === 'span') {
			return React.cloneElement(child, {
				style: { color: 'red' },
				...children
			})
		}
		return child
	}

	const items = React.Children.map(children, fn)

	console.log('items====', items)

	return items
}

CustomComp.propTypes = {
	children: PropTypes.node
}

export default memo(CustomComp)

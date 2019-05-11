import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './comment-item.css'

export default class CommentItem extends Component {

	static propTypes = {
		comment : PropTypes.object.isRequired,
		comId : PropTypes.number.isRequired,
		deleteCom : PropTypes.func.isRequired
	}

	handleDelete = () => {
		const {comId, deleteCom, comment} = this.props
		if(window.confirm(`Do you confirm to delete ${comment.name}'s comment ?`)){
			deleteCom(comId)
		}
	}

	render () {
		const {comment} = this.props
		return (
			<li className="list-group-item">
				<div className="handle">
					<a href="javascript:;" onClick={this.handleDelete}>Delete</a>
				</div>
				<p className="user"><span >{comment.name}</span><span> Said:</span></p>
				<p className="centence">" {comment.content} "</p>
			</li>
		)
	}
}
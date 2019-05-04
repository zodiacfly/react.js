import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentItem from '../comment-item/comment-item'

import './comment-list.css'

export default class CommentList extends Component {

	static propTypes = {
		comments : PropTypes.array.isRequired,
		deleteCom : PropTypes.func.isRequired
	}

	render () {
		const {comments, deleteCom} = this.props
		const display = comments.length === 0 ? 'block' : 'none'//show <h2> when this is no comment
		return (
			 <div className="col-md-8">
			      <h3 className="reply">Comments：</h3>
			      <h2 style={{display}}>No comments, please submit your comment!!</h2>
			      <ul className="list-group">
			      {                                                                       //send index to comment-itme.jsx
			      	comments.map((item, index) => <CommentItem key={index} comment={item} comId={index} deleteCom={deleteCom}/>)
			      }
			      </ul>	      
			 </div>
		)
	}
}
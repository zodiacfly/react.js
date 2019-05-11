import React, {Component} from 'react'
import PropTypes from 'prop-types'

import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'

export default class CommentMain extends Component {

	static propTypes = {
		addCom : PropTypes.func.isRequired,
		deleteCom : PropTypes.func.isRequired,
		comments : PropTypes.array.isRequired,
		newComment : PropTypes.object.isRequired,
		handleNewCom : PropTypes.func.isRequired
	}

	render () {
		
		const {comments, addCom, deleteCom, newComment, handleNewCom } = this.props
		
		return (
			<div>
			    <header className="site-header jumbotron">
			      <div className="container">
			        <div className="row">
			          <div className="col-xs-12">
			            <h1>Your comments</h1>
			          </div>
			        </div>
			      </div>
			    </header>
			    <div className="container">
			      <CommentAdd addCom={addCom} newComment={newComment} handleNewCom={handleNewCom}/>
			      <CommentList comments={comments} deleteCom={deleteCom}/>
			    </div>
 			 </div>
		)
	}
}

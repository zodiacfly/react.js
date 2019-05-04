import React, {Component} from 'react'

import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'

export default class App extends Component {
	state = {
		comments : [
			{name : 'Ren', content : 'React is the best'},
			{name : 'Daniel', content : 'React is easy to learn'},
			{name : 'Sharon', content : 'Hello world'}
		]
	}
//send addCom func to comment-add.jsx
	addCom = (newCom) => {
		let {comments} = this.state
		comments.unshift(newCom)
		this.setState({comments})
	}
//send deleteCom func to comment-item.jsx
	deleteCom = (index) => {
		let {comments} = this.state
		comments.splice(index, 1)
		this.setState({comments})
	}
	render () {
		const {comments} = this.state
		
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
			      <CommentAdd addCom={this.addCom}/>
			      <CommentList comments={comments} deleteCom={this.deleteCom}/>
			    </div>
 			 </div>
		)
	}
}
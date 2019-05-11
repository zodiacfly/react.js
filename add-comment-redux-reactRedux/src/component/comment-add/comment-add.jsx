import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class CommentAdd extends Component {

	static propTypes = {
		addCom : PropTypes.func.isRequired,
		newComment : PropTypes.object.isRequired,
		handleNewCom : PropTypes.func.isRequired
	}

	handleNameChange = (e) => {
		const {newComment, handleNewCom} = this.props
		newComment.name = e.target.value
		handleNewCom(newComment)
	}

	handleContentChange = (e) => {
		const {newComment, handleNewCom} = this.props
		newComment.content = e.target.value
		handleNewCom(newComment)
	}

	handleSubmit = () => {
	
		const {addCom, newComment, handleNewCom} = this.props
		if(!newComment.name.trim()){
			alert('Please enter you name')
		}
		if(!newComment.content.trim()){
			newComment.content = 'This user was too lazy to leave comment'
		}
		addCom(newComment)

		handleNewCom({name : '', content : ''})
	}

	handleKeyUp = (e) => {
		if(e.keyCode === 13) {
			this.handleSubmit()
		}
	}

	render () {
		const {newComment} = this.props
		return (
			<div className="col-md-4">
				<form className="form-horizontal">
					<div className="form-group">
						<label>User</label>
						<input type="text" className="form-control" placeholder="User name" 
						value={newComment.name} onChange={this.handleNameChange}/>
					</div>
					<div className="form-group">
						<label>Content</label>
						<textarea className="form-control" rows="6" placeholder="your comment" 
						value={newComment.content} onChange={this.handleContentChange} onKeyUp={this.handleKeyUp}></textarea>
					</div>
					<div className="form-group">
						<div className="col-sm-offset-2 col-sm-10">
							<button type="button" className="btn btn-default pull-right" onClick={this.handleSubmit}>Submit</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}
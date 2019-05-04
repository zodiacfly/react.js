import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class CommentAdd extends Component {

	static propTypes = {
		addCom : PropTypes.func.isRequired
	}
	state = {
		comment : {name : '', content : ''}
	}

	handleNameChange = (e) => {
		const {comment} = this.state
		comment.name = e.target.value.trim()
		this.setState({comment})
	}

	handleContentChange = (e) => {
		const {comment} = this.state
		comment.content = e.target.value.trim()
		this.setState({comment})
	}

	handleSubmit = () => {
		const {comment} = this.state
		const {addCom} = this.props
		if(!comment.name){
			alert('Please enter you name')
		}
		if(!comment.content){
			comment.content = 'This user was too lazy to leave comment'
		}
		addCom(comment)

		this.setState({
			comment : {name : '', content : ''}
		})
	}

	render () {
		const {comment} = this.state
		return (
			<div className="col-md-4">
				<form className="form-horizontal">
					<div className="form-group">
						<label>User</label>
						<input type="text" className="form-control" placeholder="User name" 
						value={comment.name} onChange={this.handleNameChange}/>
					</div>
					<div className="form-group">
						<label>Content</label>
						<textarea className="form-control" rows="6" placeholder="your comment" 
						value={comment.content} onChange={this.handleContentChange}></textarea>
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
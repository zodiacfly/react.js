import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import {deleteList, checkboxChecked} from '../redux/actions'

class Active extends Component {

	static propTypes = {
		deleteList : PropTypes.func.isRequired,
		todoList : PropTypes.array.isRequired,
		checkboxChecked : PropTypes.func.isRequired
	}

	// delete item	
	handleDeleteList = (id) => {
		const {deleteList} = this.props
		deleteList(id)
	}

	//check box tick
	handleCheckbox = (id) => {
		const {checkboxChecked} = this.props
		checkboxChecked(id)
	}
	
	render () {
		const {todoList} = this.props;
		const activeList = todoList.filter(item => item.checked === false)
		return (
			<ul>
				{
					activeList.map(item => (
							<li key={item.id}>
								<input type="checkbox" checked={item.checked} onChange={() => this.handleCheckbox(item.id)}/>
								<p style={{textDecoration : item.checked ? 'line-through' : 'none'}}>{item.content}</p>
								<button onClick={() => this.handleDeleteList(item.id)}>Delete</button>
							</li>
						))
				}
				
			</ul>
		)
	}
}

export default withRouter(connect(
	state => ({todoList : state.todoList}),
	 {deleteList, checkboxChecked}
)(Active))
import React, {Component} from 'react'
import {NavLink, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'

import Completed from '../view/main_completed'
import Active from '../view/main_active'
import All from '../view/main_all'

export default class Main extends Component {

	static propTypes = {
		clearCompletedList : PropTypes.func.isRequired,
		todoList : PropTypes.array.isRequired,
		selectAllList : PropTypes.func.isRequired
	}

// use refs to get input value and then send to reducer to get updated
	handleInputValue = (e) => {
		const {addNewList} = this.props
		const {input} = this.refs
		if(e.keyCode === 13 && input.value.trim()){
			addNewList(input.value)
			input.value = ''
		}
	}

// clear all completed list
	handleCompletedList = () => {
		const {clearCompletedList} = this.props
		clearCompletedList()
	}
//select all checkbox or unselect all checkbox
	handleSelectAll = () => {
		let total = 0
		const {todoList,selectAllList} = this.props
		todoList.forEach(item => {
			if(item.checked){
				total += 1
			}
		})
		if(todoList && todoList.length === total) {
			selectAllList(false)
		} else {
			selectAllList(true)
		}

	}

	render () {

		const {todoList} = this.props
		const remainList = todoList.filter(item => item.checked === false)
		const display = remainList.length === todoList.length ? 'none' : 'block'
		const s = remainList.length <= 1 ? '' : 's'
		
		return (
			<div className="container">
				<span title="select all" onClick={this.handleSelectAll}>O</span> 
				<input type="text" placeholder="what you want to do" autoFocus ref='input' onKeyUp={e => this.handleInputValue(e)}/>
				<Switch>
					  <Route exact path='/' component={All}/>
	                  <Route path='/active' component={Active}/>
	                  <Route path='/completed' component={Completed}/>
	                 
	            </Switch>
				<footer>
					<span className="left"><b>{remainList.length}</b> item{s} left</span>
					<ul>
						<li><NavLink exact activeClassName="selected" to='/'>All</NavLink></li>
						<li><NavLink activeClassName="selected" to='/active'>Active</NavLink></li>
						<li><NavLink activeClassName="selected" to='/completed'>Completed</NavLink></li>
					</ul>
					<span className="right" style={{display}} onClick={this.handleCompletedList}>clear completed</span>
				</footer>

			</div>
		)
	}
}
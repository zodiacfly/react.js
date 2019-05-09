import React, {Component} from 'react'
import {NavLink, Route} from 'react-router-dom'

import MessageInfo from './message-info'

export default class Message extends Component {
	state = {
		messageList : null,
		loading : true
	}

	componentDidMount () {
		if(!this.state.messageList){
				this.setState({
				loading : true
			})
		}
		setTimeout(() => {
			this.setState({
				messageList : [
					{id : 1, title : 'msg001'},
					{id : 2, title : 'msg002'},
					{id : 3, title : 'msg003'},
					{id : 4, title : 'msg004'}
				],
				loading : false
			})
		},1200)
	}

	render () {
		
		const {messageList, loading} = this.state
		const {path} = this.props.match
		if(messageList) {
			return (
				<div>
					<ul>
						{
							messageList.map((item, index) => (
							<li key={index}>
								<NavLink to={`${path}/message_${item.id}`}>{item.title}</NavLink>
							</li>
							))
						}
					</ul>
					<Route path={`${path}/message_:id`} component={MessageInfo}/>
				</div>
			)
		} else if(loading) {
			return <h2>Loading......</h2>
		}
	}
}
import React, {Component} from 'react'

export default class MassageInfo extends Component {
	state = {
		infoList : [
			
			{id : 1, content : 'hello world 001'},
			{id : 2, content : 'hello world 002'},
			{id : 3, content : 'hello world 003'},
			{id : 4, content : 'hello world 004'}
		]
	}
	render () {
		const {id} = this.props.match.params
		const result = this.state.infoList.find((item) => item.id === id*1)

		return (
			<div>
				<div>this is message {result.id}</div>
				<div>{result.content}</div>
			</div>
		)
	}
}
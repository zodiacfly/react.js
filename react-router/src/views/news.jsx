import React, {Component} from 'react'

export default class News extends Component {
	state = {
		newsList : ['national news', 'international news', 'sports', 'finance']
	}
	render () {
		const {newsList} = this.state
		return (
			<div>
				<ul>
					{
						newsList.map((item, index) => <li key={index}>{item}</li>)
					}
				</ul>
			</div>
		)
	}
}
import React, {Component} from 'react'

export default class UserItem extends Component {

	render () {
		const {searchResult} = this.props
		
		return (
			<div className="card">
		        <a href={searchResult.url} target="blank">
		          <img src={searchResult.src} alt="" style={{width: 100}}/>
		        </a>
		        <p className="card-text">{searchResult.name}</p>
		    </div>
		)
	}

	
}
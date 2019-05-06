import React, {Component} from 'react'
import PubSub from 'pubsub-js'

export default class UserSearch extends Component {
	state = {
		searchValue : ''
	}

	handleSearch = () => {
		PubSub.publish('searchValue', this.state.searchValue)
	}

	handleValueChange = (e) => {
		const searchValue = e.target.value.trim()
		if(searchValue) {
			this.setState({searchValue})
		}
		
	}

	render () {
		const {searchValue} = this.state
		return (
			<section className="jumbotron">
		      <h3 className="jumbotron-heading">Search Github Users</h3>
		      <div>
		        <input type="text" placeholder="enter the name you search" value={searchValue} onChange={this.handleValueChange}/>
		        <button onClick={this.handleSearch}>Search</button>
		      </div>
		    </section>
		)
	}
}
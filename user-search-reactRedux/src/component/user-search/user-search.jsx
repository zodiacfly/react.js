import React, {Component} from 'react'
import PubSub from 'pubsub-js'

export default class UserSearch extends Component {

	handleSearch = () => {
		const {searchValue} = this.props.search
		if(!searchValue.trim()) {
			return alert('please enter a valid name')
		}	
		PubSub.publish('searchValue', searchValue)
	}

	handlekeyEnter =(e) => {
		if(e.keyCode === 13) {
			this.handleSearch()
		}
	}

	render () {

		const {handleSearchValue} = this.props
		const {searchValue} = this.props.search

		return (
			<section className="jumbotron">
		      <h3 className="jumbotron-heading">Search Github Users</h3>
		      <div>
		        <input type="text" placeholder="enter the name you search" value={searchValue} onChange={(e) => {handleSearchValue(e)}} onKeyUp={this.handlekeyEnter}/>
		        <button onClick={this.handleSearch}>Search</button>
		      </div>
		    </section>
		)
	}
}
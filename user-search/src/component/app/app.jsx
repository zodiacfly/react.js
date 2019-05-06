import React, {Component} from 'react'

import UserSearch from '../user-search/user-search'
import UserMain from '../user-main/user-main'

export default class App extends Component {

	render () {
		return (
		<div className="container">
		    <UserSearch />
		    <UserMain />    
  		</div>
		)
	}
	


}
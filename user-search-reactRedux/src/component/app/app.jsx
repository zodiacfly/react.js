import React, {Component} from 'react'
import {connect} from 'react-redux'

import {handleLoading, handleAxios, handleSearchValue} from '../../redux/actions'
import UserSearch from '../user-search/user-search'
import UserMain from '../user-main/user-main'

class App extends Component {

	render () {
		
		return (
		<div className="container">
		{/*send props to components*/}
		    <UserSearch {...this.props}/>
		    <UserMain {...this.props}/>    
  		</div>
		)
	}
}

export default connect(
	state => ({mainState : state.mainState, search : state.search}),
	{handleLoading, handleAxios, handleSearchValue}
)(App)
import React, {Component} from 'react'

import PubSub from 'pubsub-js'

import UserItem from '../user-item/user-item'

export default class UserMain extends Component {

	
	componentDidMount () {

		const {handleLoading, handleAxios} = this.props

		PubSub.subscribe('searchValue', (msg, searchValue) => {
			handleLoading()
			handleAxios(searchValue)
		})
	}

	render () {
		const {initView, loading, searchResult, error} = this.props.mainState
		
		if(initView) {
			return <h2>Would you like to start search now?</h2>
		} else if(loading) {
			return <h2>loading.......</h2>
		} else if(searchResult) {
			return (
				<div className="row">
					{
						searchResult.map((item, index) => <UserItem key={index} searchResult={item}/>  )
					}	
			    </div>
			)
		} else if(error) {
			return <h2>{error}</h2>
		}
		
	}
	
}
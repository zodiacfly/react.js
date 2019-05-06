import React, {Component} from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

import UserItem from '../user-item/user-item'

export default class UserMain extends Component {

	state = {
		initView : true,
		loading : false,
		searchResult : null,
		error : null
	}

	componentDidMount () {
		PubSub.subscribe('searchValue', (msg, searchValue) => {
			this.setState({
				initView : false,
				loading : true
			})
			axios.get(`https://api.github.com/search/users?q=${searchValue}`)
				.then(res => {
					const searchResult = res.data.items.map((item) => ({
						name : item.login,
						url : item.html_url,
						src : item.avatar_url
					}))
					
					this.setState({
						loading : false,
						searchResult
					})
				})
				.catch(err => {
					
					this.setState({
						initView : false,
						loading : false,
						error : 'Opps.....404'
					})
				})
		})
	}

	render () {
		const {initView, loading, searchResult, error} = this.state
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
		} else {
			return <h2>{error}</h2>
		}
		
	}
	
}
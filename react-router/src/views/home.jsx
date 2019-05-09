import React, {Component} from 'react'
import {NavLink, Switch, Route, Redirect} from 'react-router-dom'

import Message from './message'
import News from './news'

export default class Home extends Component {
	render () {
		return (
			<div>
		      	<h2>Home contents</h2>
			    <div>
			        <ul className="nav nav-tabs">
			          <li>
			            <NavLink to='/home/news'>News</NavLink>
			          </li>
			          <li>
			            <NavLink to="/home/message">Message</NavLink>
			          </li>
			        </ul>
			        
			    </div>
			    <Switch>
			    	<Route path='/home/news' component={News} />
			    	<Route path='/home/message' component={Message} />
			    	<Redirect to='/home/news' />
			    </Switch>
    		</div>
		)
	}
}
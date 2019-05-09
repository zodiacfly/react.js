import React, {Component} from 'react'
import {NavLink, Route, Switch, Redirect} from 'react-router-dom'

import Home from '../../views/home'
import About from '../../views/about'


export default class App extends Component {

	render () {
		return (
	      <div>
	        <div className="row">
	          <div className="col-xs-offset-2 col-xs-8">
	            <div className="page-header">
	              <h2>React Router Demo</h2>
	            </div>
	          </div>
	        </div>

	        <div className="row">
	          <div className="col-xs-2 col-xs-offset-2">
	            <div className="list-group">           
	              <NavLink className="list-group-item" to='/home'>Home</NavLink>
	              <NavLink className="list-group-item" to='/about'>About</NavLink>              
	            </div>
	          </div>
	          <div className="col-xs-6">
	            <div className="panel">
	              <div className="panel-body">
	                
	                <Switch>
	                  <Route path='/about' component={About}/>
	                  <Route path='/home' component={Home}/>
	                  <Redirect to='/home'/>
	                </Switch>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
    )
	}
	


}
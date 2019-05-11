import {combineReducers} from 'redux'
import {ADD_COM, DELETE_COM, HANDLE_NEW_COM} from './action-types'

const initComments = [
			{name : 'Ren', content : 'React is the best'},
			{name : 'Daniel', content : 'React is easy to learn'},
			{name : 'Sharon', content : 'Hello world'}
		]
//reducer for comment-main
function comments (state = initComments, action) {
	switch (action.type) {
		case ADD_COM :
			return [action.data, ...state]
		case DELETE_COM : 
			return state.filter((item, index) => index !== action.data)
		default : 
			return state
	}
}

const comment = {name : '', content : ''}
//reducer for comment-add
function newComment (state = comment , action) {
	switch (action.type) {
		case HANDLE_NEW_COM :
			return {name : action.data.name, content : action.data.content}
		default : 
			return state
	}
}
export default combineReducers({
	comments,
	newComment
})
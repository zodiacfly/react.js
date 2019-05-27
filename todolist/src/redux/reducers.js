import {combineReducers} from 'redux'

import {
	ADD_NEW_LIST, 
	DELETE_LIST, 
	CHECKBOX_CHECKED, 
	CLEAR_COMPLETED_LIST,
	SELECT_ALL_LIST
} from './action-types'

// set a func to get an unique id for each list
const getUniqueID = (randomLength) => {
	let idStr = Date.now().toString(36)
	idStr += Math.random().toString(36).substr(3,randomLength)
	return idStr
}

const list = [
	{id : getUniqueID(), content : 'shopping', checked : false},
	{id : getUniqueID(), content : 'cooking', checked : false},
]

function todoList (state = list, actions) {
	switch(actions.type) {
		case ADD_NEW_LIST :
			return [...state,{id : getUniqueID(), content : actions.data, checked : false}]
		case DELETE_LIST :
			return state.filter(item => item.id !== actions.data)
		case CHECKBOX_CHECKED :
			return (
				state.map(item => {
					if(item.id === actions.data) {
						return {id : item.id, content : item.content, checked : !item.checked}
					} else {
						return {id : item.id, content : item.content, checked : item.checked}
					}
				})
			)
		case CLEAR_COMPLETED_LIST :
			return state.filter(item => item.checked === false)
		case SELECT_ALL_LIST :
			return state.map(item => ({id : item.id, content : item.content, checked : actions.data}))
		default :
			return state
	}
}

export default combineReducers({
	todoList
})
import {combineReducers} from 'redux'

import {HANDLE_LOADING, HANDLE_AXIOS_DATA, HANDLE_AXIOS_ERROR, HANDLE_SEARCH_VALUE} from './action-types'
//state for user-main.jsx
const initState = {
		initView : true,
		loading : false,
		searchResult : null,
		error : null
	}
//state for user-search.jsx
const initSearchState = {
		searchValue : ''
}
//reducer for user-main.jsx
function mainState (state = initState, actions){
	switch(actions.type) {
		case HANDLE_LOADING :
		return {
				initView : false,
				loading : true,
				searchResult : null,
				error : null
		}
		case HANDLE_AXIOS_DATA :
		return {
				initView : false,
				loading : false,
				searchResult : actions.data,
				error : null
		}
		case HANDLE_AXIOS_ERROR :
		return {
				initView : false,
				loading : false,
				searchResult : null,
				error : 'Opps.....404'
		}
		default :
		return state
	}
}
//reducer for user-search.jsx
function search (state = initSearchState, actions){
	switch(actions.type){
		case HANDLE_SEARCH_VALUE :
		return {
				searchValue : actions.data
		}
		default:
		return state
	}
}

export default combineReducers({
	mainState,
	search
})
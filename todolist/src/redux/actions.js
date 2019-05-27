import {
	ADD_NEW_LIST,
	DELETE_LIST, 
	CHECKBOX_CHECKED, 
	CLEAR_COMPLETED_LIST,
	SELECT_ALL_LIST
} from './action-types'

export const addNewList = (newList) => ({type : ADD_NEW_LIST, data : newList})
export const deleteList = (id) => ({type : DELETE_LIST, data : id})
export const checkboxChecked = (id) => ({type : CHECKBOX_CHECKED, data :id})
export const clearCompletedList = () => ({type : CLEAR_COMPLETED_LIST, data : null})
export const selectAllList = (boolean) => ({type : SELECT_ALL_LIST, data : boolean})

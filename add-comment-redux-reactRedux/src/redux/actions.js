import {ADD_COM, DELETE_COM, HANDLE_NEW_COM} from './action-types'


export const addCom = (newCom) => ({type : ADD_COM, data : newCom })

export const deleteCom = (index) => ({type : DELETE_COM, data : index})

export const handleNewCom = (obj) => ({type : HANDLE_NEW_COM, data : obj})
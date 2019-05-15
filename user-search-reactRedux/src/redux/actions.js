import axios from 'axios'

import {HANDLE_LOADING, HANDLE_AXIOS_DATA, HANDLE_AXIOS_ERROR, HANDLE_SEARCH_VALUE} from './action-types'

export const handleLoading = () => ({type : HANDLE_LOADING, data : null})  

const handleAxiosData = (data) => ({type : HANDLE_AXIOS_DATA, data})

const handleAxiosError = () => ({type : HANDLE_AXIOS_ERROR, data : null})

//by using middleware thunk, it will allow to send AJAX and other async request
export const handleAxios = (searchValue) => {
	return dispatch => {
		axios.get(`https://api.github.com/search/users?q=${searchValue}`)
				.then(res => {
					const searchResult = res.data.items.map((item) => ({
						name : item.login,
						url : item.html_url,
						src : item.avatar_url
					}))
					
					dispatch(handleAxiosData(searchResult))
				})
				.catch(err => {
					dispatch(handleAxiosError())
				})
	}
}

export const handleSearchValue = (e) => ({type : HANDLE_SEARCH_VALUE, data : e.target.value})



import {connect} from 'react-redux'

import Main from '../../component/main'
import {
	addNewList, 
	clearCompletedList,
	selectAllList
} from '../../redux/actions'

export default connect(
	state => ({todoList : state.todoList}),
	{addNewList, clearCompletedList, selectAllList}
)(Main)

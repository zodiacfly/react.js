
import {connect} from 'react-redux'
import {addCom, deleteCom, handleNewCom} from '../../redux/actions'

import CommentMain from '../../component/comment-main/comment-main'

export default connect(
	state => ({comments : state.comments, newComment : state.newComment}),
	{addCom, deleteCom, handleNewCom}
)(CommentMain)
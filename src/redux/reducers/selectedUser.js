const initialState = {
	item: {},

}
/*
	@initialState {object} = initialState
	action {object} = description of action
*/
const selectedUser = (state = initialState, action) => {
	if (action.type === 'SET_SELECTED_USER') {
		return {
			...state,
			item: action.payload,
		}
	}
	return state

}

export default selectedUser


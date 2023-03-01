const initialState = {
	byCategory: '',

}
/*
	@initialState {object} = initialState
	action {object} = description of action
*/
const category = (state = initialState, action) => {
	if (action.type === 'SET_CATEGORY') {
		return {
			...state,
			byCategory: action.payload,
		}
	}
	return state

}

export default category


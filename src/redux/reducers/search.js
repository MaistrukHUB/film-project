const initialState = {
	bySearch: '',

}
/*
	@initialState {object} = initialState
	action {object} = description of action
*/
const search = (state = initialState, action) => {
	if (action.type === 'SET_SEARCH') {
		return {
			...state,
			bySearch: action.payload,
		}
	}
	return state

}

export default search


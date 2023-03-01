const initialState = {
	bySelectedCollection: '',

}
/*
	@initialState {object} = initialState
	action {object} = description of action
*/
const selectedCollection = (state = initialState, action) => {
	if (action.type === 'SET_SELECTED_COLLECTION') {
		return {
			...state,
			bySelectedCollection: action.payload,
		}
	}
	return state

}

export default selectedCollection


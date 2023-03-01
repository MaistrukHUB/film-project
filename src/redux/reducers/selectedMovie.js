const initialState = {
	movie: {},

}
/*
	@initialState {object} = initialState
	action {object} = description of action
*/
const selectedMovie = (state = initialState, action) => {
	if (action.type === 'SET_SELECTED_MOVIE') {
		return {
			...state,
			movie: action.payload,
		}
	}
	return state

}

export default selectedMovie


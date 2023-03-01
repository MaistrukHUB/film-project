const initialState = {
	items: [],
	isLoaded: false
}

const movies = (state = initialState, action) => {
	if (action.type === 'SET_MOVIES') {
		return {
			...state,
			items: action.payload,
		}
	}
	return state

}

export default movies


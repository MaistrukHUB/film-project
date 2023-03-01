const initialState = {
	items: []
}

const collections = (state = initialState, action) => {
	if (action.type === 'SET_COLLECTIONS') {
		return {
			...state,
			items: action.payload,
		}
	}
	return state

}

export default collections


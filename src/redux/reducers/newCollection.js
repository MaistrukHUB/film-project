const initialState = {
	items: [],
	isLoaded: false
}

const newCollection = (state = initialState, action) => {
	if (action.type === 'SET_NEW-COLLECTION') {
		return {
			...state,
			items: action.payload,
		}
	}
	return state

}

export default newCollection


const initialState = {
	users: [],
}

const users = (state = initialState, action) => {
	if (action.type === 'SET_USERS') {
		return {
			...state,
			items: action.payload,
		}
	}
	return state

}

export default users


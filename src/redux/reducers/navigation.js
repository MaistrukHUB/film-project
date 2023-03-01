const initialState = {
	items: [
		{
			name: 'Головна',
			type: '/'
		},
		{
			name: 'Підбірки',
			type: 'collections'
		},
		{
			name: 'По жанру',
			type: 'byGenre'
		},
		{
			name: 'Фільми',
			type: 'movies'
		},
	]
}

const navigation = (state = initialState, action) => {
	if (action.type === 'SET_NAVIGATION') {
		return {
			...state,
			items: action.payload,
		}
	}
	return state

}

export default navigation


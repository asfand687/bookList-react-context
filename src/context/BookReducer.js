import { v4 as uuidv4 } from 'uuid'

export default (state, action) => {
	switch (action.type) {
		case 'ADD_BOOK':
			console.log(action)
			return [
				...state,
				{
					title: action.payload.title,
					author: action.payload.author,
					id: uuidv4(),
				},
			]
		case 'REMOVE_BOOK':
			return state.filter((book) => book.id !== action.payload)
		default:
			return state
	}
}

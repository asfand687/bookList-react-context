import { createContext, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import BookReducer from './BookReducer'

export const BookContext = createContext()
const initialState = [
	{ id: uuidv4(), title: 'The Kite Runner', author: 'Khaled Hosseini' },
	{
		id: uuidv4(),
		title: 'A Thousand Splendid Suns',
		author: 'Khaled Hosseini',
	},
	{ id: uuidv4(), title: 'The Fifth Mountain', author: 'Paulo Coelho' },
	{
		id: uuidv4(),
		title: 'The Saint of Incipient Insanities',
		author: 'Elif Shafak',
	},
]

const BookContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(BookReducer, initialState)

	return (
		<BookContext.Provider value={{ books: state, dispatch }}>
			{children}
		</BookContext.Provider>
	)
}

export default BookContextProvider

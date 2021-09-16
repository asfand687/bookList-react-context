import { createContext, useEffect, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import BookReducer from './BookReducer'

export const BookContext = createContext()

const BookContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(BookReducer, [], () => {
		const localData = localStorage.getItem('books')
		return localData ? JSON.parse(localData) : []
	})
	useEffect(() => {
		localStorage.setItem('books', JSON.stringify(state))
	}, [state])
	return (
		<BookContext.Provider value={{ books: state, dispatch }}>
			{children}
		</BookContext.Provider>
	)
}

export default BookContextProvider

import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const BookContext = createContext()

const BookContextProvider = ({ children }) => {
	const [books, setBook] = useState([
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
	])
	const addBook = (title, author) => {
		setBook((prev) => setBook([...prev, { title, author, id: uuidv4() }]))
	}
	const removeBook = (id) => {
		setBook((prev) => prev.filter((book) => book.id !== id))
	}

	return (
		<BookContext.Provider value={{ books, addBook, removeBook }}>
			{children}
		</BookContext.Provider>
	)
}

export default BookContextProvider

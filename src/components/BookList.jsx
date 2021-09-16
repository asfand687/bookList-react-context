import { useContext } from 'react'
import { BookContext } from '../context/BookContext'
import BookDetails from './BookDetails'

const BookList = () => {
	const { books } = useContext(BookContext)
	return books.length ? (
		<div className='book-list'>
			{books.map((book) => (
				<BookDetails key={book.id} book={book} />
			))}
		</div>
	) : (
		<div className='empty'>
			You have no books on your list. Hello free time :)
		</div>
	)
}

export default BookList

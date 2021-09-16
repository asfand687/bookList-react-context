import { useContext, useState } from 'react'
import { BookContext } from '../context/BookContext'

const BookForm = () => {
	const { dispatch } = useContext(BookContext)
	const [title, setTitle] = useState('')
	const [author, setAuthor] = useState('')
	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch({
			type: 'ADD_BOOK',
			payload: { title, author },
		})
		setTitle('')
		setAuthor('')
	}
	return (
		<form onSubmit={handleSubmit}>
			<input
				className='text'
				placeholder='Book Title'
				value={title}
				onChange={({ target }) => setTitle(target.value)}
				required
			/>
			<input
				className='text'
				placeholder='Book Author'
				value={author}
				onChange={({ target }) => setAuthor(target.value)}
				required
			/>
			<input className='submit-button' type='submit' value='Add Book' />
		</form>
	)
}

export default BookForm

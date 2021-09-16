import { useContext } from 'react'
import { BookContext } from '../context/BookContext'

const Navbar = () => {
	const { books } = useContext(BookContext)
	console.log(books)
	return (
		<div className='navbar'>
			<h1>Ninja Reading List</h1>
			<p>Currently you have {books.length} books in your list.</p>
		</div>
	)
}

export default Navbar

import { useEffect, useState } from 'react'
import BookCard from '../components/BookCard';

const BestSallerBook = () => {

    const [books, setBooks] = useState([]);

    useEffect( () => {
        fetch('https://ecommerce-books-app-backend.onrender.com/all-books')
      .then(res => res.json()).then(data => setBooks(data.slice(6, 12)))
    },[])
  return (
    <div>
        <BookCard books={books} headLine='Best Saller Books'/>
    </div>
  )
}

export default BestSallerBook

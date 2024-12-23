import { useEffect, useState } from 'react';
import BookCards from './BookCards';

const OtherBooks = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('https://story-stacks-server.vercel.app/all-books')
        .then(res => res.json())
        .then(data => setBooks(data.slice(7, 12)))
    } , [])
    return (
        <div>
           <BookCards books={books} headline="Other Books"></BookCards> 
        </div>
    );
};

export default OtherBooks;
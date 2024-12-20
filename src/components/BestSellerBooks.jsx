import { useEffect, useState } from "react";
import BookCards from "./BookCards";


const BestSellerBooks = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('https://story-stacks-server.vercel.app/all-books')
        .then(res => res.json())
        .then(data => setBooks(data.slice(0, 6)))
    } , [])
    return (
        <div>
           <BookCards books={books} headline="Best Seller Books"></BookCards> 
        </div>
    );
};

export default BestSellerBooks;
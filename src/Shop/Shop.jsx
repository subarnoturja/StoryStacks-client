import { useEffect, useState } from "react";


const Shop = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/all-books')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

    return (
        <div className="mt-28 px-4 lg:px-24">
            <h2 className="text-5xl font-bold text-center">All Books are here</h2>
        </div>
    );
};

export default Shop;
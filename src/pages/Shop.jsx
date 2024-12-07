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
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8 my-12">
                {
                    books.map(book => <>
                    <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                        <img src={book.imageURL} alt="" className="object-cover object-center w-full rounded-md h-96 dark:bg-gray-500" />
                        <div className="mt-6 mb-2">
                            <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">Quisque</span>
                            <h2 className="text-xl font-semibold tracking-wide">{book.bookTitle}</h2>
                        </div>
                        <p className="dark:text-gray-800">{book.bookDescription}</p>
                        <button className="btn w-full mt-3 font-semibold text-black bg-blue-600/50">Buy  Now</button>
                    </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default Shop;
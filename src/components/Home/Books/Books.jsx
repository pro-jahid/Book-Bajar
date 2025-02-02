import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('/public/Books.json')
        .then(res=> res.json())
        .then(data =>setBooks(data))
    },[])
    return (
        <div className="mt-20 mb-10">
            <h2 className="text-4xl text-center font-bold">Books</h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {
                books.map(book => <Book key={book.id} book={book}></Book>)
            }
            </div>
        </div>
    );
};

export default Books;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Books.css'; 

function Books() {
    const [books, setBooks] = useState([]);

    
    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = () => {
        axios.get('http://localhost:5003/Books')
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => console.error('Error fetching books:', error));
    };

    
    const deleteBook = (id) => {
        axios.delete(`http://localhost:5003/Books/${id}`)
            .then(() => {
                console.log(`Book with ID ${id} deleted.`);
                fetchBooks(); 
            })
            .catch(error => console.error('Error deleting book:', error));
    };

    return (
        <div>
            <h1 className="book-title">Books</h1>
            <ul className="books-list">
                {books.map(book => (
                    <li key={book.id.toString()} className="book-item">
                        <span className="book-title">{book.title} by {book.author} ({book.year})</span>
                        <button onClick={() => deleteBook(book.id)} className="delete-button">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Books;

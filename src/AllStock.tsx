import React, {useEffect, useState} from 'react';
import './App.css';


interface book {
    id: number;
    title: string;
    author: string;
    isbn: string;
    quantity: number;
}



const AllStock: React.FC = () => {
    const [books, setBooks] = useState<book[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/book')
            .then((res) => {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.json();
            })
            .then((data: book[]) => setBooks(data))
            .catch((err: Error) => {
                console.error(err);
                setError(err.message);
            });
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>All Books</h1>
            {error ? (
                <p style={{ color: 'red' }}>Error: {error}</p>
            ) : (
                <ul>
                    {books.slice(0, 10).map((book) => (
                        <li>
                            <strong>{book.title} by </strong>
                            <strong>{book.author}</strong>
                            <strong> - Available: {book.quantity}</strong>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};



export default AllStock;

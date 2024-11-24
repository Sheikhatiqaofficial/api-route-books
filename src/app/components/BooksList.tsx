
import React from 'react';

const BooksList = ({ books, onEdit, onDelete }: any) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {books.map((book: any) => (
        <div key={book.id} className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all">
          <h2 className="text-xl font-bold">{book.title}</h2>
          <p className="text-gray-700">{book.author}</p>
          
          
          <p className="text-gray-500 mt-2">Year: {book.year}</p>
          <p className="text-gray-500">Genre: {book.genre}</p>
          <p className="text-gray-500">Language: {book.language}</p>
          <p className="text-gray-500">Available: {book.available ? 'Yes' : 'No'}</p>

          <div className="mt-4">
            <button
              onClick={() => onEdit(book)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(book.id)}  
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BooksList;

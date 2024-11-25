
import React from 'react';
import { FC } from 'react';

type Book = {
  id: number;
  title: string;
  author: string;
};

type BooksListProps = {
  books: Book[]; // Array of Book objects
  onEdit: (updatedBook: Book) => void;
  onDelete: (id: number) => void;
};

const BooksList: FC<BooksListProps> = ({ books, onEdit, onDelete }) => {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id} className="p-4 mb-2 border rounded-lg">
          <h2 className="text-xl font-bold">{book.title}</h2>
          <p className="text-sm text-gray-700">Author: {book.author}</p>
          <button
            onClick={() => onEdit(book)} // Edit button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(book.id)} // Delete button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-2 ml-2"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default BooksList;

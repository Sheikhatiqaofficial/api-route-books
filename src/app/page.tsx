
// 'use client';

// import React, { useState, useEffect } from 'react';
// import AddBookForm from './components/AddBookForm';
// import BooksList from './components/BooksList';
// import EditBookForm from './components/EditBookForm';
// import Header from './components/Header';
// import Footer from './components/Footer';

// const Page = () => {
//   const [books, setBooks] = useState<any[]>([]);
//   const [editingBook, setEditingBook] = useState<any | null>(null);

//   useEffect(() => {
//     const fetchBooks = async () => {
//       const response = await fetch('/api/books');
//       if (response.ok) {
//         const data = await response.json();
//         setBooks(data);
//       }
//     };
//     fetchBooks();
//   }, []);

  
//   const handleUpdate = (updatedBook: any) => {
    
//     setBooks((prevBooks) =>
//       prevBooks.map((book) =>
//         book.id === updatedBook.id ? { ...book, ...updatedBook } : book
//       )
//     );
//     setEditingBook(null); 
//   };

//   const handleDelete = async (id: number) => {
//     const response = await fetch(`/api/books`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ id }),
//     });

//     if (response.ok) {
//       setBooks(books.filter((book) => book.id !== id));
//     }
//   };

//   const handleEdit = (book: any) => {
//     setEditingBook(book);
//   };

//   const handleClose = () => {
//     setEditingBook(null); 
//   };

//   return (
//     <div>
//       <Header />
//       <AddBookForm setBooks={setBooks} />
//       <BooksList books={books} onEdit={handleEdit} onDelete={handleDelete} />
//       {editingBook && (
//         <EditBookForm
//           book={editingBook}
//           onClose={handleClose}
//           onUpdate={handleUpdate}
//         />
//       )}
//         <Footer />
//     </div>
//   );
// };

// export default Page;
'use client';

import React, { useState, useEffect, useRef } from 'react';
import AddBookForm from './components/AddBookForm'; // Assuming your AddBookForm component is in the 'components' folder
import Header from './components/Header'; // Import your existing Header component
import Footer from './components/Footer'; // Import your existing Footer component

type Book = {
  id: number;
  title: string;
  author: string;
  year: number;
  available: boolean;
  language: string;
  genre: string;
};

const Page = () => {
  const initialBooks: Book[] = [
    {
      id: 1,
      title: 'Harry Potter and the Sorcerer\'s Stone',
      author: 'J.K. Rowling',
      year: 1997,
      available: true,
      language: 'English',
      genre: 'Fantasy',
    },
    {
      id: 2,
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
      year: 1998,
      available: true,
      language: 'English',
      genre: 'Fantasy',
    },
    {
      id: 3,
      title: 'Harry Potter and the Prisoner of Azkaban',
      author: 'J.K. Rowling',
      year: 1999,
      available: true,
      language: 'English',
      genre: 'Fantasy',
    },
    {
      id: 4,
      title: 'Harry Potter and the Goblet of Fire',
      author: 'J.K. Rowling',
      year: 2000,
      available: true,
      language: 'English',
      genre: 'Fantasy',
    },
    {
      id: 5,
      title: 'Harry Potter and the Order of the Phoenix',
      author: 'J.K. Rowling',
      year: 2003,
      available: true,
      language: 'English',
      genre: 'Fantasy',
    },
    {
      id: 6,
      title: 'Harry Potter and the Half-Blood Prince',
      author: 'J.K. Rowling',
      year: 2005,
      available: true,
      language: 'English',
      genre: 'Fantasy',
    },
    {
      id: 7,
      title: 'Harry Potter and the Deathly Hallows',
      author: 'J.K. Rowling',
      year: 2007,
      available: true,
      language: 'English',
      genre: 'Fantasy',
    },
  ];

  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [editingBook, setEditingBook] = useState<Book | null>(null);  // Track which book is being edited

  const formRef = useRef<HTMLDivElement>(null); // Reference to the form for scrolling

  // Delete book handler
  const handleDeleteBook = (bookId: number) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
  };

  // Edit book handler
  const handleEditBook = (bookId: number) => {
    const bookToEdit = books.find((book) => book.id === bookId);
    if (bookToEdit) {
      setEditingBook(bookToEdit);  // Set the book to be edited
      // Scroll to the form
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update book after editing
  const handleUpdateBook = (updatedBook: Book) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === updatedBook.id ? updatedBook : book
      )
    );
    setEditingBook(null);  // Close the form after updating
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto p-4">
        {/* Add Book Form / Edit Book Form */}
        <div ref={formRef} className="mt-6">
          <AddBookForm 
            setBooks={setBooks} 
            editingBook={editingBook} 
            onUpdateBook={handleUpdateBook} 
          />
        </div>

        {/* Book List */}
        <div className="mt-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="flex justify-between items-center p-4 mb-4 border border-gray-300 rounded"
            >
              <div>
                <h3 className="text-xl font-bold">{book.title}</h3>
                <p>{book.author}</p>
                <p>{book.year}</p>
                <p>{book.language}</p>
                <p>{book.genre}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEditBook(book.id)}
                  className="bg-yellow-500 text-white p-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteBook(book.id)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Page;

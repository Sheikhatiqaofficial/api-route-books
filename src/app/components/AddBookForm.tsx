
// import React, { useState } from 'react';

// interface AddBookFormProps {
//   setBooks: React.Dispatch<React.SetStateAction<any[]>>;
// }

// const AddBookForm: React.FC<AddBookFormProps> = ({ setBooks }) => {
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [year, setYear] = useState('');
//   const [genre, setGenre] = useState('');
//   const [language, setLanguage] = useState('');
//   const [available, setAvailable] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const newBook = {
//       title,
//       author,
//       year: parseInt(year),
//       genre,
//       language,
//       available,
//     };

//     const response = await fetch('/api/books', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newBook),
//     });

//     if (response.ok) {
//       const addedBook = await response.json();
//       setBooks((prevBooks) => [...prevBooks, addedBook]); // Add new book to state
//       setTitle('');
//       setAuthor('');
//       setYear('');
//       setGenre('');
//       setLanguage('');
//       setAvailable(false);
//     } else {
//       console.error('Failed to add book');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white shadow-lg rounded-lg">
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Title"
//         className="w-full px-4 py-2 border rounded-md"
//         required
//       />
//       <input
//         type="text"
//         value={author}
//         onChange={(e) => setAuthor(e.target.value)}
//         placeholder="Author"
//         className="w-full px-4 py-2 border rounded-md"
//         required
//       />
//       <input
//         type="number"
//         value={year}
//         onChange={(e) => setYear(e.target.value)}
//         placeholder="Year"
//         className="w-full px-4 py-2 border rounded-md"
//         required
//       />
//       <input
//         type="text"
//         value={genre}
//         onChange={(e) => setGenre(e.target.value)}
//         placeholder="Genre"
//         className="w-full px-4 py-2 border rounded-md"
//         required
//       />
//       <input
//         type="text"
//         value={language}
//         onChange={(e) => setLanguage(e.target.value)}
//         placeholder="Language"
//         className="w-full px-4 py-2 border rounded-md"
//         required
//       />
//       <label className="flex items-center">
//         <input
//           type="checkbox"
//           checked={available}
//           onChange={(e) => setAvailable(e.target.checked)}
//         />
//         <span className="ml-2">Available</span>
//       </label>
//       <button
//         type="submit"
//         className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//       >
//         Add Book
//       </button>
//     </form>
//   );
// };

// export default AddBookForm;
// AddBookForm.tsx
'use client';

import React, { useState, useEffect } from 'react';

type AddBookFormProps = {
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  editingBook: Book | null;
  onUpdateBook: (updatedBook: Book) => void;  // Function passed to update a book
};

type Book = {
  id: number;
  title: string;
  author: string;
  year: number;
  available: boolean;
  language: string;
  genre: string;
};

const AddBookForm: React.FC<AddBookFormProps> = ({ setBooks, editingBook, onUpdateBook }) => {
  const [newBook, setNewBook] = useState<Book>({
    id: Date.now(),
    title: '',
    author: '',
    year: 0,
    available: true,
    language: '',
    genre: '',
  });

  // Populate form with existing book data if editing
  useEffect(() => {
    if (editingBook) {
      setNewBook(editingBook); // Set form values to the book being edited
    }
  }, [editingBook]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingBook) {
      onUpdateBook(newBook);  // If editing, update the book
    } else {
      setBooks((prevBooks) => [...prevBooks, newBook]);  // Add new book if not editing
    }
    // Reset the form after submission
    setNewBook({
      id: Date.now(),
      title: '',
      author: '',
      year: 0,
      available: true,
      language: '',
      genre: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md space-y-4">
      <div>
        <label className="block">Title</label>
        <input
          type="text"
          name="title"
          value={newBook.title}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block">Author</label>
        <input
          type="text"
          name="author"
          value={newBook.author}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block">Year</label>
        <input
          type="number"
          name="year"
          value={newBook.year}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block">Language</label>
        <input
          type="text"
          name="language"
          value={newBook.language}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block">Genre</label>
        <input
          type="text"
          name="genre"
          value={newBook.genre}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {editingBook ? 'Update Book' : 'Add Book'}
      </button>
    </form>
  );
};

export default AddBookForm;


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
import { useState } from 'react';

type AddBookFormProps = {
  onAdd: (newBook: { title: string; author: string }) => void;
};

const AddBookForm = ({ onAdd }: AddBookFormProps) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && author) {
      onAdd({ title, author }); // Calling onAdd prop to add new book
      setTitle(''); // Reset title input
      setAuthor(''); // Reset author input
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <label className="block text-sm font-bold text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-bold text-gray-700">Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Book
      </button>
    </form>
  );
};

export default AddBookForm;

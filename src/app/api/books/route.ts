// import { NextResponse } from "next/server"

// interface Books {
//     id: number;
//     title: string;
//     author: string;
//     year: number;
//     available: boolean;
//     Language: string;
//     Genre: string;
// }
// let books: Books[] = [
//     {
//         id: 1,
//         title: "Harry Potter and the Philosopher's Stone",
//         author: " J. K. Rowling",
//         year: 1997,
//         available: true,
//         Language: "English",
//         Genre: "Fantasy"

//     },
//     {
//         id: 2,
//         title: "Harry Potter and the Chamber of Secrets",
//         author: " J. K. Rowling",
//         year: 1998,
//         available: true,
//         Language: "English",
//         Genre: "Fantasy"

//     },
//     {
//         id: 3,
//         title: "Harry Potter and thePrison of Azkaban",
//         author: " J. K. Rowling",
//         year: 1999,
//         available: true,
//         Language: "English",
//         Genre: "Fantasy"

//     },
//     {
//         id: 4,
//         title: "Harry Potter and the Goblet of Fire",
//         author: " J. K. Rowling",
//         year: 2000,
//         available: true,
//         Language: "English",
//         Genre: "Fantasy"

//     },
//     {
//         id: 5,
//         title: "Harry Potter and the Order of the Phoenix",
//         author: " J. K. Rowling",
//         year: 2003,
//         available: true,
//         Language: "English",
//         Genre: "Fantasy"

//     },
//     {
//         id: 6,
//         title: "Harry Potter and the Half-Blood Prince",
//         author: " J. K. Rowling",
//         year: 2005,
//         available: true,
//         Language: "English",
//         Genre: "Fantasy"

//     },
//     {
//         id: 7,
//         title: "Harry Potter and the Deathly Hallows",
//         author: " J. K. Rowling",
//         year: 2007,
//         available: true,
//         Language: "English",
//         Genre: "Fantasy"

//     },
// ]
// //GET method use to fetch all books...
// export async function GET(request: NextResponse) {
//     try {
//         return NextResponse.json(books, { status: 200 });
//     } catch (error) {
//         return NextResponse.json(
//             { message: "error fetching books" },
//             { status: 500 }
//         )
//     }
// }


// //POST method use to add a new book
// export async function POST(request: NextResponse) {
//     try {
//         const main = await request.json();
//         if (!main.title || !main.author) {
//             return NextResponse.json({ message: "All fields (title, author, year, Genre, Language) are required" }, { status: 400 });
//         }
//         const ids = books.length ? Math.max(...books.map(b => b.id)) + 1 : 1;
//         const book = { id: ids, ...main };
//         books.push(book);

//         return NextResponse.json(book, { status: 201 });
//     } catch (error) {
//         return NextResponse.json({ message: "Error occurred while adding the book" }, { status: 500 });
//     }
// }


// //PUT method use to update excisting book by id 
// export async function PUT(request: NextResponse) {
//     try {
//         const { id, title, author, available, year, Genre, Language } = await request.json();

//         if (!id || !title || !author || !year || !Genre || !Language) {
//             return NextResponse.json({ message: "All fields (id, title, author, year, Genre, Language) are required" }, { status: 400 });
//         }
//         const index = books.findIndex(b => b.id === id);

//         if (index === -1) {
//             return NextResponse.json({ message: "not found" }, { status: 404 })
//         }

//         books[index] = { id, title, author, available, year, Genre, Language };
//         return NextResponse.json(books[index], { status: 200 });
//     } catch (error) {
//         return NextResponse.json({ message: "Can't update book" }, { status: 500 });
//     }
// }


// //DELETE method will delete book by id
// export async function DELETE(request: NextResponse) {
//     try {
//         const { id } = await request.json();

//         if (!id) {
//             return NextResponse.json({ message: "Missing id " }, { status: 400 });
//         }

//         const index = books.findIndex(b => b.id === id);

//         if (index === -1) {
//             return NextResponse.json({ message: "not found" }, { status: 404 });
//         }

//         books.splice(index, 1)

//         return NextResponse.json({ message: "Book Deleted" }, { status: 200 });
//     } catch (error) {
//         return NextResponse.json({ message: "Can't delete book" }, { status: 500 });
//     }
// }
import { NextResponse, NextRequest } from "next/server"

interface Books {
    id: number;
    title: string;
    author: string;
    year: number;
    available: boolean;
    language: string;  // Corrected 'Language' to 'language'
    genre: string;  // Corrected 'Genre' to 'genre'
}

const books: Books[] = [
    { id: 1, title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", year: 1997, available: true, language: "English", genre: "Fantasy" },
    { id: 2, title: "Harry Potter and the Chamber of Secrets", author: "J.K. Rowling", year: 1998, available: true, language: "English", genre: "Fantasy" },
    {
        id: 3,
        title: "Harry Potter and thePrison of Azkaban",
        author: " J. K. Rowling",
        year: 1999,
        available: true,
        language: "English",
        genre: "Fantasy"

    },
    {
        id: 4,
        title: "Harry Potter and the Goblet of Fire",
        author: " J. K. Rowling",
        year: 2000,
        available: true,
        language: "English",
        genre: "Fantasy"

    },
    {
        id: 5,
        title: "Harry Potter and the Order of the Phoenix",
        author: " J. K. Rowling",
        year: 2003,
        available: true,
        language: "English",
        genre: "Fantasy"

    },
    {
        id: 6,
        title: "Harry Potter and the Half-Blood Prince",
        author: " J. K. Rowling",
        year: 2005,
        available: true,
        language: "English",
        genre: "Fantasy"

    },
    {
        id: 7,
        title: "Harry Potter and the Deathly Hallows",
        author: " J. K. Rowling",
        year: 2007,
        available: true,
        language: "English",
        genre: "Fantasy"

    },
]
    ;

export async function GET(request: NextRequest) {
    try {
        return NextResponse.json(books, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error fetching books" }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const newBook = await request.json();
        if (!newBook.title || !newBook.author || !newBook.year || !newBook.language || !newBook.genre) {
            return NextResponse.json({ message: "All fields (title, author, year, language, genre) are required" }, { status: 400 });
        }

        const ids = books.length ? Math.max(...books.map(b => b.id)) + 1 : 1;
        const book = { id: ids, ...newBook };
        books.push(book);

        return NextResponse.json(book, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Error occurred while adding the book" }, { status: 500 });
    }
}

export async function PUT(request: NextRequest) {
    try {
        const { id, title, author, available, year, genre, language } = await request.json();

        if (!id || !title || !author || !year || !genre || !language) {
            return NextResponse.json({ message: "All fields (id, title, author, year, genre, language) are required" }, { status: 400 });
        }

        const index = books.findIndex(b => b.id === id);
        if (index === -1) {
            return NextResponse.json({ message: "Book not found" }, { status: 404 });
        }

        books[index] = { id, title, author, available, year, genre, language };
        return NextResponse.json(books[index], { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Can't update book" }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const { id } = await request.json();

        if (!id) {
            return NextResponse.json({ message: "Missing id" }, { status: 400 });
        }

        const index = books.findIndex(b => b.id === id);
        if (index === -1) {
            return NextResponse.json({ message: "Book not found" }, { status: 404 });
        }

        books.splice(index, 1);
        return NextResponse.json({ message: "Book deleted" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Can't delete book" }, { status: 500 });
    }
}

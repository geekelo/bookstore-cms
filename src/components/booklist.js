import React, { useState } from 'react';
import BookItem from './bookitem';
import AddBook from './addbook'; // Assuming the BookItem component is imported correctly

function BookList() {
  const [books, setBooks] = useState([
    {
      id: '1',
      category: 'Author 1',
      title: 'The Hunger Games book 1',
    },
    {
      id: '2',
      category: 'Author 2',
      title: 'The Hunger Games book 2',
    },
    {
      id: '3',
      category: 'Author 3',
      title: 'The Hunger Games book 3',
    },
  ]);

  return (
    <div>
      <ul>
        {books.map((book) => (
          <BookItem key={book.id} title={book.title} category={book.category} setBooks={setBooks} />
        ))}
      </ul>
      <AddBook />
    </div>
  );
}

export default BookList;

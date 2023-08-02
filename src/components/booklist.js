import { useSelector } from 'react-redux';
import BookItem from './bookitem';
import AddBook from './addbook';

function BookList() {
  const books = useSelector((state) => state.book.value);
  console.log(books);

  return (
    <div>
      <ul>
        {books.map((book) => (
          <BookItem key={book.id} title={book.title} category={book.category} />
        ))}
      </ul>
      <AddBook />
    </div>
  );
}

export default BookList;

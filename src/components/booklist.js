import { useSelector } from 'react-redux';
import BookItem from './bookitem';
import AddBook from './addbook';

function BookList() {
  const books = useSelector((state) => state.book.value);

  return (
    <div>
      <ul>
        {books.map((book) => (
          <BookItem
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            category={book.category}
            author={book.author}
          />
        ))}
      </ul>
      <AddBook />
    </div>
  );
}

export default BookList;

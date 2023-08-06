import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from './redux/books/books';
import BookItem from './bookitem';
import AddBook from './addbook';
import './styles/booklist.css';

function BookList() {
  const booksObj = useSelector((state) => state.book.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  // Fetch data whenever the booksObj changes (after post or delete)
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="booksSection">
      <ul>
        {Object.entries(booksObj).map(([id, bookArr]) => (
          <BookItem
            key={id}
            id={id}
            title={bookArr[0].title}
            category={bookArr[0].category}
            author={bookArr[0].author}
          />
        ))}
      </ul>
      <AddBook />
    </div>
  );
}

export default BookList;

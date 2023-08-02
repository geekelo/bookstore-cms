import { useDispatch } from 'react-redux';
import { updatebookList } from './redux/books/books';

function AddBook() {
  const dispatch = useDispatch();
  const newBook = {
    id: '8',
    category: '',
    title: '',
  };

  const getvalues = (e) => {
    e.preventDefault();
    dispatch(updatebookList(newBook));
  };

  return (
    <form onSubmit={(e) => getvalues(e)}>
      <input onChange={(e) => { newBook.title = e.target.value; }} type="text" placeholder="Fill book title" />
      <select onChange={(e) => { newBook.category = e.target.value; }}>
        <option>Category</option>
        <option value="Category A">Category A</option>
        <option value="Category B">Category B</option>
      </select>
      <input type="submit" value="ADD BOOK" />
    </form>
  );
}

export default AddBook;

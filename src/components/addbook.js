import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from './redux/books/books';
import './styles/addbook.css';

function AddBook() {
  const dispatch = useDispatch();
  const newBook = {
    item_id: `item ${uuidv4()}`,
    title: '',
    author: '',
    category: '',
  };

  const getvalues = (e) => {
    e.preventDefault();
    dispatch(postBook(newBook));
  };

  return (
    <div className="addnewbookContainer">
      <p className="addnewbookTitle">ADD NEW BOOK</p>
      <form onSubmit={(e) => getvalues(e)}>
        <input className="formFields" onChange={(e) => { newBook.title = e.target.value; }} type="text" placeholder="Fill book title" />
        <input className="formFields" onChange={(e) => { newBook.author = e.target.value; }} type="text" placeholder="Fill book author" />
        <select className="formFields" onChange={(e) => { newBook.category = e.target.value; }}>
          <option>Category</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
        </select>
        <input className="addbookBtn" type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
}

export default AddBook;

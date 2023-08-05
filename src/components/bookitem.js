import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from './redux/books/books';
import './styles/bookitem.css';

function BookItem({
  id,
  title,
  category,
  author,
}) {
  const dispatch = useDispatch();
  if (!category) {
    // Handle the case when category is not provided
    return null;
  }
  return (
    <li className="itemContainerl">
      <div>
        <p className="SchhSchool-of Text-Style-9">{category}</p>
        <h2>{title}</h2>
        <p>{author}</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(deleteBook(id));
          }}
          type="submit"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookItem;

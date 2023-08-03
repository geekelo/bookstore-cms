import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletebook } from './redux/books/books';

function BookItem({
  id,
  title,
  category,
  author,
}) {
  const dispatch = useDispatch();

  return (
    <li>
      <p>{category}</p>
      <h2>{title}</h2>
      <p>{author}</p>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(deletebook(id));
        }}
        type="submit"
      >
        Delete
      </button>
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

import PropTypes from 'prop-types';

function BookItem({ title, author, category }) {
  return (
    <li>
      <p>{category}</p>
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="submit">Delete</button>
    </li>
  );
}

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookItem;

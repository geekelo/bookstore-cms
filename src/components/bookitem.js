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
    <li className="itemContainer">
      <div className="bookDetails">
        <div className="detailsection">
          <p className="category">{category}</p>
          <h2 className="title">{title}</h2>
          <p className="author">{author}</p>
          <div className="actionBtnSect">
            <button type="submit" className="actionBtns">comments</button>
            <button
              className="actionBtns"
              onClick={(e) => {
                e.preventDefault();
                dispatch(deleteBook(id));
              }}
              type="submit"
            >
              Remove
            </button>
            <button type="submit" className="actionBtns edit">Edit</button>
          </div>
        </div>
        <div className="progressSection">
          <div className="progressContainer">
            <div className="progress-bar"> </div>
            <div>
              <p className="percentage">75%</p>
              <p className="completed">Completed</p>
            </div>
          </div>
          <p className="vbar"> </p>
          <div className="progressSubSect">
            <div className="chapterSection">
              <p className="chapterTitle">CURRENT CHAPTER</p>
              <p className="chapter">Chapter 21</p>
            </div>
            <button className="updateProgressBtn" type="submit">UPDATE PROGRESS</button>
          </div>
        </div>
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

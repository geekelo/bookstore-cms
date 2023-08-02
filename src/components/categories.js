import { useSelector, useDispatch } from 'react-redux';
import { checkCategories } from './redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();

  dispatch(checkCategories());
  const pageStatus = useSelector((state) => state.categories.text);

  return (
    <div>
      <p>Categories Page is:</p>
      <h2>{ pageStatus }</h2>
    </div>
  );
}

export default Categories;

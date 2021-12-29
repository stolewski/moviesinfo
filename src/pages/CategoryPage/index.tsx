import Spinner from 'components/Spinner';
import { useState, useEffect } from 'react';
import CategoryItem from 'components/CategoryItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategoryPosts, selectLoading } from 'store/movies/selectors';
import { loadCategoryPosts } from 'store/movies/actions';

import './styles.scss';

const CategoryPage = () => {
  const [category, setCategory] = useState<string>('thriller');
  const dispatch = useDispatch();
  const categoryPostList = useSelector(selectCategoryPosts);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(loadCategoryPosts(category));
  }, [dispatch, category]);
  return (
    <section className='categoryPosts'>
      <h2>
        Selected Category: <span>{category}</span>
      </h2>
      <div className='btn-wrapper'>
        <button onClick={() => setCategory('Comedy')}>Comedy</button>
        <button onClick={() => setCategory('Thriller')}>Thriller</button>
        <button onClick={() => setCategory('Drama')}>Drama</button>
        <button onClick={() => setCategory('Adventure')}>Adventure</button>
        <button onClick={() => setCategory('Horror')}>Horror</button>
        <button onClick={() => setCategory('Sci-fi')}>Sci-fi</button>
      </div>
      <div className='row justify-content-bentween'>
        {loading && <Spinner />}
        {categoryPostList.length > 0 &&
          categoryPostList.map(post => (
            <CategoryItem key={post.show.id} item={post} />
          ))}
      </div>
    </section>
  );
};

export default CategoryPage;

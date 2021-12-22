import MainItem from 'components/mainItem';
import Spinner from 'components/Spinner';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMainPosts } from 'store/mainPosts/actions';
import { selectLoading, selectMainPosts } from 'store/mainPosts/selectors';

import './styles.scss';

const Home = () => {
  const dispatch = useDispatch();
  const mainPostsList = useSelector(selectMainPosts);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(loadMainPosts());
  }, [dispatch]);

  return (
    <section className='homePage'>
      <div className='mainTitle-wrapper'>
        <h1>MOVIESinfo</h1>
        <p>The most popular movie database</p>
      </div>
      <div className='mainList-wrapper'>
        <div className='row'>
          {loading && <Spinner />}
          {mainPostsList.length > 0 &&
            mainPostsList
              .slice(0, 8)
              .map(movie => <MainItem key={movie.show.id} data={movie} />)}
        </div>
      </div>
    </section>
  );
};

export default Home;

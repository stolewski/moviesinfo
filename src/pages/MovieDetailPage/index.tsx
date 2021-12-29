import MovieDetail from 'components/MovieDetail/MovieDetail';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ID } from 'types/Id';
import { selectDetailMovie, selectLoading } from 'store/movies/selectors';
import { loadDetailMovie } from 'store/movies/actions';

import './styles.scss';
import Spinner from 'components/Spinner';

const MovieDetailMainPage = () => {
  const { id } = useParams<ID>();
  const dispatch = useDispatch();

  const movie = useSelector(selectDetailMovie);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    id && dispatch(loadDetailMovie(id));
  }, [dispatch, id]);

  return (
    <section className='singleMovie'>
      {loading ? (
        <Spinner />
      ) : movie ? (
        <MovieDetail params={movie} />
      ) : (
        <p>Info is not available</p>
      )}
    </section>
  );
};

export default MovieDetailMainPage;

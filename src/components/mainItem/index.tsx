import React from 'react';
import { IPost } from 'types/IPost';
import { NavLink } from 'react-router-dom';
import routeMovieDetail from 'pages/MovieDetailPage/routes';

import './styles.scss';

interface IMainItemParams {
  item: IPost;
}

const MainItem: React.FC<IMainItemParams> = ({ item }) => {
  return (
    <div className='col-10 col-sm-8 col-md-6 col-lg-3 mx-auto'>
      <div className='main-card'>
        <div className='poster'>
          {item.show.image ? (
            <img src={item.show.image.medium} alt='pic' />
          ) : (
            <p className='noPic'>No pic available</p>
          )}
        </div>
        <NavLink to={routeMovieDetail(item.show.id.toString())}>
          <h4 className='movie-title'>{item.show.name}</h4>
        </NavLink>
        <span className='movie-year'>
          {item.show.premiered ? item.show.premiered.slice(0, 4) : null}
        </span>
        {item.show.network ? (
          <span>({item.show.network.country.name})</span>
        ) : (
          <span>( – )</span>
        )}
        <div className='movie-genre'>
          {item.show.genres.length > 0 ? item.show.genres.join(', ') : <p>–</p>}
        </div>
      </div>
    </div>
  );
};

export default MainItem;

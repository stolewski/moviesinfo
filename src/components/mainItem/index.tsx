import React from 'react';
import { IPost } from 'types/IPost';
import { NavLink } from 'react-router-dom';
import routeMovieDetail from 'pages/MovieDetailPage/routes';

import './styles.scss';

interface IMainItemParams {
  data: IPost;
}

const MainItem: React.FC<IMainItemParams> = ({ data }) => {
  return (
    <div className='col-10 col-sm-8 col-md-6 col-lg-3 mx-auto'>
      <div className='main-card'>
        {data.show.image ? (
          <img src={data.show.image.medium} alt='pic' />
        ) : (
          <p>No pic available</p>
        )}
        <NavLink to={routeMovieDetail(data.show.id.toString())}>
          <h4 className='movie-title'>{data.show.name}</h4>
        </NavLink>
        <span className='movie-year'>{data.show.premiered.slice(0, 4)} </span>
        {data.show.network ? (
          <span>({data.show.network.country.name})</span>
        ) : (
          <span>( – )</span>
        )}
        <div className='movie-genre'>
          {data.show.genres.length > 0 ? data.show.genres.join(', ') : <p>–</p>}
        </div>
      </div>
    </div>
  );
};

export default MainItem;

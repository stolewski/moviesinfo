import React from 'react';
import { NavLink } from 'react-router-dom';
import { IPost } from 'types/IPost';
import routeMovieDetail from 'pages/MovieDetailPage/routes';

import './styles.scss';

interface ICategoryItemParams {
  item: IPost;
}
const CategoryItem: React.FC<ICategoryItemParams> = ({ item }) => {
  return (
    <div className='categoryCard col-lg-6 d-flex'>
      <div className='moviePic'>
        {item.show.image ? (
          <img src={item.show.image.medium} alt='pic' />
        ) : (
          <p className='noPic'>no picture available</p>
        )}
      </div>
      <div className='contentWrap'>
        <NavLink to={routeMovieDetail(item.show.id.toString())}>
          <h3>{item.show.name}</h3>
        </NavLink>
        {item.show.genres.length > 0 ? (
          <p>{item.show.genres.join(', ')}</p>
        ) : (
          <p>—</p>
        )}
      </div>
    </div>
  );
};

export default CategoryItem;

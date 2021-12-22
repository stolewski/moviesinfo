import React from 'react';
import { IPost } from 'types/IPost';
//import { IPost } from 'types/IPost';
import './styles.scss';

interface IMovieDetailParams {
  params: IPost['show'];
}
const MovieDetail: React.FC<IMovieDetailParams> = ({ params }) => {
  return (
    <div className='detailWrap row'>
      <div className='col-10 col-sm-8 col-lg-3 mx-auto'>
        <img src={params.image.original} alt='full_pic' />
      </div>
      <div className='col-lg-9'>
        <div className='title-wrap'>
          <h3>{params.name}</h3>
          <div className='rate'>
            <span className='star'>
              {params.rating.average ? params.rating.average : <span>–</span>}
              /10
            </span>
          </div>
        </div>
        <table>
          <tbody>
            <tr>
              <td className='desc'>YEAR:</td>
              <td>{params.premiered.slice(0, 4)}</td>
            </tr>
            <tr>
              <td className='desc'>LANGUAGE:</td>
              <td>{params.language}</td>
            </tr>
            <tr>
              <td className='desc'>COUNTRY:</td>
              {params.network ? (
                <td>{params.network.country.name}</td>
              ) : (
                <td>-</td>
              )}
            </tr>
            <tr>
              <td className='desc'>GENRES:</td>
              {params.genres.length > 0 ? (
                <td>{params.genres.join(', ')}</td>
              ) : (
                <td>-</td>
              )}
            </tr>
            <tr>
              <td className='desc'>DESCRIPTION: </td>
              <td>{params.summary.replace(/<\/?[^>]+(>|$)/g, '')}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovieDetail;

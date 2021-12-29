import React, { useState } from 'react';
import { loadSearchPosts } from 'store/movies/actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, selectSearchPosts } from 'store/movies/selectors';
import CategoryItem from 'components/CategoryItem';
import Spinner from 'components/Spinner';
import './styles.scss';

const SearchPage = () => {
  const [query, setQuery] = useState<string>('');
  const dispatch = useDispatch();
  const searchResult = useSelector(selectSearchPosts);
  const loading = useSelector(selectLoading);

  const searchHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loadSearchPosts(query));
  };

  return (
    <section className='search'>
      <form onSubmit={searchHandler}>
        <input
          type='text'
          value={query}
          placeholder='Example: drama'
          onChange={e => setQuery(e.target.value.trim())}
        />
        <button type='submit'>Go</button>
      </form>
      <div className='search-results'>
        <p className='results'>Search results:</p>
        <div className='row'>
          {loading && <Spinner />}
          {!query ? (
            <p className='enter'>Enter keyword to find movies</p>
          ) : searchResult.length > 0 ? (
            searchResult.map(el => <CategoryItem key={el.show.id} item={el} />)
          ) : (
            <p className='nores'>No results found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchPage;

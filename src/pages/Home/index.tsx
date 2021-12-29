import Spinner from 'components/Spinner';
import React, { Suspense } from 'react';
import MainList from 'components/mainList';
import { useResource } from 'resourses/resources';
import { IPost } from 'types/IPost';

import './styles.scss';

interface IResourse {
  resourse: {
    mainPosts: IMainPosts;
  };
}

interface IMainPosts {
  read(): IPost[] | undefined;
}

const Home = () => {
  const resource: IResourse['resourse'] = useResource();

  return (
    <section className='homePage'>
      <div className='mainTitle-wrapper'>
        <h1>MOVIESinfo</h1>
        <p>The most popular movie database</p>
      </div>
      <div className='mainList-wrapper'>
        <div className='row'>
          <Suspense fallback={<Spinner />}>
            <MainList resource={resource} />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Home;

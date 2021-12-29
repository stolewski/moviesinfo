import MainItem from 'components/mainItem';
import React from 'react';
import { IPost } from 'types/IPost';

interface IMainListParams {
  resource: {
    mainPosts: IMainPosts;
  };
}
interface IMainPosts {
  read(): IPost[] | undefined;
}

const MainList: React.FC<IMainListParams> = ({ resource }) => {
  const mainPostsList = resource.mainPosts.read()?.slice(0, 8);

  return (
    <>
      {mainPostsList ? (
        mainPostsList.map((post: IPost) => (
          <MainItem key={post.show.id} item={post} />
        ))
      ) : (
        <p>No items to show</p>
      )}
    </>
  );
};

export default MainList;

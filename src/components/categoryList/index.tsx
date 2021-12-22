import CategoryItem from 'components/CategoryItem';
import React from 'react';
import { IPost } from 'types/IPost';

interface ICategoryListParams {
  resource: {
    categoryPosts: ICategoryPosts;
  };
}
interface ICategoryPosts {
  read(): IPost[] | undefined;
}

const CategoryList: React.FC<ICategoryListParams> = ({ resource }) => {
  const categoryPostsList = resource.categoryPosts.read();
  return (
    <>
      {categoryPostsList ? (
        categoryPostsList.map((post: IPost) => (
          <CategoryItem key={post.show.id} item={post} />
        ))
      ) : (
        <p>No items to show</p>
      )}
    </>
  );
};

export default CategoryList;

import Spinner from 'components/Spinner';
import { Suspense } from 'react';
import CategoryList from 'components/categoryList';
import { useResource } from 'resourses/resources';
import { IPost } from 'types/IPost';

interface IResource {
  resource: {
    categoryPosts: ICategoryPosts;
  };
}
interface ICategoryPosts {
  read(): IPost[] | undefined;
}

const CategoryPage = () => {
  const resource: IResource['resource'] = useResource();
  return (
    <section className='categoryPosts'>
      <h2>
        Selected Category: <span>Crazy</span>
      </h2>
      <div className='row justify-content-bentween'>
        <Suspense fallback={<Spinner />}>
          <CategoryList resource={resource} />
        </Suspense>
      </div>
    </section>
  );
};

export default CategoryPage;

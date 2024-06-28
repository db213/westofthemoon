import { allPosts } from '../posts/types';
import MainFeaturedPost from './MainFeaturedPost';
import { Fragment } from 'react';


export default function HomeContent() {
  return (
    <Fragment>
      {allPosts.slice(0, 3).map((post, index) => (
        <MainFeaturedPost post={post} key={index} hasBottomMargin={index !== 2} />
      ))}
    </Fragment>
  );
}

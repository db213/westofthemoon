import { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import ErrorPage from '../ErrorPage';
import { allPosts } from './types';
import Markdown from './Markdown';


export function BlogPost(): ReactElement {
  const { id } = useParams();

  if (!id) {
    return <ErrorPage />;
  }

  const post = allPosts.find((post) => post.id === id)
  if (!post) {
    return <ErrorPage />;
  }

  return (
    <Markdown className="markdown">
      {post.content}
    </Markdown>
  );
}

import { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import ErrorPage from '../ErrorPage';
import { allPosts } from './types';
import Markdown from './Markdown';
import { Box, Grid } from '@mui/material';
import CountryCard from '../posts-by-country-page/CountryCard';


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
    <Grid container
      spacing={2}
      sx={{
        padding: '3vh',
      }}
    >
      <Grid item xs={12} sm={12} md={9} lg={9}>
        <Markdown className="markdown">
          {post.content}
        </Markdown>
      </Grid>
      <Box 
        item
        component={Grid}
        xs={0}
        sm={0}
        md={3}
        lg={3}
        display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }}
      >
        <div style={{ position: 'sticky', top: '2vh' }}>
          <CountryCard country={post.country} alwaysHovered={true} />
        </div>
      </Box>
    </Grid>
  );
}

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Post } from '../posts/types';
import { ReactElement } from 'react';


interface Props {
  post: Post;
}

export default function MainFeaturedPost(props: Props): ReactElement {
  const { post } = props;

  return (
    <Link variant="subtitle1" href={`post/${post.id}`} style={{ textDecoration: 'none' }}>
      <Paper
        sx={{
          corners: 'rounded',
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${post.image})`,
          display: 'block',
          height: '80vh',
        }}
      >
        <div
          style={{
            position: 'relative',
            marginTop: `${post.position.verticalOffset}%`,
            marginLeft: `${post.position.alignment === 'left' ? post.position.horizontalOffset : 0}%`,
            marginRight: `${post.position.alignment === 'right' ? post.position.horizontalOffset : 0}%`,
            float: post.position.alignment === 'right' ? 'right' : 'left',
          }}
        >
          <Typography 
            align={post.position.alignment}
            component="h1"
            variant="h3"
            color="inherit"
            gutterBottom
          >
            {post.title}
          </Typography>
          <Typography
            align={post.position.alignment}
            variant="h5"
            color="inherit"
            paragraph
          >
            {post.description}
          </Typography>
        </div>
      </Paper>
    </Link>
  );
}

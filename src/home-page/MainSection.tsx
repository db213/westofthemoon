import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from '../posts/Markdown';

interface MainProps {
  posts: ReadonlyArray<string>;
  title: string;
}

export default function MainSection(props: MainProps) {
  const { posts, title } = props;

  return (
    <Grid item xs={12} md={8} sx={{ '& .markdown': { py: 3 } }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post, index) => (
        <Markdown className="markdown" key={index}>
          {post}
        </Markdown>
      ))}
    </Grid>
  );
}
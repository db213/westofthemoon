import { Button, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";
import { Post } from "../posts/types";


interface Props {
  posts: Post[];
}

export default function PostSelection(props: Props): ReactElement {
  const { posts } = props;

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        height: '100%',
        backgroundColor: 'white',
        opacity: 0.8,
        borderRadius: '3px',
      }}
    >
      {posts.map((post, index) => (
        <Button
          color="headerText"  
          key={index}
          href={`/post/${post.id}`}
          sx={{
            paddingTop: 2,
            paddingBottom: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{ textAlign: 'center' }}
          >
            {post.title.toUpperCase()}
          </Typography>
        </Button>
      ))}
    </Stack>
  );
}

import { ReactElement } from 'react';
import { Grid } from '@mui/material';
import about from '../posts/about/about.md';
import Markdown from 'markdown-to-jsx';

export function AboutPost(): ReactElement {
  return (
    <Grid item xs={12} sm={12} md={9} lg={9}>
      <Markdown className="markdown">
        {about}
      </Markdown>
    </Grid>
  );
}

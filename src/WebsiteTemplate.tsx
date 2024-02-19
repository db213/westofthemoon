import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Footer from './Footer';
import { sections } from './constants/sections';
import { ReactNode } from 'react';


interface Props {
  child: ReactNode;
}

export default function WebsiteTemplate(props: Props) {
  const { child } = props;
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth={false} disableGutters={true}>
        <Header title="Blog" sections={sections} />
        {child}
        <Footer
          title="Footer"
          description="Something here to give the footer a purpose!"
        />
      </Container>
    </ThemeProvider>
  );
}

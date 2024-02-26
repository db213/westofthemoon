import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';
import { THEME } from './themes/palettes';


interface Props {
  child: ReactNode;
}

export default function WebsiteTemplate(props: Props) {
  const { child } = props;

  return (
    <ThemeProvider theme={THEME}>
      <CssBaseline />
      <Container maxWidth={false} disableGutters={true}>
        <Header />
        {child}
        <Footer
          title="Footer"
          description="Something here to give the footer a purpose!"
        />
      </Container>
    </ThemeProvider>
  );
}

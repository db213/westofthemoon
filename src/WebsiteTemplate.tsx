import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import Header from './header/Header';
import Footer from './footer/Footer';
import { ReactNode } from 'react';
import { THEME } from './themes/palettes';
import { Stack, alpha } from '@mui/material';


interface Props {
  child: ReactNode;
}

export default function WebsiteTemplate(props: Props) {
  const { child } = props;

  return (
    <ThemeProvider theme={THEME}>
      <CssBaseline />
      <Container maxWidth={false} disableGutters={true} sx={{ display: 'block' }}>
        <Stack>
          <Header />
          <div style={{ background: alpha(THEME.palette.headerText.light, 0.1) }}>
            {child}
          </div>
          <Footer />
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

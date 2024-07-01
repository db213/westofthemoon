import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import Header from './header/Header';
import Footer from './footer/Footer';
import { ReactElement, ReactNode, useState } from 'react';
import { THEME } from './themes/palettes';
import { Stack, alpha } from '@mui/material';
import HamburgerMenu from './hamburger-menu/HamburgerMenu';


interface Props {
  child: ReactNode;
}

export default function WebsiteTemplate(props: Props): ReactElement {
  const { child } = props;

  const [showHamburgerMenu, setShowHamburgerMenu] = useState<boolean>(false);

  return (
    <ThemeProvider theme={THEME}>
      <CssBaseline />
      <Container maxWidth={false} disableGutters={true} sx={{ display: 'block' }}>
        <Stack>
          <HamburgerMenu shown={showHamburgerMenu} setShowHamburgerMenu={() => setShowHamburgerMenu(false)} />
          <Header setShowHamburgerMenu={() => setShowHamburgerMenu(!showHamburgerMenu)} />
          <div style={{ background: alpha(THEME.palette.headerText.light, 0.1) }}>
            {child}
          </div>
          <Footer />
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

import { Button, Stack, Typography } from '@mui/material';
import { ReactElement } from 'react';
import { HeaderProps } from '../header/Header';
import { ROUTES } from '../routes/routes';
import { Instagram } from '@mui/icons-material';


interface Props extends HeaderProps {
  shown: boolean;
}

export default function HamburgerMenu(props: Props): ReactElement {
  const { setShowHamburgerMenu, shown } = props;

  return (shown ? (
      <Stack
        onClick={() => setShowHamburgerMenu()}
        alignItems="center"
        justifyContent="center"
        sx={{
          position: 'fixed',
          height: '100%',
          width: '100%',
          backgroundColor: 'white',
          zIndex: 1000,
        }}
      >
        <Button 
          color="headerText"
          href={ROUTES.home}
          size="large"
        >
          <Typography variant="h4">
            Home
          </Typography>
        </Button>
        <Button
          color="headerText"
          size="large"
          href={ROUTES.about}
        >
          <Typography variant="h4">
            About
          </Typography>
        </Button>
        <Button
          color="headerText"
          size="large"
          href={ROUTES.postsByCountry}
        >
          <Typography variant="h4">
            Guides
          </Typography>
        </Button>
        <Button
          color="headerText"
          href={ROUTES.instagram}
          size="large"
        >
          <Instagram />
        </Button>
      </Stack>
    ) : <></>
  );
}

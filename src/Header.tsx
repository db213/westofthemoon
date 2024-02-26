import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { Fragment } from 'react';
import { Instagram } from '@mui/icons-material';
import { ROUTES } from './routes/routes';
import { Grid, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';


export default function Header() {
  return (
    <Fragment>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{
          justifyContent: 'space-between',
          overflowX: 'auto',
          minHeight: '8vh',
          marginLeft: '2vh',
          marginRight: '2vh',
        }}
      >
        <Button
          color="headerText"
          size="large"
          href={ROUTES.home}
        >
          {/* TODO get logo and put here */}
          <img src="/" />
        </Button>
        <Button 
          color="headerText"
          href={ROUTES.home}
          size="large"
        >
          <Typography variant="h5">
            Home
          </Typography>
        </Button>
        <Button
          color="headerText"
          size="large"
          href={ROUTES.about}
        >
          <Typography variant="h5">
            About
          </Typography>
        </Button>
        <Button
          color="headerText"
          size="large"
          href={ROUTES.postsByCountry}
        >
          <Typography variant="h5">
            Guides
          </Typography>
        </Button>
        <Grid>
          <Button
            color="headerText"
            href={ROUTES.instagram}
            size="large"
          >
            <Instagram />
          </Button>
          <Button
            color="headerText"
            size="large"
          >
            <EmailIcon />
          </Button>
          <Button
            color="headerText"
            size="large"
          >
            <SearchIcon />
          </Button>
        </Grid>
      </Toolbar>
    </Fragment>
  );
}

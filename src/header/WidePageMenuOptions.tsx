import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { Fragment } from 'react';
import { Instagram } from '@mui/icons-material';
import { ROUTES } from '../routes/routes';
import { Grid, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';


export default function WidePageMenuOptions() {

  return (
    <Fragment>
        <Button 
          color="headerText"
          href={ROUTES.home}
          size="large"
          style={{ height: '100%' }}
        >
          <Typography variant="h5">
            Home
          </Typography>
        </Button>
        <Button
          color="headerText"
          size="large"
          href={ROUTES.about}
          style={{ height: '100%' }}
        >
          <Typography variant="h5">
            About
          </Typography>
        </Button>
        <Button
          color="headerText"
          size="large"
          href={ROUTES.postsByCountry}
          style={{ height: '100%' }}
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
    </Fragment>
  );
}

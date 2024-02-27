import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Fragment, useMemo } from 'react';
import { ROUTES } from '../routes/routes';
import logo from '../assets/logo.svg';
import { useWindowSize } from '../window-size/use-window-size';
import WidePageMenuOptions from './WidePageMenuOptions';
import { Typography } from '@mui/material';
import SmallPageMenuOptions from './SmallPageMenuOptions';

export default function Header() {

  const { innerWidth } = useWindowSize();
  const smallPage = useMemo(() => {
    return innerWidth < 630;
  }, [innerWidth]);

  return (
    <Fragment>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{
          justifyContent: 'space-between',
          overflowX: 'auto',
          height: '8vh',
        }}
      >
        <div
          style={{
            padding: '0.9vh',
            height: '100%',
          }}
        >
          <Button
            color="headerText"
            size="large"
            href={ROUTES.home}
            sx={{
              border: 1,
              height: '100%',
              padding: 0,
              paddingRight: 1,
            }}
          >
            <img
              src={logo}
              height="100%"
              style={{
                float: 'left',
                paddingRight: -1,
              }}
            />
            <Typography
              variant="subtitle1"
              textTransform="lowercase"
              sx={{
                lineHeight: 0.6,
                float: 'left',
              }}
            >
              a<br />
              modest<br />
              adventure
            </Typography>
          </Button>
        </div>
        { !smallPage ? <WidePageMenuOptions /> : <SmallPageMenuOptions /> }
      </Toolbar>
    </Fragment>
  );
}

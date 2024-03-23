import { Home, Instagram } from '@mui/icons-material';
import { Button, Divider, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { ROUTES } from '../routes/routes';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


export default function Footer() {

  return (
    <Box
      component="footer"
      sx={{
        color: 'headerText.dark',
        bgcolor: 'background.paper',
        py: 6
      }}
    >
      <Divider 
        sx={{
          borderColor: 'headerText.light',
          opacity: 0.5,
        }}
      />
      <Grid container columns={12}>
        <Grid item xs={12} md={3}>
          <Button
            color="headerText"
            href={ROUTES.home}
            size="large"
          >
            <Home />
          </Button>
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
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ArrowUpwardIcon />
          </Button>
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography
            sx={{
              textAlign: { xs: "left", md: "right" },
              paddingLeft: '0.53em',
              paddingRight: '0.53em',
            }}
          >
            {'\u00A9 a modest adventure 2024'}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

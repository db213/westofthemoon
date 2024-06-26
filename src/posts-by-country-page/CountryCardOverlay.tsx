import { Button, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";
import { Country, allPosts } from "../posts/types";


interface Props {
  country: Country;
  hovered: boolean;
}

export default function CountryCardOverlay(props: Props): ReactElement {
  const { country, hovered } = props;
  const postsInCountry = allPosts.filter((post) => post.country === country);

  return !hovered ? (
      <div
        style={{
          position: 'relative',
          textAlign: 'center',
          paddingTop: '20vh',
        }}
      >
        <Typography 
          variant="h4"
        >
          {country.toUpperCase()}
        </Typography>
      </div>
  ) : (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        height: '100%',
        backgroundColor: 'white',
        opacity: 0.8,
      }}
    >
      {postsInCountry.map((post, index) => (
        <Button
          color="headerText"  
          key={index}
          href={`/post/${post.id}`}
          sx={{
            paddingTop: 2,
            paddingBottom: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{ textAlign: 'center' }}
          >
            {post.title.toUpperCase()}
          </Typography>
        </Button>
      ))}
    </Stack>
  );
}

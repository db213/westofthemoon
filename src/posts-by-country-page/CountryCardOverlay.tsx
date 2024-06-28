import { Typography } from "@mui/material";
import { ReactElement } from "react";
import { Country, allPosts } from "../posts/types";
import PostSelection from "./PostSelection";


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
          sx={{ color: '#fff' }}
          variant="h4"
        >
          {country.toUpperCase()}
        </Typography>
      </div>
  ) : (
    <PostSelection posts={postsInCountry} />
  );
}

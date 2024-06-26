import { Paper } from "@mui/material";
import { ReactElement, useState } from "react";
import { COUNTRY_CARDS, Country } from "../posts/types";
import CountryCardOverlay from "./CountryCardOverlay";


interface Props {
  country: Country;
}

export default function CountryCard(props: Props): ReactElement {
  const { country } = props;
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <Paper 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        corners: 'rounded',
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${COUNTRY_CARDS[country].image})`,
        display: 'block',
        height: '50vh',
        width: '100%',
      }}
    >
      <CountryCardOverlay country={country} hovered={hovered} />
    </Paper>
  );
}

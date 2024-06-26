import { Grid } from "@mui/material";
import { ReactElement } from "react";
import { COUNTRIES } from "../posts/types";
import CountryCard from "./CountryCard";


export default function PostsByCountry(): ReactElement {

  return (
    <div style={{ paddingLeft: 24, paddingRight: 24 }}>
      <Grid container spacing={4}>
        {
          COUNTRIES.map((country, index) => {
            return (
              <Grid item xs={12} md={6} lg={3} key={index}>
                <CountryCard country={country} />
              </Grid>
            )
          })
        }
      </Grid>
    </div>
  );
}

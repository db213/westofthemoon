import { Button } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";


export default function SmallPageMenuOptions() {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <Button
        color="headerText"
        size="large"
        sx={{
          height: '100%',
          padding: 0,
        }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <MenuIcon />  
      </Button>  
    </Fragment>
  );
}

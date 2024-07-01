import { Button } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import MenuIcon from '@mui/icons-material/Menu';
import { HeaderProps } from "./Header";


export default function SmallPageMenuOptions(props: HeaderProps) {
  const { setShowHamburgerMenu } = props;

  return (
    <Fragment>
      <Button
        color="headerText"
        size="large"
        sx={{
          height: '100%',
          padding: 0,
        }}
        onClick={() => setShowHamburgerMenu()}
      >
        <MenuIcon />  
      </Button>  
    </Fragment>
  );
}

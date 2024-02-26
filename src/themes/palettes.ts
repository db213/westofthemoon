import { alpha, createTheme, getContrastRatio } from "@mui/material";

declare module '@mui/material/styles' {
  interface Palette {
    headerText: Palette['primary'];
  }

  interface PaletteOptions {
    headerText?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    headerText: true;
  }
}

const HEADER_TEXT_BASE = '#285225';
const HEADER_TEXT_MAIN = alpha(HEADER_TEXT_BASE, 0.7);

const PALETTE = {
  headerText: {
    main: HEADER_TEXT_MAIN,
    light: alpha(HEADER_TEXT_BASE, 0.5),
    dark: alpha(HEADER_TEXT_BASE, 0.9),
    contrastText: getContrastRatio(HEADER_TEXT_MAIN, '#fff') > 4.5 ? '#fff' : '#111',
  },
}

export const THEME = createTheme({
  palette: PALETTE,
})
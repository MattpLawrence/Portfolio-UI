import { createTheme} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    neutral: {
      main: 'rgb(244, 244, 245)',
      contrastText: '#2d243a',
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

// @babel-ignore-comment-in-output Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

export default theme;
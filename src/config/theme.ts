"use client";
import { responsiveFontSizes } from "@mui/material";
import { red } from "@mui/material/colors";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: "5rem",
      "@media (max-width:960px)": {
        fontSize: "4.2rem",
      },
    },
    h2: {
      fontSize: "3.8rem",
      letterSpacing: "normal",
      "@media (max-width:960px)": {
        fontSize: "3.4rem",
      },
    },
    h3: {
      fontSize: "3.2rem",
      letterSpacing: "normal",
      "@media (max-width:960px)": {
        fontSize: "2.8rem",
      },
    },
    h4: {
      fontSize: "2.4rem",
      lineHeight: 1.4,
      letterSpacing: "normal",
    },
    body1: {
      fontSize: "1.6rem",
      lineHeight: 1.4,
    },
    body2: {
      fontSize: "1.4rem",
      lineHeight: 1.4,
    },
    caption: {
      fontSize: "1.4rem",
      lineHeight: 1.4,
    },
    subtitle1: {
      fontSize: "1.4rem",
      lineHeight: 1.4,
    },
    subtitle2: {
      fontSize: "1.2rem",
      lineHeight: 1.4,
    },
    htmlFontSize: 16,
  },
  palette: {
    primary: {
      main: "#1A2B49",
    },
    secondary: {
      main: "#1593FF",
    },
    error: {
      main: red.A400,
    },
    info: {
      main: "#1593FF",
      light: "rgba(20, 150, 255, 0.08)",
    },
    text: {
      primary: "#1A2B49",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 660,
      md: 960,
      lg: 1218,
      xl: 1920,
    },
  },
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: "1.4rem",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: "1.6rem",
          transform: "translate(14px, -12px) scale(1) !important",
          backgroundColor: "#FFF",
          paddingRight: "2px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          resize: "block",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginTop: "12px",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: "1.6rem",
        },
      },
    },
    MuiImageList: {
      styleOverrides: {
        root: {
          overflow: "hidden",
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);

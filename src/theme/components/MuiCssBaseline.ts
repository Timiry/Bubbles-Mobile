import { ThemeOptions } from "@mui/material";

const isFirefox = navigator.userAgent.toLowerCase().includes("firefox");

const MuiCssBaseline: ThemeOptions["components"] = {
  MuiCssBaseline: {
    styleOverrides: (theme) => ({
      "*": {
        ...(isFirefox && {
          scrollbarColor: `${theme.palette.general.secondary} transparent`,
        }),
        "&::-webkit-scrollbar": {
          width: "6px",
          height: "6px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          background: theme.palette.general.secondary,
          borderRadius: "6px",
        },
      },
      body: {
        margin: 0,
        lineHeight: 1,
      },
    }),
  },
};

export default MuiCssBaseline;

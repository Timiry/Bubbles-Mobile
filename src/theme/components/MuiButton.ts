import { ThemeOptions } from "@mui/material";

const MuiButton: ThemeOptions["components"] = {
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: "40px",
        boxShadow: "unset",
        padding: "16px 30px",
        ...theme.typography.B2SemiBold,
        textTransform: "none",
      }),
      contained: ({ theme }) => ({
        backgroundColor: theme.palette.button.primary,
        color: theme.palette.button.secondaryBackground,
        "&:hover": {
          backgroundColor: theme.palette.button.primaryHover,
          boxShadow: "unset",
        },
      }),
      text: ({ theme }) => ({
        backgroundColor: theme.palette.button.secondaryBackground,
        color: theme.palette.text.accent,
        "&:hover": {
          color: theme.palette.button.secondaryHover,
          boxShadow: "unset",
        },
      }),
      outlined: ({ theme }) => ({
        backgroundColor: theme.palette.button.secondaryBackground,
        border: `2px solid ${theme.palette.button.secondary}`,
        color: theme.palette.text.accent,
        "&:hover": {
          border: `2px solid ${theme.palette.button.secondaryHover}`,
          color: theme.palette.button.secondaryHover,
          boxShadow: "unset",
        },
      }),
    },
    variants: [
      {
        props: { size: "small" },
        style: ({ theme }) => ({
          padding: "8px 24px",
          ...theme.typography.B5Bold,
        }),
      },
    ],
  },
};

export default MuiButton;

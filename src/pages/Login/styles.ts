import { Button, Grid, TextField, styled } from "@mui/material";

export const LoginLogoContainer = styled(Grid)(({ theme }) => ({
  background: `${theme.palette.general.secondary}`,
  justifyContent: "center",
  alignItems: "center",
  width: `43%`,
  height: `100vh`,
}));

export const FormWrapper = styled(Grid)(() => ({
  width: `57%`,
  height: `100vh`,
  justifyContent: "center",
  alignItems: "center",
}));

export const LoginInputField = styled(TextField)(() => ({
  marginTop: "28px",
  "& .MuiInputBase-input": {
    padding: 0,
    margin: "25px 16px 5px 16px",
    fontSize: "16px",
    fontStyle: "italic",
    fontWeight: "900",
    lineHeigth: "18.75px",
  },
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: "30px",
  width: "100%",
  height: "52px",
  backgroundColor: `${theme.palette.button.primary}`,
  "& :hover": {
    backgroundColor: `${theme.palette.button.secondary}`,
  },
}));

import { useAppSelector } from "~/store";
import { selectStep } from "~/store/slices/login";
import { PhoneForm } from "./components/PhoneForm";
import { FormWrapper, LoginLogoContainer } from "./styles";
import { OtpForm } from "./components/OtpForm";
import { Grid } from "@mui/material";
import Logo from "/bubbles-mobile.png";

const getContent = (step: string) => {
  switch (step) {
    case "phone":
      return <PhoneForm />;
    case "otp":
      return <OtpForm />;
    default:
      return null;
  }
};

const LoginPage = () => {
  const step = useAppSelector(selectStep);
  return (
    <Grid container flexDirection="row">
      <LoginLogoContainer item container>
        <img src={Logo} alt="" style={{ width: "200px", height: "200px" }} />
      </LoginLogoContainer>
      <FormWrapper container>{getContent(step)}</FormWrapper>
    </Grid>
  );
};

export default LoginPage;

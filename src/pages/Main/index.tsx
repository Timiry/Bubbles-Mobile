import Grid from "@mui/material/Grid";

import MainLayout from "~/components/layout/Main";
import MoneyInfo from "~/components/MoneyAccountInfo/index";

const info = {
  lastUpdate: "12:44",
  balanse: 12941.03,
  nextPaimentDate: "25.07.2024",
  nextPaimentAmount: 576,
  accountNumber: 6456846846,
};

const MainPage = () => {
  return (
    <MainLayout>
      <Grid container columnSpacing="8px" rowSpacing="12px">
        <Grid item>
          <MoneyInfo info={info}></MoneyInfo>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default MainPage;

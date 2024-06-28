import Grid from "@mui/material/Grid";

import MainLayout from "~/components/layout/Main";
import MoneyInfo from "~/components/MoneyAccountInfo/index";
import Traffic from "~/components/Traffic";
import Tariff from "~/components/Tariff";
import { Box, Typography } from "@mui/material";
//import tariff1 from "~/assets/imgs/tariff1.png";

const moneyAccountInfo = {
  lastUpdate: "12:44",
  balanse: 12941.03,
  nextPaimentDate: "25.07.2024",
  nextPaimentAmount: 576,
  accountNumber: 6456846846,
};

const allTrafficInfo = [
  {
    type: "Звонки",
    description:
      "Звонки на номера операторов Республики Крым, г. Севастополь и Краснодарского края - 800 минут",
    left: 394,
    inTotal: 800,
  },
  {
    type: "Интернет",
    description: "",
    left: 12,
    inTotal: 30,
  },
  {
    type: "SMS",
    description: "",
    left: 300,
    inTotal: 300,
  },
];

const tariffInfo = {
  imgUrl: "/tariff.jpg",
  title: "Моя семья M",
  description:
    "Звонки и SMS на номера Республики Крым, г. Севастополь и Краснодарского края",
  price: 650,
  staticPrice: true,
  active: true,
  traffic: [
    {
      type: "Звонки",
      description:
        "Звонки на номера операторов Республики Крым, г. Севастополь и Краснодарского края - 800 минут",
      count: 800,
    },
    {
      type: "Интернет",
      description: "",
      count: 100,
    },
    {
      type: "SMS",
      description: "",
      count: 100,
    },
  ],
};

const MainPage = () => {
  return (
    <MainLayout>
      <Grid container columnSpacing="8px" rowSpacing="60px" pb="80px">
        <Grid item mobile={12}>
          <MoneyInfo info={moneyAccountInfo}></MoneyInfo>
        </Grid>
        <Grid item>
          <Box mb="20px">
            <Typography variant="H3SemiBold" color="text.primary">
              Трафик
            </Typography>
          </Box>
          <Traffic allInfo={allTrafficInfo}></Traffic>
        </Grid>
        <Grid item>
          <Box mb="20px">
            <Typography variant="H3SemiBold" color="text.primary">
              Тариф
            </Typography>
          </Box>
          <Tariff info={tariffInfo}></Tariff>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default MainPage;

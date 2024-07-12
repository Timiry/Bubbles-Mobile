import MainLayout from "~/components/layout/Main";
import MoneyInfo from "~/components/MoneyAccountInfo/index";
import Traffic from "~/components/Traffic";
import Tariff from "~/components/Tariff";
import FallBack from "~/components/FallBack";
import { Box, Typography, Grid } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";

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
        <Grid item>
          <ErrorBoundary
            fallback={FallBack(
              "Не удалось получить информацию о счетах",
              "258px"
            )}
          >
            <MoneyInfo info={moneyAccountInfo}></MoneyInfo>
          </ErrorBoundary>
        </Grid>
        <Grid item>
          <Box mb="20px">
            <Typography variant="H3SemiBold" color="text.primary">
              Трафик
            </Typography>
          </Box>
          <ErrorBoundary
            fallback={FallBack(
              "Не удалось получить информацию о трафике",
              "130px",
              "940px"
            )}
          >
            <Traffic allInfo={allTrafficInfo}></Traffic>
          </ErrorBoundary>
        </Grid>
        <Grid item>
          <Box mb="20px">
            <Typography variant="H3SemiBold" color="text.primary">
              Тариф
            </Typography>
          </Box>
          <ErrorBoundary
            fallback={FallBack(
              "Не удалось получить информацию о тарифе",
              "436px",
              "450px"
            )}
          >
            <Tariff info={tariffInfo} />
          </ErrorBoundary>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default MainPage;

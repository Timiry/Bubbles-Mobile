//import { useSelector } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import { /*Navigate,*/ Route, Routes } from "react-router-dom";

import Button from "@mui/material/Button";

//import { accessTokenSelector } from "./store/slices/auth/auth";
import MainPage from "./pages/Main";
import LoginPage from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";
import TariffsPage from "./pages/Tariffs";

const tariffsInfo = [
  {
    imgUrl: "/tariffs/2.jpg",
    title: "Ракета",
    description:
      "Звонки и SMS на номера Республики Крым, г. Севастополь и Краснодарского края",
    price: 1250,
    staticPrice: true,
    active: false,
    traffic: [
      {
        type: "Звонки",
        description:
          "Звонки на номера операторов Республики Крым, г. Севастополь и Краснодарского края - 800 минут",
        count: 800,
        staticPrice: true,
      },
      {
        type: "Интернет",
        description: "",
        count: 100,
        staticPrice: true,
      },
      {
        type: "SMS",
        description: "",
        count: 100,
        staticPrice: true,
      },
    ],
  },
  {
    imgUrl: "/tariffs/3.jpg",
    title: "Семья",
    description:
      "Звонки и SMS на номера Республики Крым, г. Севастополь и Краснодарского края",
    //price: 650,
    staticPrice: false,
    active: false,
    traffic: [
      {
        type: "Звонки",
        description:
          "Звонки на номера операторов Республики Крым, г. Севастополь и Краснодарского края - 800 минут",
        count: 2,
        staticPrice: false,
      },
      {
        type: "Интернет",
        description: "",
        count: 50,
        staticPrice: false,
      },
      {
        type: "SMS",
        description: "",
        count: 8,
        staticPrice: false,
      },
    ],
  },
  {
    imgUrl: "/tariffs/4.jpg",
    title: "Общение",
    description:
      "Звонки и SMS на номера Республики Крым, г. Севастополь и Краснодарского края",
    //price: 650,
    staticPrice: false,
    active: false,
    traffic: [
      {
        type: "Звонки",
        description:
          "Звонки на номера операторов Республики Крым, г. Севастополь и Краснодарского края - 800 минут",
        count: 2,
        staticPrice: false,
      },
      {
        type: "Интернет",
        description: "",
        count: 50,
        staticPrice: false,
      },
      {
        type: "SMS",
        description: "",
        count: 8,
        staticPrice: false,
      },
    ],
  },
  {
    imgUrl: "/tariffs/5.jpg",
    title: "Отпуск",
    description:
      "Звонки и SMS на номера Республики Крым, г. Севастополь и Краснодарского края",
    price: 1250,
    staticPrice: true,
    active: false,
    traffic: [
      {
        type: "Звонки",
        description:
          "Звонки на номера операторов Республики Крым, г. Севастополь и Краснодарского края - 800 минут",
        count: 800,
        staticPrice: true,
      },
      {
        type: "Интернет",
        description: "",
        count: 100,
        staticPrice: true,
      },
      {
        type: "SMS",
        description: "",
        count: 100,
        staticPrice: true,
      },
    ],
  },
];

function App() {
  //const token = useSelector(accessTokenSelector);

  return (
    <ErrorBoundary
      fallback={
        <div>
          <span>Скрипт упал :(</span>
          <Button variant="contained" onClick={() => window.location.reload()}>
            Обновить страницу
          </Button>
        </div>
      }
    >
      <Routes>
        {/* <Route path="/" element={token ? <MainPage /> : <LoginPage />} />
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <LoginPage />}
        /> */}
        <Route path="/" element={<MainPage />} />
        <Route
          path="/tariffs"
          element={<TariffsPage allTariffsInfo={tariffsInfo} />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;

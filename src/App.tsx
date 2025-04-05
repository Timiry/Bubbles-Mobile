//import { useSelector } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import { /*Navigate,*/ Route, Routes } from "react-router-dom";

import Button from "@mui/material/Button";

//import { accessTokenSelector } from "./store/slices/auth/auth";
import MainPage from "./pages/Main";
import LoginPage from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";
import TariffsPage from "./pages/Tariffs";
import ServicesPage from "./pages/Services";
import ProfilePage from "./pages/Profile";

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

const servicesInfo = [
  {
    id: 1,
    title: "",
    description:
      "Интернет закончился раньше, чем вы планировали? Докупите еще 15 Гб на максимальной скорости.",
    values: [
      {
        price: "200 ₽/месяц",
        description: "Абонентская плата",
      },
      {
        price: "100 ₽",
        description: "При первом подключении",
      },
      {
        price: "300 ₽",
        description: "При повторн. подключении",
      },
      {
        price: "300 ₽",
        description: "При повторн. подключении",
      },
    ],
  },
  {
    id: 2,
    title: "",
    description:
      "Интернет закончился раньше, чем вы планировали? Докупите еще 15 Гб на максимальной скорости.",
    values: [
      {
        price: "200 ₽/месяц",
        description: "Абонентская плата",
      },
      {
        price: "100 ₽",
        description: "При первом подключении",
      },
      {
        price: "300 ₽",
        description: "При повторн. подключении",
      },
      {
        price: "300 ₽",
        description: "При повторн. подключении",
      },
      {
        price: "300 ₽",
        description: "При повторн. подключении",
      },
    ],
  },
  {
    id: 3,
    title: "",
    description:
      "Интернет закончился раньше, чем вы планировали? Докупите еще 15 Гб на максимальной скорости.",
    values: [
      {
        price: "200 ₽/месяц",
        description: "Абонентская плата",
      },
      {
        price: "100 ₽",
        description: "При первом подключении",
      },
      {
        price: "300 ₽",
        description: "При повторн. подключении",
      },
    ],
  },
  {
    id: 3,
    title: "",
    description:
      "Интернет закончился раньше, чем вы планировали? Докупите еще 15 Гб на максимальной скорости.",
    values: [
      {
        price: "200 ₽/месяц",
        description: "Абонентская плата",
      },
      {
        price: "100 ₽",
        description: "При первом подключении",
      },
    ],
  },
];

const profileInfo = {
  name: "Дмитрий Алексеевич Иванов",
  contractNumber: "645 684 68 46",
  accountNumber: "645 684 68 46",
  lastChangePassDate: "01.03.2025",
  telNumber: "+7 (978) 655-88-88",
};

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
        <Route
          path="/services"
          element={<ServicesPage allServicesInfo={servicesInfo} />}
        />
        <Route
          path="/profile"
          element={<ProfilePage profileInfo={profileInfo} />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;

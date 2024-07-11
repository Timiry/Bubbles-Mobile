//import { useSelector } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import { /*Navigate,*/ Route, Routes } from "react-router-dom";

import Button from "@mui/material/Button";

//import { accessTokenSelector } from "./store/slices/auth/auth";
import MainPage from "./pages/Main";
import LoginPage from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";

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
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;

import { useState } from "react";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import MainLayout from "~/components/layout/Main";

const MainPage = () => {
  const [count, setCount] = useState(0);

  return (
    <MainLayout>
      <Grid container columnSpacing="8px" rowSpacing="12px">
        <Grid item mobile={6}>
          <Button
            variant="contained"
            onClick={() => setCount((count) => count + 1)}
            fullWidth
          >
            count is {count}
          </Button>
        </Grid>
        <Grid item mobile={6}>
          <Button
            variant="text"
            onClick={() => setCount((count) => count + 1)}
            fullWidth
          >
            count is {count}
          </Button>
        </Grid>
        <Grid item mobile={6}>
          <Button
            variant="contained"
            size="small"
            onClick={() => setCount((count) => count + 1)}
            fullWidth
          >
            count is {count}
          </Button>
        </Grid>
        <Grid item mobile={6}>
          <Button
            variant="text"
            size="small"
            onClick={() => setCount((count) => count + 1)}
            fullWidth
          >
            count is {count}
          </Button>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default MainPage;

import { Button, Card, Grid, Typography } from "@mui/material";
import RestartIcon from "~/assets/icons/restart.svg?react";

const FallBack = (
  message: string,
  height: string = "130px",
  width: string = "450px"
) => {
  return (
    <Card variant="outlined" sx={{ borderRadius: "16px" }}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
        height={height}
        width={width}
      >
        <Typography
          variant="B5Bold"
          color="text.secondary"
          sx={{ fontStyle: "oblique" }}
        >
          {message}
        </Typography>
        <Button
          variant="text"
          size="small"
          onClick={() => window.location.reload()}
        >
          <RestartIcon />
          <Typography variant="B8SemiBold" color="text.accent">
            Обновить
          </Typography>
        </Button>
      </Grid>
    </Card>
  );
};

export default FallBack;

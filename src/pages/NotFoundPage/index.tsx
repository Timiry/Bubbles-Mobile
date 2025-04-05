import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="100vh"
    >
      <Grid container width="320px" height="182px" justifyContent="center">
        <Typography
          color="text.primary"
          variant="H2SemiBold"
          align="center"
          mb="24px"
        >
          404 - страница не найдена
        </Typography>
        <Typography
          color="text.secondary"
          variant="B8SemiBold"
          align="center"
          mb="24px"
        >
          Страница, на которую вы пытаетесь попасть, не существует или была
          удалена
        </Typography>
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{
            height: "52px",
            width: "218px",
            backgroundColor: "button.primary",
            "& :hover": {
              backgroundColor: "button.secondary",
            },
          }}
        >
          Перейти на главную
        </Button>
      </Grid>
    </Grid>
  );
};

export default NotFoundPage;

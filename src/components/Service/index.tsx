import {
  Box,
  Button,
  Card,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import MuiDivider from "../ui/MuiDivider";
import { StyledArrowRightIcon } from "./styles";

export interface IServiceInfo {
  id: number;
  title: string;
  description: string;
  values: IServiceValueInfo[];
}

interface IServiceValueInfo {
  price: string;
  description: string;
}

const Service = ({ info }: { info: IServiceInfo }) => {
  return (
    <Card variant="outlined" sx={{ borderRadius: "16px", maxWidth: "450px" }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <StyledArrowRightIcon />
          </IconButton>
        }
        title={`Услуга ${info.title}`}
      />
      <MuiDivider />
      <Grid container p="20px 20px 0">
        <Grid container>
          <Typography variant="B7Regular" color="text.secondary">
            {info.description}
          </Typography>
        </Grid>
        <Grid container columnSpacing="10px" rowSpacing="10px" pt="20px">
          {info.values.slice(1).map((item) => (
            <Grid item key={item.description}>
              <Box display={"flex"} flexDirection={"column"} width="199px">
                <Typography variant="H4Bold">{item.price}</Typography>
                <Typography variant="B7Regular" color="text.secondary">
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        p="10px 20px 20px"
      >
        <Box display={"flex"} flexDirection={"column"} width={"200px"}>
          <Typography variant="H4Bold">{info.values[0].price}</Typography>
          <Typography variant="B7Regular" color="text.secondary">
            {info.values[0].description}
          </Typography>
        </Box>
        <Button variant="contained" size="small">
          Подключить
        </Button>
      </Grid>
    </Card>
  );
};

export default Service;

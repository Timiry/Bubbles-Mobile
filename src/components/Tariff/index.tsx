import {
  Card,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import MuiDivider from "~/theme/components/MuiDivider";
import TariffTrafficItem, {
  ITariffTrafficInfo,
} from "./Components/TariffTrafficItem";
import { StyledArrowRightIcon } from "./styles";

interface ITariffInfo {
  imgUrl: string;
  title: string;
  description: string;
  price?: number;
  staticPrice: boolean;
  active: boolean;
  traffic: ITariffTrafficInfo[];
}

const Tariff = ({ info }: { info: ITariffInfo }) => {
  return (
    <Card variant="outlined" sx={{ borderRadius: "16px", maxWidth: "450px" }}>
      <CardMedia image={info.imgUrl} sx={{ height: 172 }} />
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <StyledArrowRightIcon />
          </IconButton>
        }
        title={`Тариф "${info.title}"`}
      />
      <MuiDivider />
      <Grid container p="20px">
        <Grid container columnSpacing="45px">
          {info.traffic?.map((item) => (
            <Grid item key={item.type}>
              <TariffTrafficItem info={item} />
            </Grid>
          ))}
        </Grid>
        <Grid container pt="12px">
          <Typography variant="B7Regular" color="text.secondary">
            {info.description}
          </Typography>
        </Grid>
      </Grid>
      <MuiDivider />
      <Grid container justifyContent="space-between" width="100%" p="20px">
        <Typography variant="H4Bold" color="text.primary">
          {info.staticPrice ? `${info.price} ₽/месяц` : "По тарифу"}
        </Typography>
        {info.active ? (
          <Typography variant="B2SemiBold" color="text.accent">
            Активен
          </Typography>
        ) : (
          ""
        )}
      </Grid>
    </Card>
  );
};

export default Tariff;

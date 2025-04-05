import Tariff, { ITariffInfo } from "~/components/Tariff";
import { Grid, Typography } from "@mui/material";
import MainLayout from "~/components/layout/Main";

const TariffsPage = ({
  allTariffsInfo,
}: {
  allTariffsInfo: Array<ITariffInfo>;
}) => {
  return (
    <MainLayout>
      <Typography variant="H3SemiBold" color="text.primary">
        Мобильная связь
      </Typography>
      <Grid container columnSpacing="40px" rowSpacing="40px" p="20px 0 80px">
        {allTariffsInfo?.map((info) => (
          <Grid key={info.title}>
            <Tariff info={info} />
          </Grid>
        ))}
      </Grid>
    </MainLayout>
  );
};

export default TariffsPage;

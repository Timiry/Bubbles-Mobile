import Tariff, { ITariffInfo } from "~/components/Tariff";
import { Grid } from "@mui/material";
import MainLayout from "~/components/layout/Main";

const TariffsPage = ({
  allTariffsInfo,
}: {
  allTariffsInfo: Array<ITariffInfo>;
}) => {
  return (
    <MainLayout>
      <Grid container columnSpacing="40px" rowSpacing="40px" pb="80px">
        {allTariffsInfo?.map((info) => (
          <Grid item key={info.title}>
            <Tariff info={info} />
          </Grid>
        ))}
      </Grid>
    </MainLayout>
  );
};

export default TariffsPage;

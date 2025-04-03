import { Grid, Typography } from "@mui/material";
import MainLayout from "~/components/layout/Main";
import Service, { IServiceInfo } from "~/components/Service";

const ServicesPage = ({
  allServicesInfo,
}: {
  allServicesInfo: Array<IServiceInfo>;
}) => {
  return (
    <MainLayout>
      <Typography variant="H3SemiBold" color="text.primary">
        Доступные услуги
      </Typography>
      <Grid container columnSpacing="40px" rowSpacing="40px" p="20px 0 80px">
        {allServicesInfo?.map((info) => (
          <Grid item key={info.id}>
            <Service info={info} />
          </Grid>
        ))}
      </Grid>
    </MainLayout>
  );
};

export default ServicesPage;

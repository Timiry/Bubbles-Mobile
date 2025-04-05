import TrafficItem, { ITrafficInfo } from "./Components/TrafficItem";
import { Grid } from "@mui/material";

const Traffic = ({ allInfo }: { allInfo: Array<ITrafficInfo> }) => {
  return (
    <Grid container columnSpacing="16px" rowSpacing="16px">
      {allInfo?.map((info) => (
        <Grid key={info.type}>
          <TrafficItem info={info} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Traffic;

import { Box, Typography } from "@mui/material";
import {
  StyledInfoIcon,
  MuiTooltip,
} from "~/components/Traffic/Components/TrafficItem/styles";

export interface ITariffTrafficInfo {
  type: string;
  description: string;
  count: number;
}

const trafficToMeasure = new Map([
  ["Звонки", "мин"],
  ["Интернет", "Гб"],
  ["SMS", "шт"],
]);

const TariffTrafficItem = ({ info }: { info: ITariffTrafficInfo }) => {
  return (
    <Box>
      <Typography variant="H4Bold" color="text.primary">
        {info.count}{" "}
        <Typography variant="B5Bold">
          {trafficToMeasure.get(info.type)}
        </Typography>
      </Typography>
      <Box display="flex" alignItems="center">
        <Typography variant="B7Regular" color="text.secondary">
          {info.type}
        </Typography>
        <MuiTooltip title={info.description} arrow placement="top">
          <a style={{ textDecoration: "none", cursor: "pointer" }}>
            <Box pl="4px" height="18px">
              <StyledInfoIcon />
            </Box>
          </a>
        </MuiTooltip>
      </Box>
    </Box>
  );
};

export default TariffTrafficItem;

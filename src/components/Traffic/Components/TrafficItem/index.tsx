import { Box, Card, CardContent, Typography } from "@mui/material";
import { MuiLinearProgress, StyledInfoIcon, MuiTooltip } from "./styles";

export interface ITrafficInfo {
  type: string;
  description: string;
  left: number;
  inTotal: number;
}

const trafficToMeasure = new Map([
  ["Звонки", "мин"],
  ["Интернет", "Гб"],
  ["SMS", "шт"],
]);

const TrafficItem = ({ info }: { info: ITrafficInfo }) => {
  return (
    <Card variant="outlined" sx={{ borderRadius: "16px", maxWidth: "180px" }}>
      <CardContent>
        <Box>
          <MuiTooltip
            title={`Осталось ${Math.round((info.left / info.inTotal) * 100)} %`}
            arrow
            placement="right"
          >
            <a style={{ textDecoration: "none", cursor: "pointer" }}>
              <Typography variant="H4Bold" color="text.primary">
                {info.left}{" "}
                <Typography variant="B5Bold">
                  {trafficToMeasure.get(info.type)}{" "}
                </Typography>
              </Typography>
              <Typography variant="B5Bold" color="text.secondary">
                / {info.inTotal}
              </Typography>
            </a>
          </MuiTooltip>
        </Box>
        <Box py="16px">
          <MuiLinearProgress
            variant="determinate"
            value={(info.left / info.inTotal) * 100}
          ></MuiLinearProgress>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography
            variant="B5Bold"
            color="text.primary"
            sx={{ fontStyle: "oblique" }}
          >
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
      </CardContent>
    </Card>
  );
};

export default TrafficItem;

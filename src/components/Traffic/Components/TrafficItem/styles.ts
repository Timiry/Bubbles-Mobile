import { styled } from "@mui/material";
import { LinearProgress, linearProgressClasses } from "@mui/material";
import InfoIcon from "~/assets/icons/info.svg?react";
import { stylesToColorSvg } from "~/theme/utils";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

export const MuiLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  width: 140,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.other.underline,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.button.primary,
  },
}));

export const StyledInfoIcon = styled(InfoIcon)(({ theme }) => ({
  ...stylesToColorSvg(theme.palette.icon.secondary),
}));

export const MuiTooltip = styled(Tooltip)(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    backgroundColor: theme.palette.general.information,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.general.information,
  },
}));

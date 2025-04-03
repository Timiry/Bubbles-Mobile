import { styled } from "@mui/material";
import ArrowRightIcon from "~/assets/icons/arrow-right.svg?react";
import { stylesToColorSvg } from "~/theme/utils";

export const StyledArrowRightIcon = styled(ArrowRightIcon)(({ theme }) => ({
  ...stylesToColorSvg(theme.palette.icon.secondary),
}));

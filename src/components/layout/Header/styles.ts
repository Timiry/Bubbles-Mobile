import { styled } from "@mui/material";
import Box from "@mui/material/Box";

import LocationIcon from "~/assets/icons/location.svg?react";
import { stylesToColorSvg } from "~/theme/utils";

export const HeaderContainer = styled(Box)(({ theme }) => ({
  borderBottom: `2px solid ${theme.palette.other.stroke}`,
}));

export const StyledLocationIcon = styled(LocationIcon)(({ theme }) => ({
  ...stylesToColorSvg(theme.palette.icon.secondary),
}));

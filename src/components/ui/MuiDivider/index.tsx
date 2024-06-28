import { styled } from "@mui/material";
import Divider from "@mui/material/Box";

const MuiDivider = styled(Divider)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.other.stroke}`,
}));

export default MuiDivider;

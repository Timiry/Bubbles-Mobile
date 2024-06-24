import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

import LogoImage from "~/components/ui/Logo";

import AdaptiveWrapper from "../AdaptiveWrapper";
import { HeaderContainer, StyledLocationIcon } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <AdaptiveWrapper>
        <Box height="90px" display="flex" alignItems="center">
          <Grid container justifyContent="space-between" wrap="nowrap">
            <Grid item>
              <Grid container>
                <Grid item pt="20px" pb="10px" px="5px">
                  <LogoImage size="50px" />
                </Grid>
                <Grid item py="30px">
                  <Link href="/" pl="20px">
                    <Typography variant="B1Bold" color="text.primary">
                      Личный кабинет
                    </Typography>
                  </Link>
                  <Link href="https://bubbles-mobile.com" pl="30px">
                    <Typography variant="B1Bold" color="text.secondary">
                      Официальный сайт
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item py="32px" display="flex" alignItems="center">
              <Box pr="6px">
                <StyledLocationIcon />
              </Box>
              <Typography variant="B1Bold" color="text.secondary">
                г. Симферополь
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </AdaptiveWrapper>
    </HeaderContainer>
  );
};

export default Header;

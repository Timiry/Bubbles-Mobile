import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

import LogoImage from "~/components/ui/Logo";

import AdaptiveWrapper from "../AdaptiveWrapper";
import { HeaderContainer, MenuContainer, StyledLocationIcon } from "./styles";
import { useLocation } from "react-router-dom";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <AdaptiveWrapper>
          <Box height="90px" display="flex" alignItems="center">
            <Grid container justifyContent="space-between" wrap="nowrap">
              <Grid item>
                <Grid container>
                  <Grid item pt="20px" pb="10px" px="5px">
                    <LogoImage size="50px" />
                  </Grid>
                  <Grid item py="35px">
                    <Link href="/" pl="20px" sx={{ textDecoration: "none" }}>
                      <Typography variant="B1Bold" color="text.primary">
                        Личный кабинет
                      </Typography>
                    </Link>
                    <Link
                      href="https://bubbles-mobile.com"
                      pl="30px"
                      sx={{ textDecoration: "none" }}
                    >
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
      <MenuContainer>
        <AdaptiveWrapper>
          <Box
            height="80px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <MenuItem title="Главная" href="/" />
              <MenuItem title="Тарифы" href="/tariffs" />
              <MenuItem title="Услуги" href="/services" />
              <MenuItem title="Профиль" href="/profile" />
            </Box>
            <Box
              height="52px"
              p="15px"
              bgcolor="icon.iconBackground"
              borderRadius="8px"
            >
              <Typography variant="B1Bold" color="text.primary">
                +7 (978) 655-88-88
              </Typography>
            </Box>
          </Box>
        </AdaptiveWrapper>
      </MenuContainer>
    </>
  );
};

export default Header;

const MenuItem = ({ title, href }: { title: string; href: string }) => {
  const { pathname } = useLocation();

  return (
    <Link href={href} pl="20px" sx={{ textDecoration: "none" }}>
      <Typography
        variant="B1Bold"
        color={pathname === href ? "text.primary" : "text.secondary"}
      >
        {title}
      </Typography>
    </Link>
  );
};

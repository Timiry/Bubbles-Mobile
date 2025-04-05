import { Box, Card, Grid, Typography } from "@mui/material";
import MainLayout from "~/components/layout/Main";
import MuiDivider from "~/components/ui/MuiDivider";
import MuiSwitch from "~/components/ui/MuiSwitch";
import ChangePasswordForm from "./components/ChangePasswordForm";

interface IProfileInfo {
  name: string;
  contractNumber: string;
  accountNumber: string;
  lastChangePassDate: string;
  telNumber: string;
}

const ProfilePage = ({ profileInfo }: { profileInfo: IProfileInfo }) => {
  return (
    <MainLayout>
      <Grid container rowSpacing="60px" pb="80px" direction="column">
        <Grid container rowSpacing="30px" direction="column">
          <Grid>
            <Typography variant="H3SemiBold" color="text.primary">
              Личные данные
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="H3SemiBold" color="text.primary">
              {profileInfo.name}
            </Typography>
            <Card
              variant="outlined"
              sx={{
                borderRadius: "16px",
                maxWidth: "450px",
                marginTop: "20px",
              }}
            >
              <Box display="flex" justifyContent="space-between" p="20px">
                <Typography variant="B4Regular" color="text.primary">
                  Номер контракта
                </Typography>
                <Typography variant="B1Bold" color="text.primary">
                  {profileInfo.contractNumber}
                </Typography>
              </Box>
              <MuiDivider />
              <Box display="flex" justifyContent="space-between" p="20px">
                <Typography variant="B4Regular" color="text.primary">
                  Номер лицевого счета
                </Typography>
                <Typography variant="B1Bold" color="text.primary">
                  {profileInfo.accountNumber}
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
        <Grid container rowSpacing="40px" direction="column">
          <Grid>
            <ChangePasswordForm
              lastChangeDate={profileInfo.lastChangePassDate}
              telNumber={profileInfo.telNumber}
            />
          </Grid>
          <Grid>
            <Card
              variant="outlined"
              sx={{
                borderRadius: "16px",
                maxWidth: "450px",
                p: "20px",
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="H4Bold" color="text.primary">
                  Двухфакторная аутентификация
                </Typography>
                <MuiSwitch defaultChecked />
              </Box>
              <Typography maxWidth="250px">
                Подтверждение входа в учетную запись через код по SMS
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default ProfilePage;

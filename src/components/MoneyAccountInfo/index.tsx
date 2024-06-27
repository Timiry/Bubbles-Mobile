import { Button, Card, Grid, Typography } from "@mui/material";
import MuiDivider from "~/theme/components/MuiDivider";

interface IMoneyAccountInfo {
  lastUpdate: string;
  balanse: number;
  nextPaimentDate: string;
  nextPaimentAmount: number;
  accountNumber: number;
}

const MoneyInfo = ({ info }: { info: IMoneyAccountInfo }) => {
  function accountNumberFormat(accountNumber: number) {
    const pre = accountNumber.toString();
    return (
      pre.slice(0, 3) +
      " " +
      pre.slice(3, 6) +
      " " +
      pre.slice(6, 8) +
      " " +
      pre.slice(8)
    );
  }

  return (
    <Card variant="outlined" sx={{ borderRadius: "16px", maxWidth: "450px" }}>
      <Grid container p="20px">
        <Grid item pt="10px">
          <Typography variant="B7Regular" color="text.secondary">
            Обновлено в {info.lastUpdate}
          </Typography>
        </Grid>
        <Grid item width="100%" pt="8px">
          <Grid container alignItems="center" justifyContent="space-between">
            <Typography variant="H1Bold" color="text.primary">
              {info.balanse.toLocaleString()} ₽
            </Typography>
            <Button
              variant="contained"
              size="small"
              sx={{ textTransform: "none" }}
            >
              Пополнить
            </Button>
          </Grid>
        </Grid>
        <Grid item pt="50px">
          <Typography variant="B4Regular" color="text.primary">
            Следующее списание по тарифу {info.nextPaimentDate} в размере{" "}
            <Typography variant="B1Bold" color="text.primary">
              {info.nextPaimentAmount.toLocaleString()} ₽
            </Typography>
          </Typography>
        </Grid>
      </Grid>
      <MuiDivider></MuiDivider>
      <Grid container justifyContent="space-between" width="100%" p="20px">
        <Typography variant="B4Regular" color="text.primary">
          Номер лицевого счета
        </Typography>
        <Typography variant="B1Bold" color="text.primary">
          {accountNumberFormat(info.accountNumber)}
        </Typography>
      </Grid>
    </Card>
  );
};

export default MoneyInfo;

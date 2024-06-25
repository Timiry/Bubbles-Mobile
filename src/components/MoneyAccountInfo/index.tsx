import { Button, Card, CardContent, Grid, Typography } from "@mui/material";

interface IMoneyAccountInfo {
  lastUpdate: string;
  balanse: number;
  nextPaimentDate: string;
  nextPaimentAmount: number;
  accountNumber: number;
}

const MoneyInfo = ({ info }: { info: IMoneyAccountInfo }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container>
          <Grid item>
            <Typography variant="B7Regular" color="text.secondary">
              Обновлено в {info.lastUpdate}
            </Typography>
          </Grid>
          <Grid item width="100%">
            <Grid container alignItems="center" justifyContent="space-between">
              <Typography variant="H1Bold" color="text.primary">
                {info.balanse}
              </Typography>
              <Button variant="contained" size="small">
                Пополнить
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="B4Regular" color="text.primary">
              Следующее списание по тарифу {info.nextPaimentDate} в размере{" "}
              {info.nextPaimentAmount}
            </Typography>
          </Grid>
          <Grid item width="100%">
            <Grid container justifyContent="space-between">
              <Typography variant="B4Regular" color="text.primary">
                Номер лицевого счета
              </Typography>
              <Typography variant="B1Bold" color="text.primary">
                {info.accountNumber}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MoneyInfo;

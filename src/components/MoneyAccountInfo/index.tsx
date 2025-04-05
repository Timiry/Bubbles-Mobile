import { useState } from "react";
import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import MuiDivider from "~/components/ui/MuiDivider";
import CloseIcon from "~/assets/icons/close.svg?react";

interface IMoneyAccountInfo {
  lastUpdate: string;
  balanse: number;
  nextPaimentDate: string;
  nextPaimentAmount: number;
  accountNumber: number;
}

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

const MoneyInfo = ({ info }: { info: IMoneyAccountInfo }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card variant="outlined" sx={{ borderRadius: "16px", maxWidth: "450px" }}>
      <Grid container p="20px">
        <Grid pt="10px">
          <Typography variant="B7Regular" color="text.secondary">
            Обновлено в {info.lastUpdate}
          </Typography>
        </Grid>
        <Grid width="100%" pt="8px">
          <Grid container alignItems="center" justifyContent="space-between">
            <Typography variant="H1Bold" color="text.primary">
              {info.balanse.toLocaleString()} ₽
            </Typography>
            <Button variant="contained" size="small" onClick={handleClickOpen}>
              Пополнить
            </Button>
          </Grid>
        </Grid>
        <Grid pt="50px">
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

      <Dialog
        onClose={handleClose}
        open={open}
        PaperProps={{
          style: {
            borderRadius: "16px",
            padding: "60px 60px 50px",
          },
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 24,
            top: 24,
            p: "0",
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle variant="H2SemiBold" sx={{ m: 0, p: 0, width: 330 }}>
          Пополнение счета
        </DialogTitle>
        <DialogContent sx={{ width: "330px", m: "8px 0 30px", p: "0" }}>
          <Typography
            variant="B5Bold"
            color="text.secondary"
            sx={{ fontStyle: "oblique" }}
          >
            Сумма указывается без учёта комиссии
          </Typography>
          <TextField
            autoFocus
            id="name"
            name="phone"
            type="phone"
            label="Номер телефона"
            fullWidth
            variant="outlined"
            sx={{
              marginTop: "28px",
              "& .MuiInputBase-input": {
                padding: 0,
                margin: "25px 16px 5px 16px",
                fontSize: "16px",
                fontStyle: "italic",
                fontWeight: "900",
                lineHeigth: "18.75px",
              },
            }}
            InputProps={{
              sx: {
                height: "52px",
                borderRadius: "8px",
              },
            }}
            InputLabelProps={{
              shrink: false,
              sx: {
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "18px",
                marginTop: "-10px",
                marginLeft: "1px",
              },
            }}
          />
          <TextField
            autoFocus
            id="name"
            name="sum"
            label="Сумма"
            placeholder="10-15000"
            fullWidth
            variant="outlined"
            sx={{
              marginTop: "28px",
              "& .MuiInputBase-input": {
                padding: 0,
                margin: "25px 16px 5px 16px",
                fontSize: "16px",
                fontStyle: "italic",
                fontWeight: "900",
                lineHeigth: "18.75px",
              },
            }}
            InputProps={{
              sx: {
                height: "52px",
                borderRadius: "8px",
              },
            }}
            InputLabelProps={{
              shrink: false,
              sx: {
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "18px",
                marginTop: "-10px",
                marginLeft: "1px",
              },
            }}
          />
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", p: "0" }}>
          <Button variant="contained" autoFocus type="submit" fullWidth>
            Пополнить
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default MoneyInfo;

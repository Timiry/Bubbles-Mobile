import {
  Card,
  Box,
  Typography,
  Button,
  TextField,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CloseIcon from "@mui/icons-material/Close";

const ChangePasswordForm = ({
  lastChangeDate,
  telNumber,
}: {
  lastChangeDate: string;
  telNumber: string;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setNewPassword("");
    setConfirmPassword("");
  };

  const handlePasswordChange = () => {
    if (newPassword == confirmPassword) setOpenDialog(true);
  };

  const handleConfirmCode = () => {
    // Здесь можно добавить логику для подтверждения кода
    console.log("Код подтвержден:", verificationCode);
    setOpenDialog(false);
    handleCancelClick(); // Возвращаемся к первоначальному виду
  };

  return (
    <Box>
      <Typography variant="H3SemiBold" color="text.primary">
        Настройки профиля
      </Typography>
      <Card
        variant="outlined"
        sx={{
          borderRadius: "16px",
          maxWidth: "450px",
          marginTop: "20px",
          p: "20px",
        }}
      >
        {!isEditing ? (
          <>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="H4Bold" color="text.primary">
                Пароль
              </Typography>
              <Button
                size="small"
                sx={{ p: "10px 2px" }}
                onClick={handleEditClick}
              >
                Изменить
              </Button>
            </Box>
            <Typography>Обновлен {lastChangeDate}</Typography>
          </>
        ) : (
          <>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="H4Bold" color="text.primary">
                Пароль
              </Typography>
              <Button
                size="small"
                sx={{ p: "10px 2px" }}
                onClick={handleCancelClick}
              >
                Отмена
              </Button>
            </Box>
            <TextField
              label="Новый пароль"
              type={showPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              fullWidth
              variant="outlined"
              margin="normal"
              InputProps={{
                sx: { borderRadius: "8px" },
                endAdornment: (
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
            <TextField
              label="Подтвердите новый пароль"
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              fullWidth
              variant="outlined"
              margin="normal"
              InputProps={{
                sx: { borderRadius: "8px" },
                endAdornment: (
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
            {newPassword !== confirmPassword ? (
              <Typography color="input.error">Пароли не совпадают</Typography>
            ) : (
              <></>
            )}
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={handlePasswordChange}
              sx={{ mt: "25px" }}
            >
              Изменить пароль
            </Button>
          </>
        )}
      </Card>
      {/* Диалоговое окно для подтверждения кода */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        PaperProps={{
          style: {
            borderRadius: "16px",
            padding: "60px 60px 50px",
          },
        }}
      >
        <DialogTitle variant="H2SemiBold" sx={{ pl: "0" }}>
          Введите код из SMS
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => setOpenDialog(false)}
          sx={{
            position: "absolute",
            right: 24,
            top: 24,
            p: "0",
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{ width: "330px", p: "0" }}>
          <Typography
            variant="B5Bold"
            color="text.secondary"
            sx={{ fontStyle: "oblique" }}
          >
            Код отправлен на номер: {telNumber}
          </Typography>
          <TextField
            label="Код из SMS"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            fullWidth
            variant="outlined"
            margin="normal"
            InputProps={{
              sx: { borderRadius: "8px" },
            }}
          />
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", p: "30px 0 0" }}>
          <Button
            variant="contained"
            onClick={handleConfirmCode}
            color="primary"
            sx={{ width: "330px" }}
          >
            Подтвердить
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ChangePasswordForm;

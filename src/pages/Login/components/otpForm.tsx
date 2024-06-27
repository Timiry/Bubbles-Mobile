import {
  Box,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useAppDispatch } from "~/store";
import { LoginInputField, SubmitButton } from "../styles";
import { complete, phone } from "~/store/slices/auth/auth";
import { useState } from "react";
import {
  Visibility,
  VisibilityOff,
} from "~/components/svgComponents/PasswordVisibilityIcons";
import { useNavigate } from "react-router-dom";
import { OtpCountdown } from "./MemoCountdown";

type OtpNumber = {
  otp: string;
};

export const OtpForm = () => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<OtpNumber>({
    defaultValues: { otp: "" },
  });

  const navigate = useNavigate();

  const checkOtp = () => true; //заглушка

  const dispatch = useAppDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const onSubmit = (data: OtpNumber) => {
    if (data.otp) {
      if (checkOtp()) {
        dispatch(complete());
        goToMainPage();
      }
    } else {
      setError("otp", { message: "Неверный пароль" });
    }
  };

  const goToMainPage = () => navigate(`/`);

  const handleClickReturn = () => {
    dispatch(phone());
  };

  return (
    <FormControl>
      <Grid width={"330px"} flexDirection={"column"} container>
        <Typography variant="H2SemiBold" color="text.primary" mb="14px">
          Вход по SMS
        </Typography>
        <Typography variant="B4Regular" color="text.primary" mb="10px">
          Код отправлен на номер {localStorage.getItem("phoneNumber")}
        </Typography>
        <Typography
          variant="B8SemiBold"
          color="text.accent"
          onClick={handleClickReturn}
        >
          Вернуться назад
        </Typography>
        <Grid container justifyContent="center" alignItems="center">
          <Controller
            name="otp"
            control={control}
            render={({ field }) => (
              <LoginInputField
                type={showPassword ? "text" : "password"}
                {...field}
                variant="outlined"
                label="Код из SMS"
                InputProps={{
                  sx: {
                    height: "52px",
                    borderRadius: "8px",
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
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
                fullWidth
                error={errors.otp !== undefined}
                helperText={errors.otp?.message}
              ></LoginInputField>
            )}
          />
        </Grid>
        <OtpCountdown />
        <SubmitButton
          variant="contained"
          disabled={!isValid}
          onClick={handleSubmit(onSubmit)}
        >
          Войти
        </SubmitButton>
        <Box
          display="flex"
          flexDirection="column"
          gap="2px"
          justifyContent="center"
          marginTop="30px"
        >
          <Typography
            variant="B8SemiBold"
            color="text.secondary"
            align="center"
          >
            Нажимая “Войти”, Вы принимаете условия
          </Typography>
          <Typography variant="B8SemiBold" color="text.accent" align="center">
            пользовательского соглашения
          </Typography>
        </Box>
      </Grid>
    </FormControl>
  );
};

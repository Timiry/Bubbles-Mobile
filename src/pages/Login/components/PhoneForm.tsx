import { Grid, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { LoginInputField, SubmitButton } from "../styles";
import { setOtpStep } from "~/store/slices/login";
import { useAppDispatch } from "~/store";

type PhoneNumber = {
  phoneNumber: string;
};

export const PhoneForm = () => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<PhoneNumber>({
    defaultValues: { phoneNumber: "" },
  });
  const dispatch = useAppDispatch();
  const onSubmit = (data: PhoneNumber) => {
    if (data.phoneNumber) {
      if (data.phoneNumber.length <= 18) {
        if (/(?:\+|\d)[\d\-() ]{9,}\d/.test(data.phoneNumber)) {
          localStorage.setItem("phoneNumber", data.phoneNumber);
          dispatch(setOtpStep());
        } else {
          setError("phoneNumber", { message: "Неправильно введён номер" });
        }
      } else {
        setError("phoneNumber", { message: "Слишком длинный номер" });
      }
    }
  };

  return (
    <Grid width={"330px"} flexDirection={"column"} container>
      <Typography variant="H2SemiBold" color="text.primary">
        Вход по SMS
      </Typography>
      <Grid container justifyContent="center" alignItems="center">
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <LoginInputField
              {...field}
              variant="outlined"
              label="Номер телефона"
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
              fullWidth
              error={errors.phoneNumber !== undefined}
              helperText={errors.phoneNumber?.message}
            ></LoginInputField>
          )}
        />
      </Grid>
      <SubmitButton
        variant="contained"
        disabled={!isValid}
        onClick={handleSubmit(onSubmit)}
      >
        Получить SMS-код
      </SubmitButton>
    </Grid>
  );
};

import { Box, Typography } from "@mui/material";
import { memo, useReducer, useState } from "react";
import Countdown, { CountdownRenderProps } from "react-countdown";
import Restart from "~/assets/icons/restart.svg?react";

export const CountdownApi = () => {
  const [date, setDate] = useState(Date.now() + 10000);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const handleResetClick = () => {
    setDate(Date.now() + 10000);
  };

  const renderer = ({ formatted, completed }: CountdownRenderProps) => {
    if (completed) {
      return (
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          mt="24px"
          gap="3px"
          height="24px"
        >
          <Typography
            variant="B8SemiBold"
            color="text.accent"
            onClick={handleResetClick}
          >
            Отправить SMS повторно
          </Typography>
          <Restart></Restart>
        </Box>
      );
    } else {
      return (
        <Box mt="24px" height="24px">
          <Typography variant="B8SemiBold" color="text.accent">
            Отправить SMS повторно через {formatted.minutes}:{formatted.seconds}
          </Typography>
        </Box>
      );
    }
  };

  const handleUpdate = () => {
    forceUpdate();
  };

  return (
    <Countdown
      key={date}
      date={date}
      onComplete={handleUpdate}
      renderer={renderer}
    />
  );
};

export const OtpCountdown = memo(CountdownApi);

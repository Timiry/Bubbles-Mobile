import { Box, Typography } from "@mui/material";
import { Component, ReactNode, memo } from "react";
import Countdown, { CountdownApi, CountdownRenderProps } from "react-countdown";
import { RestartIcon } from "~/components/svgComponents/RestartIcon";

export default class CountdownApiExample extends Component {
  countdownApi: CountdownApi | null = null;
  state = { date: Date.now() + 10000 };

  handleResetClick = (): void => {
    console.log(121);
    this.setState({ date: Date.now() + 10000 });
  };

  renderer = ({ formatted, completed }: CountdownRenderProps) => {
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
          <Typography variant="B8SemiBold" color="text.accent">
            Отправить SMS повторно
          </Typography>
          <RestartIcon></RestartIcon>
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

  handleUpdate = (): void => {
    this.forceUpdate();
  };

  setRef = (countdown: Countdown | null): void => {
    if (countdown) {
      this.countdownApi = countdown.getApi();
    }
  };

  isCompleted(): boolean {
    return !!(this.countdownApi && this.countdownApi.isCompleted());
  }
  render(): ReactNode {
    return (
      <Box onClick={this.handleResetClick}>
        <Countdown
          key={this.state.date}
          ref={this.setRef}
          date={this.state.date}
          onMount={this.handleUpdate}
          onStart={this.handleUpdate}
          onPause={this.handleUpdate}
          onComplete={this.handleUpdate}
          renderer={this.renderer}
        />
      </Box>
    );
  }
}

export const OtpCountdown = memo(CountdownApiExample);

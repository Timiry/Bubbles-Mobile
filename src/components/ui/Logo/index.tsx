import { CardMedia, CardMediaProps } from "@mui/material";

interface LogoImageProps extends CardMediaProps {
  size: number | string;
}

const LogoImage = ({ size, ...restProps }: LogoImageProps) => {
  return (
    <CardMedia
      component="img"
      image="/bubbles-mobile.png"
      height={size}
      {...restProps}
    />
  );
};

export default LogoImage;

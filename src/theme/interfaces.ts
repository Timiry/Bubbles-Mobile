import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    desktop: true;
  }
}

declare module "@mui/material/styles" {
  interface TypeText {
    primary: string;
    secondary: string;
    accent: string;
    status: string;
  }

  interface Palette {
    general: Palette["primary"];
    icon: Palette["primary"];
    input: Palette["primary"];
    button: Palette["primary"];
    other: Palette["primary"];
    customText: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    general?: PaletteOptions["primary"];
    icon?: PaletteOptions["primary"];
    input?: PaletteOptions["primary"];
    button?: PaletteOptions["primary"];
    other?: PaletteOptions["primary"];
    customText?: PaletteOptions["primary"];
  }

  interface PaletteColor {
    accent: string;
    primary: string;
    secondary: string;
    information: string;
    disabled: string;
    success: string;
    error: string;
    warning: string;
    light: string;
    iconBackground: string;
    accentDisabled: string;
    status: string;
    mask: string;
    active: string;
    primaryDisabled: string;
    primaryHover: string;
    secondaryBackground: string;
    secondaryDisabled: string;
    secondaryHover: string;
    stroke: string;
    underline: string;
    underlineAccent: string;
    shimmer: string;
    shadow: string;
    progressBar: string;
    sliderBackground: string;
  }

  interface PaletteColorOptions {
    accent?: string;
    primary?: string;
    secondary?: string;
    information?: string;
    disabled?: string;
    success?: string;
    error?: string;
    warning?: string;
    light?: string;
    iconBackground?: string;
    accentDisabled?: string;
    status?: string;
    mask?: string;
    active?: string;
    primaryDisabled?: string;
    primaryHover?: string;
    secondaryBackground?: string;
    secondaryDisabled?: string;
    secondaryHover?: string;
    stroke?: string;
    underline?: string;
    underlineAccent?: string;
    shimmer?: string;
    shadow?: string;
    progressBar?: string;
    sliderBackground?: string;
  }

  interface TypographyVariants {
    H1Bold: React.CSSProperties;
    H2SemiBold: React.CSSProperties;
    H3SemiBold: React.CSSProperties;
    H4Bold: React.CSSProperties;
    H5SemiBold: React.CSSProperties;

    B1Bold: React.CSSProperties;
    B2SemiBold: React.CSSProperties;
    B3Medium: React.CSSProperties;
    B4Regular: React.CSSProperties;
    B5Bold: React.CSSProperties;
    B6Medium: React.CSSProperties;
    B7Regular: React.CSSProperties;
    B8SemiBold: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    H1Bold?: React.CSSProperties;
    H2SemiBold: React.CSSProperties;
    H3SemiBold: React.CSSProperties;
    H4Bold?: React.CSSProperties;
    H5SemiBold: React.CSSProperties;

    B1Bold?: React.CSSProperties;
    B2SemiBold?: React.CSSProperties;
    B3Medium?: React.CSSProperties;
    B4Regular?: React.CSSProperties;
    B5Bold?: React.CSSProperties;
    B6Medium?: React.CSSProperties;
    B7Regular?: React.CSSProperties;
    B8SemiBold?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    H1Bold: true;
    H2SemiBold: true;
    H3SemiBold: true;
    H4Bold: true;
    H5SemiBold: true;

    B1Bold: true;
    B2SemiBold: true;
    B3Medium: true;
    B4Regular: true;
    B5Bold: true;
    B6Medium: true;
    B7Regular: true;
    B8SemiBold: true;
  }
}

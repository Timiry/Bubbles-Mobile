export const stylesToColorSvg = (color: string) => {
  return {
    "& svg[fill]": {
      fill: color,
    },
    '& path[stroke]:not([stroke="none"])': {
      stroke: color,
    },
    '& path[fill]:not([fill="none"])': {
      fill: color,
    },
  };
};

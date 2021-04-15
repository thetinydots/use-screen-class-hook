let breakpoints: [
  number,
  number,
  number,
  number,
  number
] = [480, 600, 840, 1024, 1440];

export const setBreakpoints = (
  breaks: [number, number, number, number, number]
) => {
  breakpoints = breaks;
};

export const getBreakpoints = () => breakpoints;

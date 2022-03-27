export const evaluateIndicatorPos = (pos) => {
  switch (pos) {
    case 1:
      return { left: '0%' };
    case 2:
      return { left: '25%' };
    case 3:
      return { left: '50%' };
    case 4:
      return { left: '75%' };
  }
};

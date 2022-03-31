import { computeTiming } from './timeHandler.js';
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
export const evaluateDuration = (time) => {
  const { days, hrs, min, sec } = computeTiming(time);
  return `${days} days ${hrs} hours ${min} minute(s) ${sec} second(s)`;
};
export const evaluateStatus = (status) => {
  switch (status) {
    case 0:
      return 'NOT_STARRTED';
    case 1:
      return 'STARTED';
    case 2:
      return 'ENDED';
  }
};

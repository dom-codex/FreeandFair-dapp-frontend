import { updateTime } from '../utils/constants.js';
export const computeTiming = (time) => {
  const timeInSeconds = Math.floor((time - Date.now()) / 1000);
  const timeIndays = Math.floor(timeInSeconds / (60 * 60 * 24));
  const timeInHrsMinSe = Math.floor(timeInSeconds % (60 * 60 * 24));
  const timeInHr = Math.floor(timeInHrsMinSe / 3600);
  const timeInMinSec = Math.floor(timeInHrsMinSe % 3600);
  const timeInMin = Math.floor(timeInMinSec / 60);
  const timeInSec = Math.floor(timeInMinSec % 60);
  return {
    hrs: timeInHr,
    min: timeInMin,
    sec: timeInSec,
    days: timeIndays,
  };
};
export const countDown = (time, dispatch) => {
  dispatch({ type: updateTime, data: computeTiming(time) });
};
const timer = {};
export const beginCountDown = (type, time, dispatch) => {
  if (Math.floor(time - Date.now()) <= 0) return;
  const id = setInterval(() => {
    if (Math.floor(time - Date.now()) <= 0) {
      clearInterval(timer[type]);
      return;
    }
    dispatch({ type: type, data: computeTiming(time) });
  }, 1000);
  timer[type] = id;
};

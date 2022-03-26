import {updateTime} from "../utils/constants.js"
const computeTiming=(time)=>{
const timeInSeconds =Math.floor((time -Date.now())/1000);
const timeIndays = Math.floor(timeInSeconds/(60*60*24))
const timeInHrsMinSe =Math.floor(timeInSeconds % (60*60*24))
const timeInHr =Math.floor(timeInHrsMinSe /3600)
const timeInMinSec =Math.floor(timeInHrsMinSe%3600)
const timeInMin =Math.floor(timeInMinSec / 60)
const timeInSec =Math.floor( timeInMinSec%60)
return {
  hrs:timeInHr,
  min:timeInMin,
  sec:timeInSec,
  days:timeIndays
}
}
export const countDown=(time,dispatch)=>{
dispatch({type:updateTime, data:computeTiming(time)})
}
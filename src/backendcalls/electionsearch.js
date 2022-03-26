import {contractSearchImage,stopSearching} from "../utils/constants.js"
export const searchForElection=(addr,dispatch)=>{
  const data={
    name:"Fupre 2022 election",
    icon:contractSearchImage,
    polls:4,
    status:0,
    VoterStatus:"Registered",
    duration:"12hr",
    time:{
      hrs:0,
      days:0,
      min:0,
      sec:0
    },
    timeBeforeStart: Date.now() + (3600*1000)
  }
  dispatch({type:stopSearching,data:data})
}
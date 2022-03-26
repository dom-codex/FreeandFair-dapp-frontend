import React,{useContext,useEffect} from "react"
import styles from "../styles/electionsearchitem.module.css"
import {AppContext} from "../App.js"
import {countDown} from "../utils/timeHandler.js"
const ElectionSearchItem =(prop)=>{
    const {dispatch,state:{searchedElection:{name,icon,polls,status,voterStatus,duration,timeBeforeStart,time}}} = useContext(AppContext);
    useEffect(()=>{
        setInterval(()=>countDown(timeBeforeStart,dispatch),1000)
     //   countDown(timeBeforeStart,dispatch)
    },[])
return <div > <div className={styles.electioncont}>
    <img src={icon}/>
    <h2>{name}</h2>
    <div><p className={styles.label}>Polls:</p><p className={styles.data}>{polls}</p></div>
    <div><p className={styles.label}>Duration:</p><p className={styles.data}>{duration}</p></div>
    <div><p className={styles.label}>Status:</p><p className={styles.data}>{status}</p></div>
    <div><p className={styles.label}>Voter's status </p><p className={styles.data}>{voterStatus}</p></div>
    <div className={styles.timer}>
        <div className={styles.timermain}>
            <p>{time.days}</p>
            <p>Day(s)</p>
        </div>
        
        <div className={styles.timermain}>
            <p>{time.hrs}</p>
            <p>Hours(s)</p>
        </div>
        
        <div className={styles.timermain}>
            <p>{time.min}</p>
            <p>Minute(s)</p>
        </div>
        
        <div className={styles.timermain}>
            <p>{time.sec}</p>
            <p>Seconds(s)</p>
        </div>
    </div>
</div>
<div className={styles.btncont} >
    
    <button >Proceed</button></div>
</div>

}
export default ElectionSearchItem;
import React,{useContext} from "react";
import {AppContext} from "../App.js"
import styles from "../styles/nav.module.css"
const Nav = (prop)=>{
    const {state,dispatch} = useContext(AppContext)
return <nav>
<div className={styles.navcontainer}>
    <div className={styles.logocont}>
    <img src="https://drive.google.com/uc?export=view&id=15K2myuCrvY7ibC5P3HG0PfCFsbP909eh" /> 
    
    <p className={styles.appname}>Free & Fair</p> </div>
    <div>
        <button>{state.connected?"disconnect":"connect"}</button>
    </div>
</div>
</nav>
}
export default Nav;
import React from "react"
import styles from "../styles/electionsearchitem.module.css"
import {loader} from "../utils/constants.js"
const Loader = (props)=>{
return <div className={styles.loader}>
  <img src={loader}/></div>
                    
}
export default Loader;
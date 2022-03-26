import React from "react"
import styles from "../styles/newelectorate.module.css"
const NewElectorate = (props)=>{
 return  <div className={styles.electorateauth}>
 <p>Become an Electorate</p>
 <div>
     <label>Electorate title</label>
     <input type="text"/>
     <div className={styles.createbtn}><button>Create</button></div>
 </div>
 </div>
}
export default NewElectorate;
import React from "react"
import {contractSearchImage} from "../utils/constants.js"
import styles from "../styles/electionsearchitem.module.css"
const SearchIllustration = (props)=>{
 return <div className={styles.searchillustration}>
 <img src={contractSearchImage}/>
</div>
}
export default SearchIllustration;
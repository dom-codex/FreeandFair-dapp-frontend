import React from "react"
import styles from "../styles/homesearch.module.css"
import {searchClickHandler} from "../utils/handlers.js"
const HomeSearch =({state,dispatch})=>{
return    <div className={styles.searchControls}>                      
<button><i class="material-icons">autorenew</i></button>
<div className={styles.search}>
    <input type="text" placeholder="Election address"/>
    <button onClick={(e)=>searchClickHandler(state,dispatch)}><i class="material-icons">search</i>
    </button>
</div>
</div>
}
export default HomeSearch;
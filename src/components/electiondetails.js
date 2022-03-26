import React from "react"
import styles from "../styles/electiondetails.module.css"
const ElectionDetails = ()=>{
 return <section>
 <div className={styles.electiondetails}>
     <div>
         <img src="vote3.jpeg"/>
     </div>
     <div className={styles.electioninfo}>
         <p className={styles.title}>Fupre General Election</p>
         <div><p className={styles.addr}>0x2gb45...98bf</p><button><i class="material-icons">content_copy</i></button></div>
     </div>
     <div className={styles.stats}>
         <div className={styles.statsitem}>
             <p>Polls</p>
             <p>20</p>
         </div>
         <div className={styles.statsitem}>
             <p>Voters</p>
             <p>2000</p>
         </div>
         <div className={styles.statsitem}>
             <p>Status</p>
             <p>NOT_STARTED </p>
         </div>
     </div>
 </div>
</section>
}
export default ElectionDetails
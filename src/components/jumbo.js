import React from "react"
import styles from "../styles/jumbo.module.css"
const Jumbo=(prop)=>{
 return  <section>
 <div>
     <div className={styles.jumboContainer}>
         <img src="https://drive.google.com/uc?export=view&id=15K2myuCrvY7ibC5P3HG0PfCFsbP909eh"/>
     </div>
     <div className={styles.info}>
         <p className={styles.appnamejumbo}>Free & Fair</p>
         <p className={styles.appdesc}> Free & fair is a decentralised voting application built off from the ethereum blockchain, Free and Fair is built ensure freeness and fairnesss in electoral process while maintaining maximum transparency</p>
     </div>
     <hr/>
 </div>
</section> 
}
export default Jumbo;
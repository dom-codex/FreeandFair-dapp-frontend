import React, {useState} from "react"
import Nav from "../components/nav"
import ElectorateDetails from "../components/electoratedetails.js"
import ElectorateElections from "../components/electorateelections.js"
import ElectorateToken from "../components/electoratetoken.js"
import NewElectionModal from "../modals/newelection.js"
const Electorate = () =>{
  const [showModal,setShowModal]=useState(false)
return <section>
 {showModal && <NewElectionModal setShowModal={setshowModal}/> }
  <Nav/>
  <ElectorateDetails/>
  <div><hr/></div>
  <ElectorateElections setShowModal={setShowModal}/>
  <ElectorateToken/>
</section>
}
export default Electorate;
import React, {useContext} from "react"
import HomeSearch from "./homesearch.js"
import ElectionSearchItem from "./electionsearchitem.js"
import {renderSearchComponentItem} from "../utils/renderer.js"
import {AppContext} from "../App.js"
const MoreDetails = (prop)=>{
  const {state,dispatch}= useContext(AppContext)
return <div>
<HomeSearch state={state} dispatch={dispatch}/>
{renderSearchComponentItem(state,dispatch)}
</div>
}
export default MoreDetails
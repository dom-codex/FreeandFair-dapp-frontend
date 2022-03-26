import React, {createContext,useReducer} from "react";
import Home from "./pages/home.js";
import Election  from "./pages/election.js"
import Electorate from "./pages/electorate.js"
import {reducer,initialData} from "./utils/logic.js"
import "./style.css";
export const AppContext = createContext(null)
export default function App() {
  const [state,dispatch ] = useReducer(reducer,initialData)
  return (

    <AppContext.Provider value={{dispatch,state}}>
      <Election/>
    </AppContext.Provider>
  );
}

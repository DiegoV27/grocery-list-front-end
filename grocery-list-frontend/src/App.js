import React from "react";
import {Route} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home"
import ItemList from "./ItemList"
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Route exact path = "/">
        <Home/>
      </Route>
      <Route path = "/ItemList">
        <ItemList/>
      </Route>
    </div>
  );
}

export default App;

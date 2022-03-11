import React, {useState, useEffect} from "react";
import {Route} from "react-router-dom";
import Home from "./Home"
import NavBar from  "./NavBar"
import PartyItems from "./Snacks"
import Drinks from "./Drinks"
import Snacks from "./Snacks"
import './App.css';

const BASE_URL_Party = "http://localhost:9292/items"
const BASE_URL_Snack = "http://localhost:9292/categories"
const BASE_URL_Drink = "http://localhost:9292/grocery_lists"


function App() {

  const [party, setParty] = useState([])
  const [snack, setSnack] = useState([])
  const [drink, setDrink] = useState([])
  const [columns, setColumns] = useState([])

  useEffect(() => {
    fetch(BASE_URL_Party)
        .then((r) => r.json())
        .then(data => setParty(data))
  }, [])

  useEffect(() => {
    fetch(BASE_URL_Snack)
        .then((r) => r.json())
        .then(data => setSnack(data))
  }, [])

  useEffect(() => {
    fetch(BASE_URL_Drink)
        .then((r) => r.json())
        .then(data => setDrink(data))
  }, [])

  return (
    <div>
      <NavBar />
      <Route exact path = "/">
        <Home columns = {columns} setColumns = {setColumns} party = {party} drink = {drink} snack = {snack} 
        />
      </Route>
      <Route path = "/partyitems">
        <PartyItems party = {party} setParty = {setParty}/>
      </Route>
      <Route path = "/drinks">
        <Drinks drink = {drink} setDrink = {setDrink}/>
      </Route>
      <Route path = "/snacks">
        <Snacks snack = {snack} setSnack = {setSnack}/>
      </Route>
    </div>
  );
}

export default App;

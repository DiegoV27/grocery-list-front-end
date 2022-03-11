import React, {useState, useEffect} from "react"

const BASE_URL_D = "http://localhost:9292/grocery_lists"

export default function Drinks({drink, setDrink}) {

    const [drinkInput, setDrinkInput] = useState("")

    function handleSubmit(event){
      event.preventDefault()
      let newDrink = {}
      newDrink.title = drinkInput
      newDrink.item_id = 14
      newDrink.category_id = 13
      postDrink(newDrink)
      setDrinkInput("")
    }

    function postDrink(newDrink){
      fetch(BASE_URL_D, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newDrink)
      })
      .then(r => r.json())
      .then(newDrink => updateDrink(newDrink))
    }

    useEffect(()=>{
      fetch(BASE_URL_D)
      .then(r=>r.json())
      .then(data=> setDrink(data))
  }, [])

    function updateDrink(newDrink){
      const updatedDrinkArry = [...drink, newDrink]
      setDrink(updatedDrinkArry)
    }

    return(
        <div>
          <form onSubmit = {handleSubmit}>
            <h2 className="label-wrapper">
            <label htmlFor="new-drink-input" className="label__lg">
            What are we adding?
            </label>
             </h2>
            <input
              type="text"
              id="grocery-drink-input"
              className="input"
              name="text"
              autoComplete="off"
              value = {drinkInput}
              onChange = {e=> setDrinkInput(e.target.value)}
            />
            <button type="submit" className="btn">
              Add
            </button>
          </form>
        </div>
    )
}




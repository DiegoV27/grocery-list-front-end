import React, {useState, useEffect} from "react"

const BASE_URL_S = "http://localhost:9292/categories"

export default function Snacks({snack, setSnack}) {

    const [snackInput, setSnackInput] = useState("")

    function handleSubmit(event){
      event.preventDefault()
      let newSnack = {}
      newSnack.title = snackInput
      postSnack(newSnack)
      setSnackInput("")
    }

    function postSnack(newSnack){
      fetch(BASE_URL_S, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newSnack)
      })
      .then(r => r.json())
      .then(newSnack => updateSnack(newSnack))
    }

    useEffect(()=>{
      fetch(BASE_URL_S)
      .then(r=>r.json())
      .then(data=> setSnack(data))
  }, [])

    function updateSnack(newSnack){
      const updatedSnackArry = [...snack, newSnack]
      setSnack(updatedSnackArry)
    }

    return(
        <div>
          <form onSubmit = {handleSubmit}>
            <h2 className="label-wrapper">
            <label htmlFor="new-snack-input" className="label__lg">
            What are we adding?
            </label>
             </h2>
            <input
              type="text"
              id="grocery-snack-input"
              className="input"
              name="text"
              autoComplete="off"
              value = {snackInput}
              onChange = {e=> setSnackInput(e.target.value)}
            />
            <button type="submit" className="btn">
              Add
            </button>
          </form>
        </div>
    )
}




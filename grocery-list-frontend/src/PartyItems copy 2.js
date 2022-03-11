import React, {useState, useEffect} from "react"

const BASE_URL_P = "http://localhost:9292/items"

export default function PartyItems({party, setParty}) {

    const [partyInput, setPartyInput] = useState("")

    function handleSubmit(event){
      event.preventDefault()
      let newParty = {}
      newParty.title = partyInput
      postParty(newParty)
      setPartyInput("")
    }

    function postParty(newParty){
      fetch(BASE_URL_P, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newParty)
      })
      .then(r => r.json())
      .then(newParty => updateParty(newParty))
    }

    useEffect(()=>{
      fetch(BASE_URL_P)
      .then(r=>r.json())
      .then(data=> setParty(data))
  }, [])

    function updateParty(newParty){
      const updatedPartyArry = [...party, newParty]
      setParty(updatedPartyArry)
    }

    return(
        <div>
          <form onSubmit = {handleSubmit}>
            <h2 className="label-wrapper">
            <label htmlFor="new-party-input" className="label__lg">
            What are we adding?
            </label>
             </h2>
            <input
              type="text"
              id="grocery-party-input"
              className="input"
              name="text"
              autoComplete="off"
              value = {partyInput}
              onChange = {e=> setPartyInput(e.target.value)}
            />
            <button type="submit" className="btn">
              Add
            </button>
          </form>
        </div>
    )
}


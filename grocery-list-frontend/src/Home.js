import React, {useState} from "react"

const divStyle  = {
    width: "1400px",
    border: "1px solid rgb(0, 0, 0)",
};

function Home({party, drink, snack, columns}) {

    for (let i = 1; i<15; i++) {
        columns.push(<td id={`cell0-${i}`}>{`Item ${i}`}</td>)
    }

    return (
    <div>
        <div style={divStyle}>Let's make a grocery list!</div>
        <table id="grocery table" style={divStyle}>
            <tbody>
            <tr id="header" style={divStyle}>
                <td id="cell0-0">Category</td>
                {columns}
            </tr>
            <tr id="party" style={divStyle}>
                <td id="cell1-0">Party</td>
                {party.map(party =>
                    <td id={`${party.id}`}>{party.title}</td>
                )}
            </tr>
            <tr id="snacks" style={divStyle}>
                <td id="cell2-0">Snacks</td>
                {snack.map(snack =>
                    <td id={`${snack.id}`}>{snack.title}</td>
                )}
            </tr>
            <tr id="drinks" style={divStyle}>
                <td id="cell2-0">Drinks</td>
                {drink.map(drink =>
                    <td id={`${drink.id}`}>{drink.title}</td>
                )}
            </tr>
            </tbody>
        </table>
      </div>
    )
}
export default Home

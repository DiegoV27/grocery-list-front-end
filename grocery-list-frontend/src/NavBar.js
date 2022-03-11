import React from "react"
import {NavLink} from "react-router-dom"

const linkStyles = {
    display: "inline-block",
    width: "70px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

  export default function NavBar() {

    return(
        <div>
            <NavLink
                to = "/"
                exact
                style = {linkStyles}
                activeStyle = {{
                    background: "darkblue",
                }}
            >
                Home Page
            </NavLink>
            <NavLink
                to = "/partyitems"
                exact
                style = {linkStyles}
                activeStyle = {{
                    background: "darkblue",
                }}
            >
                Add party items
            </NavLink>
            <NavLink
                to = "/drinks"
                exact
                style = {linkStyles}
                activeStyle = {{
                    background: "darkblue",
                }}
            >
                Add drinks
            </NavLink>
            <NavLink
                to = "/snacks"
                exact
                style = {linkStyles}
                activeStyle = {{
                    background: "darkblue",
                }}
            >
                Add snacks
            </NavLink>
        </div>
    )
  }
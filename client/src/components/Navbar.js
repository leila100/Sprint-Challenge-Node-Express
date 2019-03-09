import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <NavLink exact to="/">
        Projects
      </NavLink>
    </div>
  )
}

export default Navbar

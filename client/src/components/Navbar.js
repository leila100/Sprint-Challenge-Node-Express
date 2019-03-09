import React from "react"
import { NavLink } from "react-router-dom"

import { NavbarWrapper, AppIcon, Links } from "../styles/navbarStyles"

const Navbar = () => {
  return (
    <NavbarWrapper>
      <AppIcon>
        <i className="fas fa-project-diagram" />
        <span>Projects - Actions App</span>
      </AppIcon>
      <Links>
        <NavLink exact to="/">
          Projects
        </NavLink>
      </Links>
    </NavbarWrapper>
  )
}

export default Navbar

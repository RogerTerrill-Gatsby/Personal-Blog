import React from 'react'
import { Link } from 'gatsby'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Nav = () => {
  return (
    <nav>
      <div className="nav-wrapper light-blue lighten-1">
        <div className="container">
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about">About</ListLink>
            <ListLink to="/contact">Contact</ListLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav

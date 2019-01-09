import React from 'react'
import { Link } from 'gatsby';

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Nav = () => {
  return (
    <div>
      <ul>
        <ListLink to='/'>Home</ListLink>
        <ListLink to='/about'>About</ListLink>
        <ListLink to='/contact'>Contact</ListLink>
      </ul>
    </div>
  )
}

export default Nav

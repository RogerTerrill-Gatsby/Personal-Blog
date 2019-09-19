import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

import Nav from './nav'

const Title = styled.h1`
  text-align: center;
`

const Layout = props => {
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1>
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to={'/'}
        >
          <Title>{title}</Title>
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: 'Montserrat, sans-serif',
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to={'/'}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <React.Fragment>
    
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <div>
          <Nav />
        </div>

        <div className="container">
          <div>
            {header}
            {children}
          </div>
        </div>

      </div>
      <Helmet>
        <script src="/shadows.js"/>
      </Helmet>
    </React.Fragment>
  )
}

export default Layout

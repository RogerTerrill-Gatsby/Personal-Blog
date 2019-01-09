import React from 'react'
import Layout from '../components/layout'

export default props => {
  return (
    <Layout location='props.location.pathname'>
      <p>This is the contact.</p>
    </Layout>
  )
}

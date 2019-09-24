import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Hidden from '@material-ui/core/Hidden'
import LinkMaterial from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Container from '@material-ui/core/Container'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import useStyles from '../styles/styles'

const BlogIndex = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const classes = useStyles()

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={['blog', 'gatsby', 'javascript', 'react']}
      />
      <Bio />
      <Grid container spacing={4} className={classes.cardGrid}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Grid item key={title} xs={12} md={6}>
              <CardActionArea component="a" href="#">
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        <Link
                          style={{ boxShadow: 'none' }}
                          to={node.fields.slug}
                        >
                          {title}
                        </Link>
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {node.frontmatter.date}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        <Link
                          style={{ boxShadow: 'none' }}
                          to={node.fields.slug}
                        >
                          Continue reading...
                        </Link>
                      </Typography>
                    </CardContent>
                  </div>
                  <Hidden xsDown>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                  </Hidden>
                </Card>
              </CardActionArea>
            </Grid>
          )
        })}
      </Grid>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`

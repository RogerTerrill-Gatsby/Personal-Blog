import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

const Bio = () => {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        console.log(data)
        const { author, social } = data.site.siteMetadata
        return (
          <div className="col s12 m8 offset-m2 l6 offset-l3">
            <div className="">
              <div className="row valign-wrapper">
                <div className="col s1">
                  <Image
                    fixed={data.avatar.childImageSharp.fixed}
                    alt={author}
                    className="circle responsive-img"
                  />
                </div>
                <div className="col s11">
                  <span className="black-text">
                    Written by <strong>{author}</strong> who lives and works in
                    Orange County building useful things.
                    <br />
                    <a href={`https://twitter.com/${social.twitter}`}>
                      Follow me on twitter :)
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio

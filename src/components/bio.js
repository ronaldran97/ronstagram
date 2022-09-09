/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            instagram
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/drawn-me.jpg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Hi! My name is <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            You should follow me on Twitter (I rarely use it tbh)
          </a>
          <a href={`https://instagram.com/${social?.instagram || ``}`}>
            , or follow me on Instagram (I use this more)!
          </a>
        </p>

      )}
    </div>
  )
}

export default Bio

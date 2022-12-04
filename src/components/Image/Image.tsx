import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export const Image = (props: { filename: string; alt: string }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find(
        (node: { node: { relativePath: string | string[] } }) => {
          return node.node.relativePath.includes(props.filename)
        }
      )
      if (!image) {
        return null
      }
      return (
        <GatsbyImage
          image={getImage(image.node.childImageSharp.gatsbyImageData)!}
          alt={props.alt}
        />
      )
    }}
  />
)

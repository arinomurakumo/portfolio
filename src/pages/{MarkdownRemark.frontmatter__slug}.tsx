import * as React from 'react'
import { graphql, HeadFC, PageProps } from 'gatsby'

import type { PageQueryType } from '@components/Post'

import { Post as Template } from '@components/Post'
import { Head as Heads } from '@components/Head'

export default Template

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date
        slug
        title
        description
        tags
        environment
        tool
        url
        mainImage
        isMobileMain
      }
    }
  }
`

export const Head: HeadFC = ({ location, params, data, pageContext }) => {
  const { markdownRemark } = data as PageQueryType
  const { frontmatter } = markdownRemark
  const { title, description, mainImage } = frontmatter

  return <Heads title={title} description={description} image={mainImage} />
}

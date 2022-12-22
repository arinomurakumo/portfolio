import * as React from 'react'
import { graphql, HeadFC, PageProps } from 'gatsby'

export { globals } from '@style/globals'
import { SuspenseHelper } from '@components/SuspenseHelper'
import { KeyVisual } from '@components/KeyVisual'
import { Works } from '@components/Works'
import { DecorationsMoon } from '@components/DecorationsMoon'
import { About } from '@components/About'
import { Footer } from '@components/Footer'
import { Head as Heads } from '@components/Head'

const IndexPage: React.FC<PageProps<GatsbyTypes.BlogIndexQuery>> = ({
  data,
}) => {
  const posts = data.allMarkdownRemark

  return (
    <>
      <KeyVisual />
      <Works posts={posts} />
      <About />
      <Footer />
    </>
  )
}

export default IndexPage

export const query = graphql`query BlogIndex {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(sort: {frontmatter: {date: ASC}}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date
          tags
          slug
          thumbnail
          number
        }
        excerpt
      }
    }
  }
}`

export const Head: HeadFC = () => (
  <Heads
    title="在之邨雲阿須速理 Portfolio"
    description="Webデザイナー在之邨雲阿須速理 (アリノムラクモノアスハヤリ)のポートフォリオサイト"
  />
)

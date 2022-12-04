import React from 'react'
import { Link } from 'gatsby'

import { style } from './Style'

import { Container } from '@components/Container'
import { Tags } from '@components/Tags'
import { H2 } from '@components/Title'
import { Image } from '@components/Image'

type WorksProps = {
  posts: GatsbyTypes.BlogIndexQuery['allMarkdownRemark']
}

export const Works: React.FC<WorksProps> = (props) => {
  const { posts } = props
  if (posts.totalCount < 0) {
    return null
  }
  const { edges } = posts
  const sortPosts = Object.keys(edges)
    .map(function (_, index) {
      return edges[index]
    })
    .sort(function (a, b) {
      const number1 = a.node?.frontmatter?.number ?? -1
      const number2 = b.node?.frontmatter?.number ?? -1
      return number1! < number2 ? -1 : 1
    })

  return (
    <Container layoutName="Work" isSibling>
      <div className={style.wrapper} id="Works">
        <H2>Works</H2>
        <ul className={style.items}>
          {sortPosts.map((item, index) => {
            if (
              !item.node.frontmatter ||
              item.node.frontmatter.title === '在之邨雲阿須速理'
            )
              return null

            const { title, tags, slug, thumbnail } = item.node.frontmatter

            return (
              <li className={style.item} key={index}>
                <Link to={slug!}>
                  <div className={style.link}>
                    <div className={style.itemImage}>
                      <Image
                        filename={thumbnail ? thumbnail : ''}
                        alt={`${title}の制作イメージ`}
                      />
                      <p className={style.itemTitle}>{title}</p>
                    </div>
                    <Tags items={tags} />
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Container>
  )
}

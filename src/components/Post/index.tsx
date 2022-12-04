import React from 'react'
import { PageProps } from 'gatsby'

import { style } from './Style'
export { globals } from '@style/globals'

import { Container } from '@components/Container'
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { Image } from '@components/Image'
import { PostFooter } from '@components/Post/PostFooter'
import { Tags } from '@components/Tags'
import { H1 } from '@components/Title'

export type PageQueryType = {
  markdownRemark: {
    frontmatter: {
      title: string
      description: string
      date: string
      slug: string
      tags: readonly (string | null)[] | null
      environment: string[]
      tool: string[]
      url: string
      mainImage: string
      thumbnail: string
      isMobileMain: boolean
    }
    html: string
  }
}

type TemplateProps = PageQueryType

export const Post = ({
  data, // this prop will be injected by the GraphQL query below.
}: PageProps<TemplateProps>) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data

  const { frontmatter, html } = markdownRemark

  return (
    <>
      <Header />
      <Container layoutName="Post">
        <article className={style.wrapper} id="contents">
          <div className={style.aboveTheFold}>
            <H1>{frontmatter.title}</H1>
            <div
              className={
                frontmatter.isMobileMain ? style.imageWrapper : undefined
              }
            >
              <Image
                filename={frontmatter.mainImage ? frontmatter.mainImage : ''}
                alt="メインイメージ"
              />
            </div>
            {frontmatter.tags && <Tags items={frontmatter.tags} />}
            <div className={style.environment}>
              <dl>
                <dt className={style.environmentTitle}>制作期間</dt>
                <dd className={style.environmentItem}>{frontmatter.date}</dd>
              </dl>
              <dl>
                <dt className={style.environmentTitle}>開発環境</dt>
                <dd className={style.environmentItem}>
                  {frontmatter?.environment?.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </dd>
              </dl>
              <dl>
                <dt className={style.environmentTitle}>デザインツール</dt>
                <dd className={style.environmentItem}>
                  {frontmatter?.tool?.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </dd>
              </dl>
              <dl>
                <dt className={style.environmentTitle}>URL</dt>
                <dd className={style.environmentItem}>
                  <a
                    href={frontmatter.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${frontmatter.title}へのリンク`}
                  >
                    {frontmatter.url}
                  </a>
                </dd>
              </dl>
            </div>
          </div>
          <div
            className={style.contents}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
        <PostFooter />
      </Container>
      <Footer />
    </>
  )
}

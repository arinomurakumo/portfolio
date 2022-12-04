import React from 'react'

import { style } from './Style'
import { colors } from '@style/variables'

import { Container } from '@components/Container'
import { colorData, ColorNamesType } from './colorData'

interface DetailsProps {
  name: ColorNamesType
}

const splitBreak = (text: string) => {
  return text.split('\n')
}

export const Details: React.FC<DetailsProps> = (props) => {
  const { name } = props
  const data = colorData[name]
  const darkTextColor =
    data.colorCode === 'kinariiro-400' ? colors['aisumicha-800'] : undefined

  return (
    <Container layoutName="Details">
      <section className={style.details}>
        <div className={style.detailsContents}>
          <h2 className={style.mainTitle}>
            <ruby>
              {data.name}
              <rt>{data.ruby}</rt>
            </ruby>
          </h2>
        </div>
        <section className={style.detailsContents}>
          <h3 className={style.title}>{data.name} とは</h3>
          {splitBreak(data.description).map((value, index) => {
            return (
              <p className={style.paragraph} key={`${value}${index}`}>
                {value}
              </p>
            )
          })}
        </section>
        <dl className={style.detailsContents}>
          <dt className={style.title}>カラーコード</dt>
          <dd className={style.paragraph}>
            <p
              className={style.color}
              style={{ backgroundColor: data.color, color: darkTextColor }}
            >
              {colors[data.colorCode]}
            </p>
          </dd>
        </dl>
        <dl className={style.detailsContents}>
          <dt className={style.title}>出典</dt>
          <dd className={style.paragraph}>
            <p className={style.color}>
              <a
                href={data.url}
                target="_blank"
                rel="noopener noreferrer"
                className={style.link}
              >
                {data.url}
              </a>
              <br />
              伝統色のいろは-Traditional colors of Japan-
            </p>
          </dd>
        </dl>
      </section>
    </Container>
  )
}

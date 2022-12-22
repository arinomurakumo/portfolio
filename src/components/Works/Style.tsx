import { css } from '@linaria/core'

import { md } from '@style/index'
import type { Style } from '@style/index'

export const style: Style = {}

style.wrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block-start: 7rem;
  > * + * {
    margin-block-start: 3rem;
    ${md} {
      margin-block-start: 5rem;
    }
  }
`

style.items = css`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  list-style: none;
`

style.item = css`
  position: relative;
  width: 50%;
  padding: 1rem;
  ${md} {
    width: 33.3333%;
    padding: 2rem;
  }
`

style.link = css`
  > * + * {
    margin-block-start: 0.75rem;
    ${md} {
      margin-block-start: 1.5rem;
    }
  }
`

style.itemImage = css`
  .gatsby-image-wrapper {
    border-radius: var(--rounded-full);
  }
`

style.itemTitle = css`
  text-decoration: underline;
  text-align: center;
  font-size: var(--font-size-lg);
  margin-block-start: 1rem;
  white-space: normal;
  ${md} {
    margin-block-start: 1.5rem;
  }
`

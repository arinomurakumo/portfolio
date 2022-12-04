import { css, cx } from '@linaria/core'

import type { Style } from '@style/index'
import { md } from '@style/index'

export const style: Style = {}

style.container = css`
  margin: auto;
  ${md} {
    max-width: 1024px;
  }
`

style['container--isSibling'] = cx(
  style.container,
  css`
    margin-block-start: 10rem;
    ${md} {
      margin-block-start: 20rem;
    }
  `
)

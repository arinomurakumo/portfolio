import { css } from '@linaria/core'

import { md } from '@style/index'
import type { Style } from '@style/index'

export const style: Style = {}

style.details = css`
  padding: 1rem;
  ${md} {
    width: 100%;
    writing-mode: vertical-rl;
    display: flex;
    justify-content: center;
    flex-flow: column;
  }
  > * + * {
    margin-block-start: 1rem;
    ${md} {
      margin-block-start: 1rem;
    }
  }
`

style.detailsContents = css`
  line-height: 2;
  ${md} {
    max-height: 50vh;
  }
  > * + * {
    margin-block-start: 1rem;
    ${md} {
      margin-block-start: 1rem;
    }
  }
`

style.mainTitle = css`
  font-size: var(--font-size-4xl);
`

style.title = css`
  font-size: var(--font-size-xl);
`

style.paragraph = css`
  margin-inline-start: 1rem;
`

style.color = css`
  display: inline-block;
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;
`

style.link = css`
  color: var(--color-white);
`

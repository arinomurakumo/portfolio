import { css } from '@linaria/core'

import { md } from '@style/index'

export const style = css`
  margin-block-start: 5rem;
  padding-block-start: 0.5rem;
  padding-block-end: 0.5rem;
  text-align: center;
  color: var(--color-white);
  background-color: var(--color-aisumicha-800);
  ${md} {
    margin-block-start: 10rem;
  }
`

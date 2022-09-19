import { css } from '@linaria/core'

import type { Style } from '@style/index'

export const style: Style = {}

style.tags = css`
  list-style: none;
`

style.tag = css`
  display: inline-block;
  margin-inline-end: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: var(--rounded-full);
  background-color: var(--color-aisumicha-800);
  color: var(--color-white);
  font-size: var(--font-size-sm);
  & + & {
    margin-block-start: 0.25rem;
  }
`

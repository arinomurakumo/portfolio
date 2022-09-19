import { css } from '@linaria/core'

import type { Style } from '@style/index'

export const style: Style = {}

style.header = css`
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem;
  backdrop-filter: blur(10px);
  text-align: center;
`

style.image = css`
  max-width: 180px;
`

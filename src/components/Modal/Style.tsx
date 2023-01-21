import { css } from '@linaria/core'

import { md } from '@style/index'
import type { Style } from '@style/index'

export const style: Style = {}

style.overlay = css`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  inline-size: 100%;
  block-size: 100%;
  background: var(--color-overlay);
  animation: fade-in 0.2s ease-in-out forwards;
  @keyframes fade-in {
    0% {
      visibility: hidden;
      opacity: 0;
    }
    50% {
      visibility: visible;
    }
    100% {
      visibility: visible;
      opacity: 1;
    }
  }
`

style.modal = css`
  inline-size: 100%;
  block-size: 100%;
`

style.wrapper = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  inline-size: 100%;
  block-size: 100%;
`

style.container = css`
  inline-size: 100%;
  block-size: 100vh;
  padding: 4rem 1rem 1rem;
  overflow: auto;
  color: var(--color-white);
  ${md} {
    max-block-size: 70vh;
  }
`

style.contents = css``

style.closeButton = css`
  position: absolute;
  top: 1rem;
  right: 1rem;
  inline-size: 1.5rem;
  background: none;
  border: none;
  appearance: none;
`

import { css } from '@linaria/core'

import { md } from '@style/index'
import type { Style } from '@style/index'

export const style: Style = {}

style.wrapper = css`
  display: flex;
  flex-direction: column;
  margin-block-start: 5rem;
  padding: 1rem;
  > * + * {
    margin-block-start: 3rem;
    padding-block-start: 3rem;
    border-top: solid 1px var(--color-slate-100);
  }
`

style.aboveTheFold = css`
  display: grid;
  gap: 0.75rem;
  ${md} {
    gap: 1.5rem;
  }
`

style.imageWrapper = css`
  text-align: center;
  img {
    ${md} {
      width: 360px;
    }
  }
`

style.environmentTitle = css`
  font-weight: bold;
`

style.environment = css`
  > * + * {
    margin-block-start: 0.5rem;
  }
`

style.environmentItem = css`
  > * + * {
    margin-inline-start: 1rem;
    ::before {
      content: '/';
      display: inline-block;
      margin-inline-end: 1rem;
    }
  }
`

style.contents = css`
  > * + * {
    margin-block-start: 1rem;
    ${md} {
      margin-block-start: 2rem;
    }
  }

  ul {
    padding-inline-start: 40px;
  }

  iframe {
    aspect-ratio: 16 / 9;
    width: 100%;
    max-width: 100%;
    height: 100%;
    ${md} {
      width: 560px;
    }
  }

  .inlineFlame {
    text-align: center;
  }
`

style.footer = css`
  margin-block-start: 3rem;
  padding-block-start: 3rem;
  border-top: solid 1px var(--color-slate-100);
  text-align: center;
`

style.footerLink = css`
  appearance: none;
  border: none;
`

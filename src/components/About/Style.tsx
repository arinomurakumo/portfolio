import { css } from '@linaria/core'

import { md } from '@style/index'
import type { Style } from '@style/index'

export const style: Style = {}

style.wrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block-end: 5rem;
  > * + * {
    margin-block-start: 10rem;
    ${md} {
      margin-block-start: 20rem;
    }
  }
`

style.button = css`
  appearance: none;
  background: none;
  border: none;
`

style.buttonWrapper = css`
  display: flex;
  align-items: center;
`

style.buttonImage = css`
  inline-size: 2rem;
  max-inline-size: 96px;
  margin-block-start: 0.5rem;
  margin-inline-end: 0.5rem;
  ${md} {
    inline-size: 5rem;
    margin-block-start: 1rem;
    margin-inline-end: 2rem;
  }
`

style.name = css`
  text-decoration: underline;
  color: var(--color-aisumicha-800);
  font-size: var(--font-size-2xl);
  ${md} {
    font-size: var(--font-size-3xl);
  }
`

style.profile = css`
  ${md} {
    display: flex;
    margin: auto;
    justify-content: center;
    writing-mode: vertical-rl;
    overflow: auto;
  }
`

style.profileContainer = css`
  > * + * {
    margin-block-start: 1rem;
    ${md} {
      margin-block-start: 1rem;
    }
  }
`

style.profileTitles = css`
  display: grid;
  ${md} {
    grid-template-columns: 200px 1fr;
  }
  > * + * {
    ${md} {
      margin-inline-start: 1rem;
    }
  }
`

style.profileSnsItems = css`
  display: flex;
  list-style: none;
  align-items: center;
  margin-block-start: 1rem;
  ${md} {
    margin-block-start: 0;
  }
  > * + * {
    margin-inline-start: 1rem;
    ${md} {
      margin-inline-start: 1rem;
    }
  }
`

style.profileSnsLink = css`
  display: block;
  inline-size: 2rem;
`

style.profileContents = css`
  > * + * {
    margin-block-start: 1rem;
    ${md} {
      margin-block-start: 1rem;
    }
  }

  p,
  img {
    margin-inline-start: 1rem;
  }

  img {
    inline-size: 100%;
    ${md} {
      inline-size: auto;
    }
  }

  ul {
    margin-inline-start: 2rem;
  }
`

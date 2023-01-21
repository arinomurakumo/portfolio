import { css, cx } from '@linaria/core'

import { sm, md, lg } from '@style/index'
import type { Style } from '@style/index'

export const style: Style = {}

const negative = 0

style.wrapper = css`
  margin: auto;
  text-align: center;
`

style.tags = css`
  margin-block-start: 10rem;
  ${md} {
    margin-block-start: 20rem;
  }
`

style.tag = css`
  position: relative;
  display: inline-block;
  margin-inline-end: 0.25rem;
  padding: 0.5rem 0.5rem;
  border-radius: var(--rounded-full);
  background-color: var(--color-aisumicha-800);
  color: var(--color-white);
  font-size: var(--font-size-sm);
  &::after {
    content: '';
    position: absolute;
    right: -0.25rem;
    bottom: -0.5rem;
    padding: 0.5rem 1rem;
    border-radius: var(--rounded-full);
    background-color: var(--color-aisumicha-800);
  }
`

style.aisumicha = css`
  z-index: 1;
  position: relative;
  top: 0.1rem;
  display: inline-block;
  inline-size: 4rem;
  appearance: none;
  background: none;
  border: none;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`

style.decorations = css`
  position: relative;
  margin-block-start: 15rem;
  visibility: hidden;
  opacity: 0;
  &[data-state='animation'] {
    animation: container 1s ease-in-out forwards;
  }
  @keyframes container {
    0% {
      visibility: hidden;
      opacity: 0;
      transform: translate(0, 1rem);
    }
    50% {
      visibility: visible;
    }
    100% {
      visibility: visible;
      opacity: 1;
      transform: translate(0, 0);
    }
  }
`

style.moon = css`
  max-inline-size: 710px;
  ${sm} {
    margin-top: ${negative}rem;
  }
`

const colorName = css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  inline-size: 100%;
  max-inline-size: 710px;
  appearance: none;
  background: none;
  border: none;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`

style.rurikonHorizontal = cx(
  colorName,
  css`
    top: calc(100% - 43vw);
    @media (min-width: 710px) {
      top: 8.4rem;
      max-inline-size: 710px;
    }
  `
)

style.yamabukiiro = cx(
  colorName,
  css`
    top: calc(100% - 19vw);
    @media (min-width: 710px) {
      top: 19rem;
    }
  `
)

style.baseColor = css`
  margin-block-start: 15rem;
  margin-block-end: 15rem;
`

style.kinariiro = css`
  appearance: none;
  background: none;
  border: none;
  ${md} {
    inline-size: 1.5rem;
  }
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`

style.cloud = css`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  inline-size: 100%;
  max-inline-size: 710px;
`

style.cloudTop = cx(
  style.cloud,
  css`
    top: calc(100% - 50vw);
    ${md} {
      top: calc(100% - 44vw);
    }
    @media (min-width: 710px) {
      top: 4.4rem;
    }
  `
)

style.cloudBottom = cx(
  style.cloud,
  css`
    top: calc(100% - 36vw);
    ${md} {
      top: calc(100% - 20vw);
    }
    @media (min-width: 710px) {
      top: 11.5rem;
    }
  `
)

style.cloudPath = css`
  stroke: var(--color-rurikon-800);
  stroke-dasharray: 300;
  stroke-dashoffset: 0;
  stroke-width: 0.3;
  &[data-state='animation'] {
    animation: stroke 1.5s ease-in-out forwards;
  }
  @keyframes stroke {
    0% {
      fill: var(--color-kinariiro-400);
      stroke-dashoffset: 300;
    }
    10% {
      fill: transparent;
    }
    80% {
      fill: transparent;
    }
    100% {
      fill: var(--color-rurikon-800);
      stroke-dashoffset: 0;
    }
  }
`

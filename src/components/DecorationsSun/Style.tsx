import { css, cx } from '@linaria/core'

import { md } from '@style/index'
import type { Style } from '@style/index'

export const style: Style = {}

const negative = -7

style.wrapper = css`
  position: relative;
  margin: auto;
  text-align: center;
`

style.container = css`
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

style.imagesWrapper = css`
  overflow: hidden;
  transform: translateY(-6.75vh);
  ${md} {
    transform: translateY(${negative}rem);
  }
`

style.risingSun = css`
  width: 200%;
  max-width: none;
  transform: translateX(-25%);
  ${md} {
    width: 100%;
    max-width: 1127px;
    transform: none;
  }
`

const colorName = css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 200%;
  max-width: 1127px;
  appearance: none;
  background: none;
  border: none;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
  ${md} {
    width: 100%;
  }
`

style.shinku = cx(
  colorName,
  css`
    top: calc(100% - 160vw);
    ${md} {
      top: calc(100% - 80vw);
    }
    @media (min-width: 1127px) {
      top: 1.9rem;
    }
  `
)

style.rurikon = cx(
  colorName,
  css`
    top: calc(100% - 108.4vw);
    ${md} {
      top: calc(100% - 54.2vw);
    }
    @media (min-width: 1127px) {
      top: 20rem;
    }
  `
)

style.baseColor = css`
  margin-block-start: 20rem;
`

style.kinariiro = css`
  appearance: none;
  background: none;
  border: none;
  ${md} {
    width: 1.5rem;
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
  width: 200%;
  max-width: 1127px;
  ${md} {
    width: 100%;
  }
`

style.cloudLeft = cx(
  style.cloud,
  css`
    top: calc(100% - 88vw);
    ${md} {
      top: calc(100% - 44vw);
    }
    @media (min-width: 1127px) {
      top: 27.2rem;
    }
  `
)

style.cloudRight = cx(
  style.cloud,
  css`
    top: calc(100% - 40vw);
    ${md} {
      top: calc(100% - 20vw);
    }
    @media (min-width: 1127px) {
      top: 44rem;
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

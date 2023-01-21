import { css, cx } from '@linaria/core'

import { md, mdMax, xl } from '@style/index'
import type { Style } from '@style/index'

export const style: Style = {}

style.wrapper = css`
  min-height: 100vh;
  padding-inline-start: 10vh;
  padding-inline-end: 10vh;
  text-align: center;
  ${md} {
    padding-block-start: 15rem;
  }
  * + * {
    margin-block-start: 3rem;
    ${md} {
      margin-block-start: 5rem;
    }
  }
`

style.title = css`
  position: absolute;
  visibility: hidden;
`

style.portfolio = css`
  font-size: var(--font-size-xl);
  font-weight: bold;
  ${md} {
    font-size: var(--font-size-3xl);
  }
`

style.image = css`
  inline-size: 14vh;
  ${md} {
    display: none;
    padding-block-start: 3rem;
  }
`

style.imageDesktop = css`
  max-inline-size: 800px;
  ${mdMax} {
    display: none;
  }
`

style.logoAnimation = css`
  animation: stroke 1.5s ease-in-out forwards;
  stroke: var(--color-aisumicha-800);
  stroke-dasharray: 1800;
  stroke-dashoffset: 0;
  stroke-width: 0;
  @keyframes stroke {
    0% {
      fill: var(--color-kinariiro-400);
      stroke-dashoffset: 1800;
      stroke-width: 0;
    }
    10% {
      fill: transparent;
    }
    80% {
      fill: transparent;
    }
    100% {
      fill: var(--color-aisumicha-800);
      stroke-dashoffset: 0;
      stroke-width: 0.5;
    }
  }
`

style['logoAnimation--no'] = cx(
  style.logoAnimation,
  css`
    animation-delay: 150ms;
  `
)

style['logoAnimation--mura'] = cx(
  style.logoAnimation,
  css`
    animation-delay: 300ms;
  `
)

style['logoAnimation--kumo'] = cx(
  style.logoAnimation,
  css`
    stroke: var(--color-rurikon-800);
    animation: stroke-kumo 1.5s ease-in-out 450ms forwards;
    @keyframes stroke-kumo {
      0% {
        fill: var(--color-kinariiro-400);
        stroke-dashoffset: 1800;
        stroke-width: 0;
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
        stroke-width: 0.5;
      }
    }
  `
)

style.titleWrapper = css`
  visibility: hidden;
  opacity: 0;
  &[data-state='animation'] {
    animation: fade-in 0.5s ease-in-out forwards;
  }
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

const decorationNegative = -6.7

style.decorationWrapper = css`
  position: relative;
  margin: auto;
  text-align: center;
`

style.decorationContainer = css`
  visibility: hidden;
  opacity: 0;
  &[data-state='animation'] {
    animation: decoration 1s ease-in-out forwards;
  }
  @keyframes decoration {
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

style.decoration = css`
  max-inline-size: 250px;
  margin-top: -6.75vh;
  ${md} {
    max-inline-size: 1127px;
    margin-top: ${decorationNegative}rem;
  }
`

const colorName = css`
  position: absolute;
  left: 50%;
  transform: translate(-50%, ${decorationNegative}rem);
  inline-size: 2.5vw;
  max-inline-size: 1.75rem;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`

style.shinku = cx(
  colorName,
  css`
    top: 1.6rem;
    ${md} {
      top: 2.4rem;
    }
  `
)

style.rurikon = cx(
  colorName,
  css`
    top: 20.4rem;
    ${md} {
      top: 29vw;
    }
    @media (min-width: 1127px) {
      top: 20.4rem;
    }
  `
)

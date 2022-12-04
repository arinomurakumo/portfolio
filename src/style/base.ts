import { css } from '@linaria/core'

export const base = css`
  :global() {
    * {
      margin: 0;
      padding: 0;
    }

    html {
      color: var(--color-aisumicha-800);
    }

    body {
      background-color: var(--color-kinariiro-400);
      font-family: ui-serif, "Hiragino Mincho ProN", YuMincho, "Yu Mincho", "MS PMincho", Georgia, Cambria, "Times New Roman", Times,  serif;
      line-height: 1.5;
    }

    img,
    svg {
      width: 100%;
      max-width: 100%;
      height: auto;
    }

    a,
    button {
      text-decoration: underline;
      color: var(--color-aisumicha-800);
      :hover {
        cursor: pointer;
        opacity: 0.7;
      }
    }
  }
`
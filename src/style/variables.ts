import { css } from '@linaria/core'

export type ColorCode = {
  [key: string]: string
}

export const colors: ColorCode = {
  'aisumicha-800': '#373C38',
  'rurikon-800': '#224B8F',
  'shinku-800': '#D9341D',
  'yamabukiiro-800': '#E5B74A',
  'kinariiro-400': '#F7EFE3',
  'white': '#fff',
  'overlay': 'rgba(1, 6, 48, 0.8)',
}

export const variables = css`
  :global() {
    :root {
      --font-size-5xl: 3rem;
      --font-size-4xl: 2.25rem;
      --font-size-3xl: 1.875rem;
      --font-size-2xl: 1.5rem;
      --font-size-xl: 1.25rem;
      --font-size-lg: 1.125rem;
      --font-size-base: 1rem;
      --font-size-sm: 0.875rem;

      --color-aisumicha-800: ${colors['aisumicha-800']};
      --color-rurikon-800: ${colors['rurikon-800']};
      --color-shinku-800: ${colors['shinku-800']};
      --color-yamabukiiro-800: ${colors['yamabukiiro-800']};
      --color-kinariiro-400: ${colors['kinariiro-400']};
      --color-white: ${colors['white']};
      --color-overlay: ${colors['overlay']};

      --rounded-sm: 0.125rem;
      --rounded: 0.25rem;
      --rounded-md: 0.375rem;
      --rounded-lg: 0.5rem;
      --rounded-xl: 0.75rem;
      --rounded-full: 9999px;
    }
  }
`

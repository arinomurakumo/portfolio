import type { RenderBodyArgs } from "gatsby"

export const onRenderBody = ({
  setHtmlAttributes,
}: RenderBodyArgs) => {
  setHtmlAttributes({
    lang: 'ja',
    prefix: 'og: https://ogp.me/ns#'
  })
}
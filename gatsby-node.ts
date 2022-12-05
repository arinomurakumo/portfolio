
import type { CreateWebpackConfigArgs } from 'gatsby'
import * as path from 'path'

export const onCreateWebpackConfig = ({ actions, getConfig, stage, loaders }: CreateWebpackConfigArgs) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@style': path.resolve(__dirname, 'src/style')
      }
    }
  })
  if (stage === 'build-javascript') {
    const config = getConfig()
    const miniCssExtractPlugin = config.plugins.find(
      (plugin: { constructor: { name: string } }) => plugin.constructor.name === 'MiniCssExtractPlugin'
    )
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true
    }
    actions.replaceWebpackConfig(config)
  }
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /(react-modal|react-intersection-observer)/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

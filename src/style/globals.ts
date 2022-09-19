import { cx } from '@linaria/core'

import { variables } from '@style/variables'
import { base } from '@style/base'
import 'modern-normalize/modern-normalize.css'

export const globals = cx(variables, base)
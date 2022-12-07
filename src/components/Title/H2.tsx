import React, { FC, ReactNode } from 'react'

import { style } from './Style'

interface Props {
  children: ReactNode
}

export const H2: FC<Props> = ({ children }) => {
  return <h2 className={style.h2}>{children}</h2>
}

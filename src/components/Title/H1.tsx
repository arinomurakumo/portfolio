import React, { FC, ReactNode } from 'react'

import { style } from './Style'

type Props = {
  children: ReactNode
}

export const H1: FC<Props> = ({ children }) => {
  return <h1 className={style.h1}>{children}</h1>
}

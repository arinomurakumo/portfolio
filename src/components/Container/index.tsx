import React from 'react'

import { style } from './Style'

type ContainerProps = {
  children: React.ReactNode
  layoutName?: string
  isSibling?: boolean
}

export const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
  const { isSibling, layoutName, children } = props
  return (
    <div
      className={isSibling ? style['container--isSibling'] : style.container}
      data-layout={layoutName}
    >
      {children}
    </div>
  )
}

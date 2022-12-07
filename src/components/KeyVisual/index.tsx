import React, { useState } from 'react'

import { style } from './Style'

import { Container } from '@components/Container'
import { DecorationsSun } from '@components/DecorationsSun'
import { Logo, LogoDesktop } from './Logo'

export const KeyVisual: React.FC = () => {
  const [isAnimated, setIsAnimated] = useState(false)
  return (
    <>
      <Container layoutName="KeyVisual">
        <div className={style.wrapper}>
          <h1>
            <span className={style.title}>在之邨雲</span>
          </h1>
          <Logo setIsAnimated={setIsAnimated} />
          <LogoDesktop setIsAnimated={setIsAnimated} />
          <div
            className={style.titleWrapper}
            data-state={isAnimated ? 'animation' : undefined}
          >
            <p className={style.portfolio}>Portfolio</p>
          </div>
        </div>
      </Container>
      <DecorationsSun isAnimated={isAnimated} />
    </>
  )
}

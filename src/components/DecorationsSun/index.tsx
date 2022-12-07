import React from 'react'

import { style } from './Style'

import { ColorName } from '@components/ColorName'
import { DecorationCloud } from '@components/DecorationCloud'

import imageRisingSun from '@images/keyVisual/risingSun.png'

interface DecorationsSunProps {
  isAnimated: boolean
}

export const DecorationsSun: React.FC<DecorationsSunProps> = (props) => {
  const { isAnimated } = props

  return (
    <div data-layout="DecorationsSun" className={style.wrapper}>
      <div
        className={style.container}
        data-state={isAnimated ? 'animation' : undefined}
      >
        <div className={style.imagesWrapper}>
          <img
            src={imageRisingSun}
            alt=""
            width={1127}
            height={923}
            className={style.risingSun}
          />
          <ColorName name="shinku" style={style.shinku} />
          <ColorName name="rurikon" style={style.rurikon} />
          <DecorationCloud name="sunLeft" style={style} />
          <DecorationCloud name="sunRight" style={style} />
        </div>
      </div>
      <div className={style.baseColor}>
        <ColorName name="kinariiro" style={style.kinariiro} />
      </div>
    </div>
  )
}

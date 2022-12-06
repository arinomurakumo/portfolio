import React from 'react'
import { useInView } from 'react-intersection-observer'

import { style } from './Style'

import { ColorName } from '@components/ColorName'
import { DecorationCloud } from '@components/DecorationCloud'

import imageMoonClowd from '@images/about/moonClowd.png'

export const DecorationsMoon: React.FC = () => {
  if (typeof window === 'undefined') return null

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  })

  return (
    <div data-layout="DecorationsMoon" className={style.wrapper}>
      <div className={style.container}>
        <div className={style.tags}>
          <div className={style.tag}>
            <ColorName name="aisumicha" style={style.aisumicha} />
          </div>
        </div>
        <div
          className={style.decorations}
          ref={ref}
          data-state={inView ? 'animation' : undefined}
        >
          <img
            src={imageMoonClowd}
            alt=""
            width={710}
            height={431}
            className={style.moon}
          />
          <ColorName name="rurikonHorizontal" style={style.rurikonHorizontal} />
          <ColorName name="yamabukiiro" style={style.yamabukiiro} />
          <DecorationCloud name="moonTop" style={style} />
          <DecorationCloud name="moonBottom" style={style} />
        </div>
      </div>
    </div>
  )
}

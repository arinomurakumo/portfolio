import React from 'react'

import { style } from './Style'

type TagsProps = {
  items: readonly (string | null)[] | null
}

export const Tags: React.FC<TagsProps> = (props) => {
  const { items } = props

  if (items === null) return null

  return (
    <ul className={style.items}>
      {items.map((tag, index) => {
        return (
          <li className={style.tag} key={index}>
            {tag}
          </li>
        )
      })}
    </ul>
  )
}

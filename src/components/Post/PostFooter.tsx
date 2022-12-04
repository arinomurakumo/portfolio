import React from 'react'
import { navigate } from 'gatsby'

import { style } from './Style'

export const PostFooter: React.FC = () => {
  return (
    <footer className={style.footer} data-layout="PostFooter">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className={style.footerLink}
      >
        戻る
      </button>
    </footer>
  )
}

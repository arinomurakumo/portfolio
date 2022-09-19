import React, { useEffect } from 'react'
import ReactModal from 'react-modal'

import { style } from './Style'
import { colors } from '@style/index'

type ModalProps = {
  isOpen: boolean
  handleCloseModal: () => void
  contentLabel: string
  children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const { isOpen, contentLabel, children, handleCloseModal } = props

  useEffect(() => {
    ReactModal.setAppElement('#___gatsby')
  }, [])

  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel={contentLabel}
      className={style.modal}
      overlayClassName={style.overlay}
    >
      <div className={style.wrapper} onClick={handleCloseModal}>
        <div className={style.container}>
          <div className={style.contents}>{children}</div>
        </div>
        <button
          onClick={handleCloseModal}
          aria-label="ポップアップを閉じる"
          className={style.closeButton}
        >
          <svg
            width="22"
            height="23"
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.96582 2.56641L19.4016 20.7802"
              stroke={colors.white}
              strokeWidth="3.23162"
              strokeLinecap="round"
            />
            <path
              d="M1.96582 20.7802L19.4016 2.56641"
              stroke={colors.white}
              strokeWidth="3.23162"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </ReactModal>
  )
}

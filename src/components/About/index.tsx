import React, { useState } from 'react'

import { style } from './Style'

import { Profile } from './Profile'
import { Container } from '@components/Container'
import { Modal } from '@components/Modal'

import sign from '@images/about/sign.png'

export const About: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <Container layoutName="About" isSibling>
      <div className={style.wrapper}>
        <button
          type="button"
          className={style.button}
          onClick={handleOpenModal}
          aria-label="アリノムラクモアスハヤリについて"
        >
          <div className={style.buttonWrapper}>
            <img
              src={sign}
              alt=""
              width={96}
              height={96}
              className={style.buttonImage}
            />
            <p className={style.name}>
              <ruby>
                在之邨雲阿須速理<rt>アリノムラクモアスハヤリ</rt>
              </ruby>
              について
            </p>
          </div>
        </button>
        <Modal
          isOpen={isOpen}
          handleCloseModal={handleCloseModal}
          contentLabel="Works Contents"
        >
          <Profile />
        </Modal>
      </div>
    </Container>
  )
}

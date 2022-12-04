import React from 'react'

import { style } from './Style'

import { Container } from '@components/Container'

import sign from '@images/about/sign.png'

export const Profile: React.FC = () => {
  return (
    <Container layoutName="Profile">
      <section className={style.profile}>
        <div className={style.profileTitles}>
          <h2>
            <ruby>
              在之邨雲阿須速理<rt>アリノムラクモアスハヤリ</rt>
            </ruby>
          </h2>
          <a
            href="https://github.com/arinomurakumo"
            target="_blank"
            rel="noopener noreferrer"
            className={style.profileSns}
          >
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="github link"
            >
              <g clip-path="url(#clip0_379_687)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.29 0C7.29 0 0 7.29 0 16.29C0 23.49 4.67 29.59 11.14 31.75C11.95 31.9 12.25 31.4 12.25 30.96C12.25 30.57 12.24 29.55 12.23 28.19C7.7 29.17 6.74 26.01 6.74 26.01C6 24.13 4.93 23.63 4.93 23.63C3.45 22.62 5.04 22.64 5.04 22.64C6.67 22.76 7.54 24.32 7.54 24.32C8.99 26.81 11.35 26.09 12.28 25.67C12.43 24.62 12.85 23.9 13.31 23.49C9.69 23.08 5.89 21.68 5.89 15.44C5.89 13.66 6.52 12.21 7.57 11.07C7.4 10.66 6.84 9 7.73 6.76C7.73 6.76 9.1 6.32 12.21 8.43C13.51 8.07 14.9 7.89 16.29 7.88C17.67 7.88 19.07 8.07 20.37 8.43C23.48 6.32 24.85 6.76 24.85 6.76C25.74 9 25.18 10.66 25.01 11.07C26.05 12.21 26.68 13.66 26.68 15.44C26.68 21.7 22.87 23.07 19.24 23.48C19.82 23.98 20.35 24.98 20.35 26.5C20.35 28.68 20.33 30.43 20.33 30.97C20.33 31.41 20.62 31.91 21.45 31.75C27.92 29.59 32.58 23.49 32.58 16.3C32.58 7.29 25.29 0 16.29 0Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_379_687">
                  <rect width="32.58" height="31.77" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <section className={style.profileContents}>
          <h3>祭人</h3>
          <p>在之邨雲阿須速理（アリノムラクモアスハヤリ）と申します。</p>
          <p>
            Web 屋としてのキャリアは 2013 年 Web デザイナーから始まりました。
            <br />
            現在は事業会社に所属し、
            <br />
            主たる業務は、デザイナ組織でフロントエンド開発を、リードデザイナとして職責しています。
          </p>
        </section>
        <section className={style.profileContents}>
          <h3>徳</h3>
          <ul>
            <li>
              フロントエンド開発に関するコーディング
              <ul>
                <li>HTML / CSS設計、React およびビューに関わるテスト</li>
              </ul>
            </li>
            <li>Web での UI 作成</li>
          </ul>
        </section>
        <section className={style.profileContents}>
          <h3>由緒</h3>
          <p>
            2013 年以前は定職につかず音楽制作を行う。
            <br />
            何者にもなれず友人であるメンターに教えを乞う。
          </p>
          <ul>
            <li>
              2013
              <ul>
                <li>
                  はじまりは、契約社員の任期満了後の雇用保険を頼りに、3ヶ月 HTML
                  / CSS を独学。
                  <br />
                  マッチングサイトのアルバイトとして、Web
                  デザイナーとしてのキャリアをスタート。
                  <br />
                  この頃デザインとアートを混合する。
                </li>
              </ul>
            </li>
            <li>
              2014
              <ul>
                <li>
                  フリーランスとして独立。Wordpress を主業務にクラウドワーク。
                  <br />
                  支払いがないクライアントと技術不足で疲弊する。
                </li>
              </ul>
            </li>
            <li>
              2014 - 2019
              <ul>
                <li>
                  制作会社へ初就職。寝る以外だいたい仕事と Web に没頭。
                  <br />
                  努力するという意味を 齢 30 を過ぎて知る。
                </li>
              </ul>
            </li>
            <li>
              2020
              <ul>
                <li>事業会社へ転職。組織を学ぶ。既存事業開発に従事。</li>
              </ul>
            </li>
            <li>
              2021
              <ul>
                <li>
                  子会社間異動。新規事業開発に従事。職位シニアデザイナ。
                  <br />
                  視野を広げるため社外でスタートアップを手伝う。
                </li>
              </ul>
            </li>
            <li>
              2022 -
              <ul>
                <li>子会社合併で異動。職位リードデザイナ。</li>
              </ul>
            </li>
          </ul>
        </section>
        <section className={style.profileContents}>
          <h3>紋</h3>
          <p>
            祭人が奉斎を行う上で頭文字「在」の篆書を設計に取り込んだ事が由緒になります。
          </p>
          <img
            src={sign}
            alt="在印"
            width={96}
            height={96}
            className={style.buttonImage}
          />
        </section>
      </section>
    </Container>
  )
}

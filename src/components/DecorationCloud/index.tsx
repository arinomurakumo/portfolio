import React, { FC } from 'react'
import { useInView } from 'react-intersection-observer'

import { colors } from '@style/index'
import type { Style } from '@style/index'

type Props = {
  name: string
  style: Style
}

export const DecorationCloud: FC<Props> = (props) => {
  if (typeof window === 'undefined') return null

  const { name, style } = props
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  })

  const renderSwitch = (name: string) => {
    switch (name) {
      case 'sunLeft':
        return (
          <div className={style.cloudLeft}>
            <svg
              width="1127"
              height="91"
              viewBox="0 0 1127 91"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              ref={ref}
            >
              <path
                className={style.cloudPath}
                data-state={inView ? 'animation' : undefined}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M227.817 0H221.879V0.345868C221.879 0 221.879 0 221.879 0H221.878L221.876 5.56614e-06L221.868 3.82002e-05L221.841 0.000280286C221.818 0.000552141 221.784 0.00108752 221.74 0.00214169C221.652 0.00424979 221.525 0.00843401 221.364 0.0167402C221.042 0.033347 220.583 0.0664627 220.033 0.132544C218.936 0.264475 217.466 0.52892 215.991 1.06093C214.517 1.59251 213.019 2.39797 211.888 3.6221C210.75 4.85288 210 6.48961 210 8.64671C210 10.8038 210.75 12.4405 211.888 13.6713C213.019 14.8954 214.517 15.7009 215.991 16.2325C217.466 16.7645 218.936 17.0289 220.033 17.1609C220.583 17.2269 221.042 17.2601 221.364 17.2767C221.525 17.285 221.652 17.2892 221.74 17.2913C221.784 17.2923 221.818 17.2929 221.841 17.2931L221.868 17.2934L221.876 17.2934L221.878 17.2934C221.878 17.2934 221.879 17.2934 221.879 16.9475V17.2934L227.817 17.2934L227.818 17.2934H310.97H311.712H397.462H403.402H427.159L427.16 17.2934L427.165 17.2934L427.187 17.2936C427.208 17.2939 427.238 17.2943 427.279 17.2953C427.36 17.2973 427.48 17.3012 427.633 17.3091C427.94 17.3249 428.38 17.3566 428.91 17.4203C429.97 17.5477 431.377 17.8021 432.779 18.3077C434.182 18.8137 435.561 19.5647 436.587 20.6751C437.607 21.779 438.295 23.2551 438.295 25.2484C438.295 27.2417 437.607 28.7178 436.587 29.8216C435.561 30.9321 434.182 31.683 432.779 32.1891C431.377 32.6947 429.97 32.949 428.91 33.0765C428.38 33.1401 427.94 33.1718 427.633 33.1877C427.48 33.1956 427.36 33.1995 427.279 33.2014C427.238 33.2024 427.208 33.2029 427.187 33.2031L427.165 33.2033L427.16 33.2033L427.159 33.2033H422.081V33.148H421.546L348.833 33.148H348.832L348.83 33.148L343.844 33.148V33.4939C343.844 33.148 343.844 33.148 343.844 33.148L343.843 33.148L343.841 33.148L343.835 33.148L343.812 33.1482C343.792 33.1485 343.763 33.1489 343.726 33.1498C343.652 33.1516 343.544 33.1551 343.408 33.1621C343.136 33.1761 342.75 33.2041 342.286 33.2598C341.362 33.371 340.122 33.5939 338.877 34.0429C337.633 34.4915 336.366 35.1724 335.407 36.2098C334.442 37.2538 333.807 38.6415 333.807 40.4665C333.807 42.2916 334.442 43.6793 335.407 44.7233C336.366 45.7607 337.633 46.4416 338.877 46.8902C340.122 47.3392 341.362 47.5621 342.286 47.6733C342.75 47.729 343.136 47.757 343.408 47.771C343.544 47.778 343.652 47.7815 343.726 47.7833C343.763 47.7842 343.792 47.7846 343.812 47.7849L343.835 47.7851L343.841 47.7851L343.843 47.7851C343.843 47.7851 343.844 47.7851 343.844 47.7711C343.844 47.7444 343.844 47.6665 343.844 47.4392V47.7851H348.833L445.809 47.7851H446.432V47.73H447.368H447.369L447.376 47.73L447.406 47.7303C447.432 47.7306 447.472 47.7312 447.524 47.7324C447.628 47.7349 447.783 47.74 447.98 47.7502C448.375 47.7705 448.942 47.8114 449.622 47.8931C450.984 48.0569 452.794 48.3839 454.599 49.0348C456.405 49.6861 458.186 50.6549 459.515 52.0922C460.837 53.5229 461.726 55.4348 461.726 58.0092C461.726 60.5835 460.837 62.4954 459.515 63.9261C458.186 65.3634 456.405 66.3323 454.599 66.9835C452.794 67.6344 450.984 67.9614 449.622 68.1252C448.942 68.207 448.375 68.2478 447.98 68.2681C447.783 68.2783 447.628 68.2834 447.524 68.2859C447.472 68.2871 447.432 68.2878 447.406 68.2881L447.376 68.2883L447.369 68.2884H447.368L373.838 68.2884H372.888V68.4819H309.173H309.172H301.571V68.8278C301.571 68.655 301.571 68.5686 301.57 68.5253C301.57 68.4819 301.571 68.4819 301.571 68.4819H301.569L301.567 68.4819L301.558 68.4819L301.524 68.4822C301.512 68.4824 301.499 68.4826 301.484 68.4828C301.459 68.4832 301.43 68.4838 301.396 68.4846C301.284 68.4873 301.122 68.4926 300.917 68.5032C300.507 68.5243 299.922 68.5665 299.222 68.6508C297.822 68.819 295.95 69.1561 294.072 69.8334C292.195 70.5102 290.295 71.5336 288.861 73.0845C287.422 74.6422 286.47 76.7147 286.47 79.4528C286.47 82.191 287.422 84.2635 288.861 85.8211C290.295 87.3721 292.195 88.3955 294.072 89.0723C295.95 89.7496 297.822 90.0867 299.222 90.2549C299.922 90.3391 300.507 90.3813 300.917 90.4025C301.122 90.4131 301.284 90.4184 301.396 90.4211C301.451 90.4224 301.494 90.4231 301.524 90.4234L301.558 90.4237L301.567 90.4238L301.569 90.4238H301.57C301.57 90.4238 301.571 90.4238 301.571 90.0779L301.57 90.4238H306.637C306.7 90.4319 306.762 90.4396 306.824 90.447C307.524 90.532 308.109 90.5746 308.519 90.596C308.725 90.6066 308.887 90.612 308.998 90.6147C309.054 90.6161 309.097 90.6168 309.126 90.6171L309.16 90.6174L309.169 90.6174L309.172 90.6175H309.173C309.173 90.6175 309.173 90.6175 309.173 90.4238L309.173 90.6175H385.435V89.9257H385.257V89.732H306.689C305.356 89.5582 303.648 89.2295 301.943 88.6092C300.138 87.9521 298.356 86.9745 297.027 85.5238C295.705 84.0796 294.815 82.1491 294.815 79.5497C294.815 76.9502 295.705 75.0198 297.027 73.5756C298.356 72.1249 300.138 71.1473 301.943 70.4902C303.748 69.8334 305.557 69.5035 306.919 69.3383C307.6 69.2558 308.166 69.2146 308.561 69.194C308.758 69.1838 308.913 69.1787 309.017 69.1761C309.07 69.1749 309.109 69.1742 309.135 69.1739L309.165 69.1737L309.171 69.1736L309.173 69.1736H382.703H383.653V68.9801L447.368 68.9801H447.369H454.97V68.6342C454.97 68.9801 454.97 68.9801 454.97 68.9801H454.972L454.974 68.9801L454.983 68.98L455.017 68.9797C455.047 68.9794 455.09 68.9787 455.145 68.9774C455.206 68.9759 455.282 68.9737 455.371 68.9702C455.407 68.9688 455.446 68.9673 455.486 68.9654C455.53 68.9635 455.575 68.9613 455.624 68.9588C456.034 68.9377 456.619 68.8955 457.319 68.8112C458.719 68.643 460.591 68.3059 462.469 67.6286C464.346 66.9518 466.246 65.9284 467.68 64.3775C469.119 62.8198 470.071 60.7473 470.071 58.0091C470.071 55.271 469.119 53.1985 467.68 51.6408C466.246 50.0899 464.346 49.0665 462.469 48.3897C460.591 47.7124 458.719 47.3753 457.319 47.2071C456.619 47.1228 456.034 47.0806 455.624 47.0595C455.418 47.0489 455.257 47.0436 455.145 47.0409C455.09 47.0396 455.047 47.0389 455.017 47.0386L454.983 47.0383L454.974 47.0382L454.972 47.0382L454.971 47.0382C454.971 47.0382 454.97 47.0382 454.97 47.3841L454.971 47.0382L447.369 47.0382H447.368L371.284 47.0382H371.106V47.0934L348.834 47.0934H348.833L348.829 47.0934L348.81 47.0932L348.792 47.0929C348.777 47.0927 348.757 47.0923 348.734 47.0918C348.667 47.0902 348.567 47.0869 348.439 47.0803C348.182 47.0671 347.813 47.0405 347.371 46.9873C346.483 46.8806 345.306 46.6677 344.134 46.2451C342.961 45.8221 341.812 45.1957 340.959 44.272C340.111 43.3549 339.538 42.1278 339.538 40.4665C339.538 38.8053 340.111 37.5782 340.959 36.6611C341.812 35.7374 342.961 35.111 344.134 34.688C345.306 34.2654 346.483 34.0525 347.371 33.9458C347.813 33.8926 348.182 33.866 348.439 33.8528C348.567 33.8462 348.667 33.8429 348.734 33.8413C348.768 33.8405 348.794 33.8401 348.81 33.8399L348.829 33.8397L348.833 33.8397L348.833 33.8397L355.515 33.8397V33.8951H361.455H427.159H427.16H433.098V33.5492C433.098 33.8951 433.098 33.8951 433.098 33.8951H433.1L433.102 33.8951L433.109 33.895L433.136 33.8948L433.172 33.8943C433.191 33.894 433.212 33.8935 433.237 33.8929C433.325 33.8908 433.452 33.8866 433.613 33.8783C433.936 33.8617 434.394 33.8286 434.944 33.7625C436.041 33.6306 437.511 33.3662 438.986 32.8342C440.46 32.3026 441.958 31.4971 443.089 30.273C444.227 29.0422 444.977 27.4055 444.977 25.2484C444.977 23.0913 444.227 21.4546 443.089 20.2238C441.958 18.9996 440.46 18.1942 438.986 17.6626C437.511 17.1306 436.041 16.8661 434.944 16.7342C434.394 16.6681 433.936 16.635 433.613 16.6184C433.452 16.6101 433.325 16.6059 433.237 16.6038C433.193 16.6028 433.16 16.6022 433.136 16.602L433.109 16.6017L433.102 16.6017L433.1 16.6017C433.1 16.6017 433.098 16.6017 433.098 16.9475V16.6017H427.16H427.159H403.402H397.462H311.712H310.97H227.818L227.817 16.6017L227.812 16.6016L227.79 16.6014C227.77 16.6012 227.739 16.6007 227.699 16.5998C227.618 16.5978 227.498 16.5939 227.344 16.586C227.037 16.5702 226.597 16.5384 226.068 16.4748C225.007 16.3473 223.6 16.093 222.198 15.5874C220.795 15.0814 219.416 14.3304 218.39 13.2199C217.37 12.1161 216.682 10.64 216.682 8.64671C216.682 6.65339 217.37 5.1773 218.39 4.07347C219.416 2.96299 220.795 2.21204 222.198 1.70602C223.6 1.20042 225.007 0.946063 226.068 0.818593C226.597 0.754974 227.037 0.72324 227.344 0.707421C227.498 0.699515 227.618 0.695593 227.699 0.693648C227.739 0.692675 227.77 0.692197 227.79 0.691963L227.812 0.691761L227.817 0.691739L227.818 0.691736L343.265 0.691736H344.008V0H343.265H227.818H227.817ZM433.098 16.9475V17.2934L433.099 17.2934L433.105 17.2934L433.127 17.2936C433.147 17.2939 433.178 17.2943 433.218 17.2953C433.299 17.2973 433.419 17.3012 433.572 17.3091C433.879 17.3249 434.32 17.3566 434.849 17.4203C435.909 17.5477 437.316 17.8021 438.718 18.3077C440.121 18.8137 441.5 19.5647 442.527 20.6751C443.547 21.779 444.235 23.2551 444.235 25.2484C444.235 27.2417 443.547 28.7178 442.527 29.8216C441.5 30.9321 440.121 31.683 438.718 32.1891C437.316 32.6947 435.909 32.949 434.849 33.0765C434.32 33.1401 433.879 33.1718 433.572 33.1877C433.419 33.1956 433.299 33.1995 433.218 33.2014L433.173 33.2024L433.127 33.2031L433.105 33.2033L433.099 33.2033L433.098 33.2033H431.882C432.265 33.0974 432.656 32.9752 433.047 32.8342C434.521 32.3026 436.019 31.4971 437.15 30.273C438.287 29.0422 439.038 27.4055 439.038 25.2484C439.038 23.0913 438.287 21.4546 437.15 20.2238C436.019 18.9996 434.521 18.1942 433.047 17.6626C432.656 17.5216 432.265 17.3993 431.882 17.2934H433.098C433.098 17.2934 433.098 17.2934 433.098 16.9475ZM221.879 0.345868C221.879 0.691736 221.879 0.691736 221.879 0.691736L223.095 0.691736C222.712 0.797676 222.321 0.919901 221.93 1.06093C220.457 1.59251 218.959 2.39797 217.827 3.6221C216.69 4.85288 215.939 6.48961 215.939 8.64671C215.939 10.8038 216.69 12.4405 217.827 13.6713C218.959 14.8954 220.456 15.7009 221.93 16.2325C222.321 16.3735 222.712 16.4957 223.095 16.6017H221.879L221.878 16.6017L221.873 16.6016L221.85 16.6014C221.83 16.6012 221.8 16.6007 221.759 16.5998C221.678 16.5978 221.558 16.5939 221.405 16.586C221.098 16.5702 220.657 16.5384 220.128 16.4748C219.068 16.3473 217.661 16.093 216.259 15.5874C214.856 15.0814 213.477 14.3304 212.451 13.2199C211.43 12.1161 210.742 10.64 210.742 8.64671C210.742 6.65339 211.43 5.1773 212.451 4.07347C213.477 2.96299 214.856 2.21204 216.259 1.70602C217.661 1.20042 219.068 0.946063 220.128 0.818593C220.657 0.754974 221.098 0.72324 221.405 0.707421C221.558 0.699515 221.678 0.695593 221.759 0.693648C221.8 0.692675 221.83 0.692197 221.85 0.691963L221.873 0.691761L221.878 0.691739L221.879 0.691736L221.879 0.345868ZM343.844 47.0934H344.477C344.274 47.0314 344.07 46.9638 343.866 46.8902C342.622 46.4416 341.355 45.7607 340.396 44.7233C339.431 43.6793 338.796 42.2916 338.796 40.4665C338.796 38.6415 339.431 37.2538 340.396 36.2098C341.355 35.1724 342.622 34.4915 343.866 34.0429C344.07 33.9693 344.274 33.9017 344.477 33.8397H343.844L343.844 33.8397L343.84 33.8397L343.821 33.8399C343.805 33.8401 343.779 33.8405 343.745 33.8413C343.678 33.8429 343.578 33.8462 343.449 33.8528C343.193 33.866 342.824 33.8926 342.381 33.9458C341.494 34.0525 340.317 34.2654 339.145 34.688C337.972 35.111 336.823 35.7374 335.97 36.6611C335.122 37.5782 334.549 38.8053 334.549 40.4665C334.549 42.1278 335.122 43.3549 335.97 44.272C336.823 45.1957 337.972 45.8221 339.145 46.2451C340.317 46.6677 341.494 46.8806 342.381 46.9873C342.824 47.0405 343.193 47.0671 343.449 47.0803C343.578 47.0869 343.678 47.0902 343.745 47.0918L343.792 47.0928L343.821 47.0932L343.84 47.0934L343.844 47.0934H343.844ZM452.649 68.2884H454.97H454.972L454.979 68.2883L455.008 68.2881C455.034 68.2878 455.074 68.2871 455.126 68.2859C455.231 68.2834 455.385 68.2783 455.583 68.2681C455.978 68.2478 456.544 68.207 457.224 68.1252C458.587 67.9614 460.397 67.6344 462.201 66.9835C464.007 66.3323 465.789 65.3634 467.117 63.9261C468.439 62.4954 469.329 60.5835 469.329 58.0092C469.329 55.4348 468.439 53.5229 467.117 52.0922C465.789 50.6549 464.007 49.6861 462.201 49.0348C460.397 48.3839 458.587 48.0569 457.224 47.8931C456.544 47.8114 455.978 47.7705 455.583 47.7502C455.385 47.74 455.231 47.7349 455.126 47.7324C455.074 47.7312 455.034 47.7306 455.008 47.7303L454.979 47.73L454.972 47.73L454.97 47.73L452.649 47.73C453.367 47.9029 454.117 48.1191 454.867 48.3897C456.743 49.0665 458.644 50.0899 460.077 51.6408C461.517 53.1985 462.469 55.271 462.469 58.0092C462.469 60.7473 461.517 62.8198 460.077 64.3775C458.644 65.9284 456.743 66.9518 454.867 67.6286C454.117 67.8992 453.367 68.1155 452.649 68.2884ZM301.571 69.1736H303.918C303.191 69.3492 302.433 69.5694 301.673 69.8458C299.796 70.529 297.896 71.5617 296.462 73.1266C295.023 74.6979 294.072 76.7882 294.072 79.5497C294.072 82.3112 295.023 84.4014 296.462 85.9728C297.896 87.5376 299.796 88.5704 301.673 89.2535C302.176 89.4365 302.678 89.5949 303.172 89.732H301.571H301.569L301.562 89.732L301.533 89.7317C301.507 89.7314 301.467 89.7308 301.415 89.7296C301.31 89.727 301.156 89.722 300.958 89.7118C300.563 89.6914 299.997 89.6506 299.317 89.5689C297.954 89.4051 296.144 89.0781 294.34 88.4272C292.534 87.7759 290.752 86.8071 289.424 85.3698C288.101 83.9391 287.212 82.0272 287.212 79.4528C287.212 76.8785 288.101 74.9666 289.424 73.5359C290.752 72.0986 292.534 71.1297 294.34 70.4784C296.144 69.8276 297.954 69.5006 299.317 69.3368C299.997 69.255 300.563 69.2142 300.958 69.1939C301.156 69.1837 301.31 69.1786 301.415 69.1761C301.467 69.1749 301.507 69.1742 301.533 69.1739L301.562 69.1737L301.569 69.1736L301.571 69.1736Z"
                fill={colors['blue-500']}
              />
            </svg>
          </div>
        )
      case 'sunRight':
        return (
          <div className={style.cloudRight}>
            <svg
              width="1128"
              height="112"
              viewBox="0 0 1128 112"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              ref={ref}
            >
              <path
                className={style.cloudPath}
                data-state={inView ? 'animation' : undefined}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M750.798 0H744.032V0.37834C744.032 0 744.032 0 744.032 0H744.031L744.029 5.77301e-06L744.021 3.98248e-05L743.994 0.00029298C743.97 0.000577391 743.936 0.00113776 743.892 0.00224162C743.803 0.0044491 743.674 0.00883156 743.511 0.0175332C743.185 0.0349308 742.721 0.069627 742.164 0.138868C741.054 0.277105 739.566 0.554195 738.073 1.11167C736.581 1.66854 735.064 2.51282 733.917 3.79761C732.763 5.09029 732 6.81157 732 9.08074C732 11.3499 732.763 13.0712 733.917 14.3639C735.064 15.6487 736.581 16.4929 738.073 17.0498C739.566 17.6073 741.054 17.8844 742.164 18.0226C742.721 18.0919 743.185 18.1265 743.511 18.1439C743.674 18.1526 743.803 18.157 743.892 18.1592C743.936 18.1603 743.97 18.1609 743.994 18.1612L744.021 18.1614L744.029 18.1615L744.031 18.1615L744.032 18.1615C744.032 18.1615 744.032 18.1615 744.032 17.7831V18.1615L750.798 18.1615L750.798 18.1615H750.799H921.847H928.614V18.1603L1000.56 18.1603L1000.56 18.1603L1000.56 18.1603L1000.59 18.1605C1000.61 18.1608 1000.64 18.1613 1000.68 18.1623C1000.76 18.1643 1000.88 18.1684 1001.04 18.1767C1001.35 18.1933 1001.8 18.2266 1002.33 18.2934C1003.41 18.4271 1004.83 18.6939 1006.25 19.2242C1007.68 19.7551 1009.07 20.5426 1010.11 21.7053C1011.14 22.8602 1011.83 24.4023 1011.83 26.4843C1011.83 28.5664 1011.14 30.1085 1010.11 31.2633C1009.07 32.4261 1007.68 33.2135 1006.25 33.7445C1004.83 34.2748 1003.41 34.5416 1002.33 34.6753C1001.8 34.742 1001.35 34.7753 1001.04 34.7919C1000.88 34.8002 1000.76 34.8043 1000.68 34.8064C1000.64 34.8074 1000.61 34.8079 1000.59 34.8081L1000.56 34.8084L1000.56 34.8084L1000.56 34.8084L980.792 34.8084H974.487V34.8069L875.275 34.8069V35.1853C875.275 34.8069 875.275 34.8069 875.274 34.8069H875.274L875.272 34.8069L875.266 34.8069L875.245 34.8071C875.226 34.8073 875.199 34.8077 875.165 34.8085C875.096 34.81 874.995 34.8131 874.868 34.8192C874.614 34.8313 874.253 34.8555 873.819 34.9038C872.955 35.0001 871.796 35.1932 870.632 35.5825C868.32 36.3552 865.85 37.9586 865.85 41.2337C865.85 44.5087 868.32 46.1121 870.632 46.8849C871.796 47.2741 872.955 47.4673 873.819 47.5636C874.253 47.6118 874.614 47.636 874.868 47.6482C874.995 47.6542 875.096 47.6573 875.165 47.6588C875.199 47.6596 875.226 47.66 875.245 47.6602L875.266 47.6604L875.272 47.6604L875.274 47.6604H875.274L875.275 47.6596L875.275 47.656L875.275 47.6349L875.275 47.5459L875.275 47.2821V47.6604H877.153V47.6815L923.32 47.6815L1048.2 47.6815L1048.2 47.6815L1048.21 47.6815L1048.23 47.6817C1048.25 47.682 1048.28 47.6825 1048.32 47.6835C1048.4 47.6856 1048.53 47.6897 1048.68 47.698C1048.99 47.7146 1049.44 47.7479 1049.98 47.8146C1051.05 47.9483 1052.48 48.2151 1053.9 48.7454C1055.32 49.2764 1056.71 50.0638 1057.75 51.2265C1058.78 52.3814 1059.48 53.9235 1059.48 56.0056C1059.48 58.0876 1058.78 59.6297 1057.75 60.7846C1056.71 61.9473 1055.32 62.7348 1053.9 63.2657C1052.48 63.796 1051.05 64.0628 1049.98 64.1965C1049.44 64.2633 1048.99 64.2966 1048.68 64.3132C1048.53 64.3215 1048.4 64.3256 1048.32 64.3276L1048.27 64.3289L1048.23 64.3294L1048.21 64.3296L1048.2 64.3296H1048.2L953.092 64.3296V64.3285L860.875 64.3285L827.894 64.3285H827.894H827.893H821.127V64.7069L821.127 64.4027C821.127 64.3588 821.127 64.3409 821.127 64.3336C821.127 64.3285 821.127 64.3285 821.127 64.3285H821.126L821.124 64.3285L821.116 64.3286L821.089 64.3288L821.056 64.3293C821.037 64.3296 821.014 64.3301 820.987 64.3308C820.898 64.333 820.769 64.3374 820.606 64.3461C820.28 64.3635 819.816 64.3982 819.26 64.4674C818.149 64.6056 816.661 64.8827 815.168 65.4402C813.677 65.9971 812.159 66.8413 811.012 68.1261C809.858 69.4188 809.095 71.1401 809.095 73.4093C809.095 75.6784 809.858 77.3997 811.012 78.6924C812.159 79.9772 813.677 80.8215 815.168 81.3783C816.661 81.9358 818.149 82.2129 819.26 82.3511C819.816 82.4204 820.28 82.4551 820.606 82.4725C820.769 82.4812 820.898 82.4856 820.987 82.4878C821.031 82.4889 821.066 82.4894 821.089 82.4897L821.116 82.49L821.124 82.49H821.126L821.127 82.49C821.127 82.49 821.127 82.49 821.127 82.1117V82.49L827.893 82.49L827.894 82.49H827.894H952.775H953.57V82.4888H957.457H957.459L957.464 82.4888L957.486 82.489L957.527 82.4897L957.579 82.4908C957.661 82.4928 957.783 82.497 957.938 82.5052C958.249 82.5218 958.696 82.5551 959.232 82.6219C960.306 82.7556 961.732 83.0224 963.152 83.5527C964.574 84.0836 965.97 84.8711 967.008 86.0338C968.04 87.1887 968.733 88.7308 968.733 90.8128C968.733 92.8949 968.04 94.437 967.008 95.5919C965.97 96.7546 964.574 97.542 963.152 98.073C961.732 98.6033 960.306 98.8701 959.232 99.0038C958.696 99.0706 958.249 99.1038 957.938 99.1204C957.783 99.1287 957.661 99.1329 957.579 99.1349C957.538 99.1359 957.507 99.1364 957.486 99.1367L957.464 99.1369L957.459 99.1369H957.458H954.825V99.1358H855.613V99.5141C855.613 99.1358 855.613 99.1358 855.612 99.1358H855.612L855.61 99.1358L855.604 99.1358L855.583 99.136C855.564 99.1362 855.537 99.1366 855.503 99.1374C855.433 99.1389 855.333 99.142 855.206 99.1481C854.952 99.1602 854.59 99.1844 854.157 99.2326C853.293 99.3289 852.134 99.5221 850.97 99.9114C848.658 100.684 846.188 102.288 846.188 105.563C846.188 108.838 848.658 110.441 850.97 111.214C852.134 111.603 853.293 111.796 854.157 111.892C854.59 111.941 854.952 111.965 855.206 111.977C855.333 111.983 855.433 111.986 855.503 111.988C855.515 111.988 855.526 111.988 855.537 111.988C855.555 111.989 855.571 111.989 855.583 111.989L855.604 111.989L855.61 111.989H855.612H855.612C855.613 111.989 855.613 111.989 855.613 111.611V111.989H860.008C860.113 111.994 860.197 111.997 860.256 111.998C860.273 111.999 860.287 111.999 860.3 111.999C860.312 112 860.323 112 860.331 112L860.352 112L860.358 112H860.359H860.36C860.36 112 860.36 112 860.36 111.989H860.36V112L989.855 112V111.989H993.646V111.233H860.027L860.015 111.232C859.79 111.221 859.467 111.198 859.079 111.151C858.3 111.059 857.269 110.875 856.244 110.509C855.216 110.143 854.215 109.603 853.475 108.811C852.743 108.029 852.251 106.986 852.251 105.573C852.251 104.16 852.743 103.118 853.475 102.335C854.215 101.544 855.216 101.004 856.244 100.637C857.269 100.272 858.3 100.088 859.079 99.9951C859.467 99.949 859.79 99.926 860.015 99.9145C860.127 99.9088 860.215 99.906 860.274 99.9046C860.303 99.9039 860.326 99.9035 860.34 99.9034L860.356 99.9032L860.36 99.9032H860.36H860.36L947.928 99.9032V99.8936H957.458H957.458H957.459L964.224 99.8936V99.5152C964.224 99.8936 964.225 99.8936 964.225 99.8936H964.225H964.228L964.235 99.8935L964.262 99.8933C964.286 99.893 964.32 99.8924 964.365 99.8913C964.453 99.8891 964.582 99.8848 964.745 99.8761C965.071 99.8587 965.536 99.824 966.092 99.7547C967.203 99.6165 968.69 99.3394 970.183 98.7819C971.675 98.225 973.192 97.3808 974.339 96.096C975.493 94.8033 976.256 93.082 976.256 90.8128C976.256 88.5437 975.493 86.8224 974.339 85.5297C973.192 84.2449 971.675 83.4006 970.183 82.8438C968.69 82.2863 967.203 82.0092 966.092 81.871C965.536 81.8017 965.071 81.767 964.745 81.7496C964.582 81.7409 964.453 81.7366 964.365 81.7344C964.32 81.7332 964.286 81.7327 964.262 81.7324L964.235 81.7322L964.228 81.7321L964.225 81.7321H964.225C964.225 81.7321 964.224 81.7321 964.224 82.1105V81.7321H957.459H957.458H957.458L832.576 81.7321H831.781V81.7333H827.894H827.894L827.893 81.7333L827.888 81.7333L827.865 81.7331L827.835 81.7327C827.818 81.7324 827.797 81.7319 827.773 81.7313C827.69 81.7293 827.569 81.7252 827.413 81.7169C827.102 81.7003 826.656 81.667 826.12 81.6002C825.045 81.4665 823.62 81.1997 822.199 80.6694C820.777 80.1385 819.381 79.351 818.343 78.1883C817.312 77.0334 816.618 75.4913 816.618 73.4093C816.618 71.3272 817.312 69.7851 818.343 68.6303C819.381 67.4675 820.777 66.6801 822.199 66.1491C823.62 65.6188 825.045 65.352 826.12 65.2183C826.656 65.1516 827.102 65.1183 827.413 65.1017C827.569 65.0934 827.69 65.0893 827.773 65.0872L827.824 65.0861L827.865 65.0854L827.888 65.0852L827.893 65.0852L827.894 65.0852H827.894H879.9V65.0863H1015.22L1048.2 65.0863H1048.2H1048.2H1054.97V64.708C1054.97 65.0863 1054.97 65.0863 1054.97 65.0863H1054.97L1054.97 65.0863L1054.98 65.0863L1055.01 65.086L1055.05 65.0852L1055.11 65.0841C1055.2 65.0819 1055.33 65.0775 1055.49 65.0688C1055.82 65.0514 1056.28 65.0167 1056.84 64.9474C1057.95 64.8092 1059.43 64.5321 1060.93 63.9746C1062.42 63.4178 1063.94 62.5735 1065.08 61.2887C1066.24 59.996 1067 58.2747 1067 56.0056C1067 53.7364 1066.24 52.0151 1065.08 50.7224C1063.94 49.4376 1062.42 48.5934 1060.93 48.0365C1059.43 47.479 1057.95 47.2019 1056.84 47.0637C1056.28 46.9945 1055.82 46.9598 1055.49 46.9424C1055.33 46.9337 1055.2 46.9293 1055.11 46.9271C1055.06 46.926 1055.03 46.9254 1055.01 46.9251L1054.98 46.9249L1054.97 46.9248L1054.97 46.9248L1054.97 46.9248C1054.97 46.9248 1054.97 46.9248 1054.97 47.3032V46.9248L1048.2 46.9248H1048.2H1048.2L1013.31 46.9248V46.9037H879.689L879.677 46.9031C879.452 46.8916 879.129 46.8687 878.741 46.8226C877.962 46.7301 876.931 46.5458 875.906 46.1803C874.878 45.814 873.877 45.2737 873.137 44.4825C872.405 43.7 871.913 42.6576 871.913 41.2444C871.913 39.8312 872.405 38.7888 873.137 38.0062C873.877 37.215 874.878 36.6747 875.906 36.3084C876.931 35.9429 877.962 35.7586 878.741 35.6662C879.129 35.6201 879.452 35.5971 879.677 35.5856C879.789 35.5799 879.877 35.5771 879.936 35.5757C879.965 35.575 879.988 35.5746 880.002 35.5745L880.018 35.5743L880.022 35.5743H880.022H880.022L967.59 35.5743V35.5651L968.373 35.5651L981.225 35.5651L1000.56 35.5651H1000.56H1000.56H1007.33V35.1867C1007.33 35.5651 1007.33 35.5651 1007.33 35.5651H1007.33L1007.33 35.5651L1007.34 35.565L1007.36 35.5648C1007.39 35.5645 1007.42 35.5639 1007.47 35.5628C1007.55 35.5606 1007.68 35.5562 1007.85 35.5475C1008.17 35.5301 1008.64 35.4954 1009.19 35.4262C1010.3 35.288 1011.79 35.0109 1013.28 34.4534C1014.78 33.8965 1016.29 33.0522 1017.44 31.7675C1018.59 30.4748 1019.36 28.7535 1019.36 26.4843C1019.36 24.2152 1018.59 22.4939 1017.44 21.2012C1016.29 19.9164 1014.78 19.0721 1013.28 18.5153C1011.79 17.9578 1010.3 17.6807 1009.19 17.5425C1008.64 17.4732 1008.17 17.4385 1007.85 17.4211C1007.68 17.4124 1007.55 17.408 1007.47 17.4058C1007.42 17.4047 1007.39 17.4042 1007.36 17.4039L1007.34 17.4036L1007.33 17.4036L1007.33 17.4036L1007.33 17.4036C1007.33 17.4036 1007.33 17.4036 1007.33 17.7819V17.4036L1000.56 17.4036L1000.56 17.4036H1000.56L829.511 17.4036H822.744V17.4048H750.799H750.799H750.799L750.798 17.4048L750.793 17.4048L750.77 17.4046C750.749 17.4043 750.718 17.4038 750.677 17.4028C750.595 17.4007 750.474 17.3966 750.318 17.3883C750.007 17.3717 749.561 17.3384 749.025 17.2717C747.95 17.138 746.524 16.8712 745.104 16.3409C743.682 15.8099 742.286 15.0225 741.248 13.8598C740.217 12.7049 739.523 11.1628 739.523 9.08074C739.523 6.99871 740.217 5.45659 741.248 4.30172C742.286 3.13896 743.682 2.35154 745.104 1.82061C746.524 1.29029 747.95 1.02347 749.025 0.889762C749.561 0.823028 750.007 0.789737 750.318 0.773141C750.474 0.764845 750.595 0.760729 750.677 0.758688C750.718 0.757667 750.749 0.757165 750.77 0.756918L750.793 0.756707L750.798 0.756683L750.799 0.75668L750.799 0.75668L866.961 0.75668H888.852V0H866.961H750.799H750.798H750.798ZM744.032 0.75668L744.032 0.75668V0.37834C744.032 0.75668 744.032 0.75668 744.032 0.75668ZM744.032 0.75668L745.909 0.75668C745.556 0.860155 745.198 0.977833 744.84 1.11167C743.348 1.66854 741.831 2.51282 740.684 3.79761C739.53 5.09029 738.767 6.81157 738.767 9.08074C738.767 11.3499 739.53 13.0712 740.684 14.3639C741.831 15.6487 743.348 16.4929 744.84 17.0498C745.198 17.1836 745.556 17.3013 745.909 17.4048H744.032H744.032H744.032L744.031 17.4048L744.026 17.4048L744.003 17.4046C743.983 17.4043 743.951 17.4038 743.91 17.4028C743.828 17.4007 743.707 17.3966 743.551 17.3883C743.24 17.3717 742.794 17.3384 742.258 17.2717C741.183 17.138 739.758 16.8712 738.337 16.3409C736.915 15.8099 735.519 15.0225 734.481 13.8598C733.45 12.7049 732.756 11.1628 732.756 9.08074C732.756 6.99871 733.45 5.45659 734.481 4.30172C735.519 3.13896 736.915 2.35154 738.337 1.82061C739.758 1.29029 741.183 1.02347 742.258 0.889762C742.794 0.823028 743.24 0.789737 743.551 0.773141C743.707 0.764845 743.828 0.760729 743.91 0.758688C743.951 0.757667 743.983 0.757165 744.003 0.756918L744.026 0.756707L744.031 0.756683L744.032 0.75668L744.032 0.75668ZM875.743 35.5636H875.275H875.275H875.274L875.27 35.5636L875.253 35.5638C875.237 35.5639 875.213 35.5643 875.182 35.565C875.118 35.5664 875.024 35.5692 874.904 35.575C874.663 35.5865 874.318 35.6095 873.903 35.6558C873.071 35.7485 871.969 35.9333 870.871 36.3002C868.66 37.0395 866.606 38.4603 866.606 41.2337C866.606 44.007 868.66 45.4278 870.871 46.1672C871.969 46.534 873.071 46.7188 873.903 46.8115C874.318 46.8578 874.663 46.8808 874.904 46.8923C875.024 46.8981 875.118 46.9009 875.182 46.9023L875.227 46.9032L875.253 46.9036L875.27 46.9037L875.274 46.9037L875.275 46.9037H875.275H875.682L875.652 46.8931C874.558 46.5033 873.437 45.9096 872.585 44.9996C871.726 44.0811 871.157 42.8554 871.157 41.2444C871.157 39.6334 871.726 38.4076 872.585 37.4891C873.437 36.5791 874.558 35.9854 875.652 35.5956C875.682 35.5848 875.713 35.5741 875.743 35.5636ZM1007.33 34.8084H1005.45C1005.8 34.7049 1006.16 34.5872 1006.52 34.4534C1008.01 33.8965 1009.53 33.0522 1010.67 31.7675C1011.83 30.4748 1012.59 28.7535 1012.59 26.4843C1012.59 24.2152 1011.83 22.4939 1010.67 21.2012C1009.53 19.9164 1008.01 19.0721 1006.52 18.5153C1006.16 18.3814 1005.8 18.2637 1005.45 18.1603H1007.33L1007.33 18.1603L1007.33 18.1603L1007.35 18.1605L1007.39 18.1611L1007.45 18.1623C1007.53 18.1643 1007.65 18.1684 1007.81 18.1767C1008.12 18.1933 1008.56 18.2266 1009.1 18.2933C1010.17 18.4271 1011.6 18.6939 1013.02 19.2242C1014.44 19.7551 1015.84 20.5426 1016.88 21.7053C1017.91 22.8602 1018.6 24.4023 1018.6 26.4843C1018.6 28.5664 1017.91 30.1085 1016.88 31.2633C1015.84 32.4261 1014.44 33.2135 1013.02 33.7445C1011.6 34.2748 1010.17 34.5416 1009.1 34.6753C1008.56 34.742 1008.12 34.7753 1007.81 34.7919C1007.65 34.8002 1007.53 34.8043 1007.45 34.8064C1007.42 34.807 1007.4 34.8074 1007.38 34.8077L1007.35 34.8081L1007.33 34.8084L1007.33 34.8084L1007.33 34.8084ZM1053.09 64.3296H1054.97L1054.97 64.3296L1054.97 64.3296L1055 64.3294C1055.02 64.3291 1055.05 64.3286 1055.09 64.3276C1055.13 64.3267 1055.17 64.3254 1055.22 64.3236C1055.28 64.3212 1055.36 64.3178 1055.45 64.3132C1055.76 64.2966 1056.21 64.2633 1056.74 64.1965C1057.82 64.0628 1059.24 63.796 1060.66 63.2657C1062.08 62.7348 1063.48 61.9473 1064.52 60.7846C1065.55 59.6297 1066.24 58.0876 1066.24 56.0056C1066.24 53.9235 1065.55 52.3814 1064.52 51.2265C1063.48 50.0638 1062.08 49.2764 1060.66 48.7454C1059.24 48.2151 1057.82 47.9483 1056.74 47.8146C1056.21 47.7479 1055.76 47.7146 1055.45 47.698C1055.29 47.6897 1055.17 47.6856 1055.09 47.6835C1055.05 47.6825 1055.02 47.682 1055 47.6817L1054.97 47.6815L1054.97 47.6815L1054.97 47.6815H1053.09C1053.44 47.785 1053.8 47.9027 1054.16 48.0365C1055.65 48.5934 1057.17 49.4376 1058.32 50.7224C1059.47 52.0151 1060.23 53.7364 1060.23 56.0056C1060.23 58.2747 1059.47 59.996 1058.32 61.2887C1057.17 62.5735 1055.65 63.4178 1054.16 63.9746C1053.8 64.1085 1053.44 64.2261 1053.09 64.3296ZM821.127 65.0852H823.004C822.652 65.1887 822.293 65.3064 821.935 65.4402C820.443 65.9971 818.926 66.8413 817.779 68.1261C816.625 69.4188 815.862 71.1401 815.862 73.4093C815.862 75.6784 816.625 77.3997 817.779 78.6924C818.926 79.9772 820.443 80.8215 821.935 81.3783C822.293 81.5122 822.652 81.6299 823.004 81.7333H821.127H821.127L821.126 81.7333L821.121 81.7333L821.098 81.7331L821.083 81.7329L821.048 81.7323L821.006 81.7313C820.924 81.7293 820.802 81.7252 820.647 81.7169C820.335 81.7003 819.889 81.667 819.353 81.6002C818.279 81.4665 816.853 81.1997 815.432 80.6694C814.01 80.1385 812.614 79.351 811.576 78.1883C810.545 77.0334 809.851 75.4913 809.851 73.4093C809.851 71.3272 810.545 69.7851 811.576 68.6303C812.614 67.4675 814.01 66.6801 815.432 66.1491C816.853 65.6188 818.279 65.352 819.353 65.2183C819.889 65.1516 820.335 65.1183 820.647 65.1017C820.802 65.0934 820.924 65.0893 821.006 65.0872C821.047 65.0862 821.078 65.0857 821.098 65.0854L821.121 65.0852L821.126 65.0852L821.127 65.0852H821.127ZM962.347 99.1369L964.224 99.1369H964.225L964.231 99.1369L964.253 99.1367C964.274 99.1364 964.305 99.1359 964.346 99.1349C964.428 99.1329 964.549 99.1287 964.705 99.1204C965.016 99.1038 965.462 99.0706 965.999 99.0038C967.073 98.8701 968.499 98.6033 969.919 98.073C971.341 97.542 972.737 96.7546 973.775 95.5919C974.806 94.437 975.5 92.8949 975.5 90.8128C975.5 88.7308 974.806 87.1887 973.775 86.0338C972.737 84.8711 971.341 84.0836 969.919 83.5527C968.499 83.0224 967.073 82.7556 965.999 82.6219C965.462 82.5551 965.016 82.5218 964.705 82.5052C964.549 82.497 964.428 82.4928 964.346 82.4908C964.305 82.4898 964.274 82.4893 964.253 82.489L964.231 82.4888L964.225 82.4888H964.224H962.347C962.7 82.5923 963.058 82.7099 963.417 82.8438C964.908 83.4006 966.425 84.2449 967.572 85.5297C968.727 86.8224 969.489 88.5437 969.489 90.8128C969.489 93.082 968.726 94.8033 967.572 96.096C966.425 97.3808 964.908 98.225 963.417 98.7819C963.058 98.9157 962.7 99.0334 962.347 99.1369ZM855.613 99.8925H856.081C856.051 99.903 856.02 99.9137 855.99 99.9245C854.896 100.314 853.774 100.908 852.923 101.818C852.064 102.737 851.495 103.962 851.495 105.573C851.495 107.184 852.064 108.41 852.923 109.329C853.774 110.239 854.896 110.832 855.99 111.222L856.02 111.233H855.613H855.613H855.612L855.608 111.233L855.591 111.232C855.575 111.232 855.551 111.232 855.52 111.231C855.456 111.23 855.362 111.227 855.242 111.221C855.001 111.21 854.656 111.187 854.241 111.14C853.409 111.048 852.306 110.863 851.209 110.496C848.997 109.757 846.944 108.336 846.944 105.563C846.944 102.789 848.997 101.368 851.209 100.629C852.307 100.262 853.409 100.077 854.241 99.9847C854.656 99.9384 855.001 99.9154 855.242 99.9039C855.362 99.8981 855.456 99.8953 855.52 99.8939C855.551 99.8932 855.575 99.8928 855.591 99.8927L855.608 99.8925L855.612 99.8925L855.613 99.8925H855.613Z"
                fill={colors['blue-500']}
              />
            </svg>
          </div>
        )
      case 'moonTop':
        return (
          <div className={style.cloudTop}>
            <svg
              width="710"
              height="68"
              viewBox="0 0 710 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              ref={ref}
            >
              <path
                className={style.cloudPath}
                data-state={inView ? 'animation' : undefined}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M510.275 67.8793L293.198 67.8794L293.198 66.8794L506.701 66.8793C513.955 65.0602 519.33 58.4885 519.33 50.6587C519.33 42.8303 513.955 36.2588 506.701 34.4397L462.157 34.4397L245.079 34.4398L245.077 34.4398L245.074 34.4397L245.061 34.4397L245.014 34.4392C244.972 34.4387 244.912 34.4376 244.834 34.4355C244.679 34.4313 244.453 34.4229 244.166 34.4063C243.592 34.373 242.776 34.3066 241.797 34.174C241.297 34.1064 240.755 34.0215 240.18 33.9147C236.426 33.7102 233.001 32.2631 230.308 29.9767C229.227 29.1978 228.214 28.2815 227.329 27.2032C225.324 24.7597 224 21.5117 224 17.2199C224 12.9282 225.324 9.68019 227.329 7.23661C228.213 6.15871 229.226 5.24261 230.307 4.46387C233 2.17713 236.425 0.729678 240.18 0.525126C240.755 0.418399 241.297 0.333476 241.797 0.265864C242.776 0.133288 243.592 0.0668739 244.166 0.0335945C244.453 0.0169471 244.679 0.00857 244.834 0.00435856L244.924 0.0021918C244.96 0.00144412 244.99 0.000963465 245.014 0.000650657L245.061 0.000170001L245.074 0.000108965L245.077 0.000101335L245.078 0.000101335L373.201 9.01281e-05L373.201 1.00009L248.653 1.0001C241.399 2.81922 236.024 9.39072 236.024 17.2191C236.024 25.0489 241.399 31.6206 248.653 33.4398L510.073 33.4397L510.275 33.4397L510.277 33.4397L510.281 33.4397L510.293 33.4397L510.341 33.4402C510.382 33.4408 510.442 33.4418 510.52 33.4439C510.675 33.4482 510.902 33.4565 511.188 33.4732C511.762 33.5065 512.579 33.5729 513.558 33.7054C514.057 33.7731 514.599 33.858 515.174 33.9647C518.929 34.1693 522.355 35.6167 525.047 37.9034C526.128 38.6822 527.141 39.5983 528.026 40.6762C530.031 43.1198 531.355 46.3677 531.354 50.6595C531.354 54.9513 530.031 58.1992 528.026 60.6428C527.141 61.7211 526.128 62.6374 525.046 63.4164C522.354 65.7027 518.929 67.1498 515.174 67.3543C514.599 67.461 514.057 67.546 513.558 67.6136C512.579 67.7461 511.762 67.8126 511.188 67.8458C510.902 67.8625 510.675 67.8709 510.52 67.8751C510.442 67.8772 510.382 67.8782 510.341 67.8788L510.293 67.8793L510.281 67.8793L510.277 67.8793L510.275 67.8793Z"
                fill={colors['blue-500']}
              />
            </svg>
          </div>
        )
      case 'moonBottom':
        return (
          <div className={style.cloudBottom}>
            <svg
              width="710"
              height="35"
              viewBox="0 0 710 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              ref={ref}
            >
              <path
                className={style.cloudPath}
                data-state={inView ? 'animation' : undefined}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M147.079 34.4399L364.157 34.4399L364.157 33.4399L150.653 33.4399C143.399 31.6208 138.025 25.049 138.025 17.2193C138.025 9.39085 143.399 2.81936 150.653 1.00023L275.202 1.00022L275.202 0.000219645L147.079 0.000230853L147.077 0.000230853L147.074 0.000242297L147.061 0.000303334L147.014 0.00078399C146.972 0.00132568 146.912 0.00238999 146.835 0.00449571C146.679 0.00870715 146.453 0.0170804 146.166 0.0337278C145.592 0.0670111 144.776 0.133421 143.797 0.266001C143.297 0.333605 142.755 0.418524 142.181 0.525244C138.425 0.729792 135 2.17726 132.307 4.46405C131.226 5.24277 130.213 6.15886 129.329 7.23674C127.324 9.68032 126 12.9283 126 17.2201C126 21.5118 127.324 24.7598 129.329 27.2034C130.214 28.2816 131.227 29.198 132.308 29.9769C135.001 32.2632 138.426 33.7103 142.18 33.9148C142.755 34.0216 143.297 34.1065 143.797 34.1741C144.776 34.3067 145.592 34.3731 146.166 34.4064C146.453 34.423 146.679 34.4314 146.835 34.4356C146.912 34.4377 146.972 34.4388 147.014 34.4393L147.061 34.4398L147.074 34.4399L147.077 34.4399L147.079 34.4399Z"
                fill={colors['blue-500']}
              />
            </svg>
          </div>
        )
      default:
        return <></>
    }
  }

  return <>{renderSwitch(name)}</>
}

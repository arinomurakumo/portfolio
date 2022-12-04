export type ColorNamesType = 'aisumicha' | 'shinku' | 'rurikon' | 'rurikonHorizontal' | 'kinariiro' | 'yamabukiiro'
export type ColorDataType = {
  [key in ColorNamesType]: {
    [key: string]: string
  }
}

export const colorData: ColorDataType = {
  aisumicha: {
    name: '藍墨茶',
    ruby: 'あいすみちゃ',
    description: `
    藍墨茶（あいすみちゃ）とは、藍みを帯びた墨色のことで、「相済茶」とも書かれます。「藍墨」は当て字。色名に「茶」とありますが、「くろ」の色譜です。\n
    色名の由来は『手鑑模様節用』によると、「昔、根津権現の祭りの時に、浅草で三右衛門とか助七などという連中が喧嘩をし、その仲直りができた祝儀のしるしに、同じ色を染めさせて揃って着用した」ことから、一件落着という意味で、その色を「あいすみ茶」というようになったとのことです。 江戸中期に愛用されました。
    `,
    color: 'var(--color-aisumicha-800)',
    colorCode: 'aisumicha-800',
    url: 'https://irocore.com/aisumicha/',
  },
  shinku: {
    name: '深紅',
    ruby: 'しんく',
    description: `
    深紅（しんく）とは、深みのある真っ赤な紅色のことです。古くは「ふかきくれない」「こきくれない」「こきべに」とも読まれ、別に『真紅 しんく』とも表記します。\n
    『韓紅 からくれない』は同色。現在では「深紅の花びら」などのように「真っ赤」と同じ意味でも使われます。\n
    \n
    古来より紅色は多くの人々を魅了した色ですが、紅花がとても高価であったため、深紅のような濃い紅色は『禁色 きんじき』とされていました。深紅という名前は、茜や蘇芳などの混ざり物がない、正真正銘の紅花による染め色であることが強調された色名となっています。
`,
    color: 'var(--color-shinku-800)',
    colorCode: 'shinku-800',
    url: 'https://irocore.com/shinku/',
  },
  rurikon: {
    name: '瑠璃紺',
    ruby: 'るりこん',
    description: `
      瑠璃紺（るりこん）とは、瑠璃色がかった紺色の意味で深い紫みの青色のことです。\n
      別名「紺瑠璃こんるり」とも。仏の髪や仏国土などの色として経典にも見られる伝統ある色名です。
    `,
    color: 'var(--color-rurikon-800)',
    colorCode: 'rurikon-800',
    url: 'https://irocore.com/rurikon/',
  },
  rurikonHorizontal: {
    name: '瑠璃紺',
    ruby: 'るりこん',
    description: `
      瑠璃紺（るりこん）とは、瑠璃色がかった紺色の意味で深い紫みの青色のことです。\n
      別名「紺瑠璃こんるり」とも。仏の髪や仏国土などの色として経典にも見られる伝統ある色名です。
    `,
    color: 'var(--color-rurikon-800)',
    colorCode: 'rurikon-800',
    url: 'https://irocore.com/rurikon/',
  },
  kinariiro: {
    name: '生成色',
    ruby: 'きなりいろ',
    description: `
      生成色（きなりいろ）とは、晒 さらす前の木綿のようなわずかに赤みがかった黄みの白色のことです。\n
      「ナチュラルカラー」が流行した昭和になって生まれた色で、染めたり晒したりしていない生地を指していた「生成 きなり」が色名として一般化しました。
    `,
    color: 'var(--color-kinariiro-400)',
    colorCode: 'kinariiro-400',
    url: 'https://irocore.com/kinari-iro/',
  },
  yamabukiiro: {
    name: '山吹色',
    ruby: 'やまぶきいろ',
    description: `
    山吹色（やまぶきいろ）は、山吹の花のような鮮やかな赤みを帯びた黄色のことです。\n
    色名は黄色の花を咲かせる植物の山吹に由来し、平安時代より用いられてきました。\n
    また『花山吹』として重 かさねの色目 いろめにもなっており「表、朽葉色 くちばいろ・裏、山吹色」等があります。
    `,
    color: 'var(--color-yamabukiiro-800)',
    colorCode: 'yamabukiiro-800',
    url: 'https://irocore.com/yamabuki-iro/',
  },
}

type MediaQuery = {
  max?: number,
  min?: number,
}

export const mediaQuery = (queries: MediaQuery) => {
  if (!Object.keys(queries).length) {
    return ''
  }

  const { max, min } = queries

  let query = '@media all '

  if (queries.max) {
    query += `and (max-width: ${max}px)`
  }

  if (queries.min) {
    query += `and (min-width: ${min}px)`
  }

  return query
}

export const sm = mediaQuery({ max: 640 })
export const mdMax = mediaQuery({ max: 767 })
export const md = mediaQuery({ min: 768 })
export const lg = mediaQuery({ min: 1024 })
export const xl = mediaQuery({ min: 1280 })
export const xl2 = mediaQuery({ min: 1536 })

export default function wordJoin (
  words: unknown[] = [],
  options: {
    conjunction?: string
    oxford?: boolean
    separator?: string
  } = {}
): string {
  const wordCount = words.length

  if (wordCount === 0) {
    return ''
  } else if (wordCount === 1) {
    return `${words[0]}`
  }

  const conjunction = options.conjunction || 'and'

  if (wordCount === 2) {
    return `${words[0]} ${conjunction} ${words[1]}`
  }

  const lastIndex = wordCount - 1
  const separator = options.separator || ','

  let start = words[0]

  for (let index = 1; index < lastIndex; index++) {
    /* skip first (1) and last (lastIndex) words */
    start += `${separator} ${words[index]}`
  }

  const end = ` ${conjunction} ${words[lastIndex]}`

  return options.oxford
    ? `${start}${separator}${end}`
    : `${start}${end}`
}

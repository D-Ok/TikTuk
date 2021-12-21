export const numberToText = (number) => {
  if (!number) return

  switch (true) {
    case number < 1000:
      return number
    case number < 1_000_000:
      return `${Math.floor(number / 1000)}k`
    default:
      return `${Math.floor(number / 1_000_000)}m`
  }
}

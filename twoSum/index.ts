export default function twoSum(target: number, array: Array<number>) {
  const map = {} as Record<number, number>

  for (let i = 0; i < array.length; i++) {
    const current = array[i]!
    const diff = target - current

    if (typeof map[diff] === "number") return [map[diff], i]

    if (typeof map[diff] !== "number") map[current] = i
  }
  return []
}

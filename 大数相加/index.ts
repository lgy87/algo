function num(char?: string) {
  if (!char) return 0
  return +char
}

export default function bigAdd(lhs: string, rhs: string) {
  if (!(lhs || rhs)) return "0"
  if (!lhs) return rhs
  if (!rhs) return lhs

  const lhsLength = lhs.length
  const rhsLength = rhs.length
  const maxLength = Math.max(lhsLength, rhsLength)

  const result = []
  let carry = 0

  for (let i = 0; i < maxLength; i++) {
    let sum = num(lhs[lhsLength - 1 - i]) + num(rhs[rhsLength - 1 - i]) + carry
    carry = 0

    if (sum >= 10) {
      sum -= 10
      carry = 1
    }

    result.push(sum)
  }

  // 检查最高位有没有进位
  if (carry) result.push(1)

  return result.reverse().join("")
}

bigAdd("42", "9")

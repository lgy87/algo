import isSymmetric from "./index"

console.log(isSymmetric)

test("如果是空树，应该返回true", () => {
  expect(isSymmetric())
})

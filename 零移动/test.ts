import move0ToTheEnd from "./index"

test("如果数组中不包含0，则返回原数组", () => {
  expect(move0ToTheEnd([1, 2, 3])).toEqual([1, 2, 3])
})

test("可以处理数组首部0的情况", () => {
  expect(move0ToTheEnd([0, 0, 1, 2, 3])).toEqual([1, 2, 3, 0, 0])
})

test("可以处理数组中间连续0的情况", () => {
  expect(move0ToTheEnd([1, 0, 2, 0, 0, 3])).toEqual([1, 2, 3, 0, 0, 0])
  expect(move0ToTheEnd([1, 3, 0, 0, 0, 2])).toEqual([1, 3, 2, 0, 0, 0])
})

test("可以处理数组尾部0的情况", () => {
  expect(move0ToTheEnd([1, 2, 3, 0, 0, 0])).toEqual([1, 2, 3, 0, 0, 0])
})

test("可以处理数组中全部0的情况", () => {
  expect(move0ToTheEnd([0, 0, 0, 0, 0])).toEqual([0, 0, 0, 0, 0])
})

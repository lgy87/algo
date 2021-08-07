import twoSum from "./index"

test("可以正确查找和为指定数字的索引", () => {
  expect(twoSum(42, [11, 24, 63, 31, 99, 48, 52, 3])).toEqual([0, 3])
})

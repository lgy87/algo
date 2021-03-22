import tree from "./Tree"

test("可以构建空树", () => {
  expect(tree([])).toEqual(tree.empty)
})

test("可以计算高度", () => {
  expect(tree([]).height()).toBe(0)
  // expect(tree([1]).height()).toBe(0)
})

test.skip("可以显示空树", () => {
  expect(tree([]).toString()).toBe("()")
})

test.skip("可以显示只有一个节点的树", () => {
  expect(tree([1]).toString()).toBe("(1)")
})

test.skip("可以显示有两个节点的树", () => {
  expect(tree([1, 2]).toString()).toBe(`
  (1)
  / \
 (2)(3)
  `)
})

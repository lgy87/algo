import Tree from "./Tree"

test("可以构建空树", () => {
  expect(Tree.from([])).toBe(Tree.empty)
  expect(Tree.of()).toBe(Tree.empty)
})

test("可以正确计算满树的高度", () => {
  expect(Tree.from([]).height()).toBe(0)
  expect(Tree.from([1]).height()).toBe(0)
  expect(Tree.from([1, 2]).height()).toBe(1)
  expect(Tree.from([1, 2, 3]).height()).toBe(1)
  expect(Tree.from([1, 2, 3, 4]).height()).toBe(2)
  expect(Tree.from([1, 2, 3, 4, 5]).height()).toBe(2)
  expect(Tree.from([1, 2, 3, 4, 5, 6]).height()).toBe(2)
  expect(Tree.from([1, 2, 3, 4, 5, 6, 7]).height()).toBe(2)
  expect(Tree.from([1, 2, 3, 4, 5, 6, 7, 8]).height()).toBe(3)
  expect(Tree.from([1, 2, 3, 4, null, 5, 6]).height()).toBe(2)
})

test("可以正确计算有空洞树的高度", () => {
  expect(Tree.from([1, 2, null, 3]).height()).toBe(2)
  expect(Tree.from([1, 2, 3, 4, null, 5, 6]).height()).toBe(2)
  expect(Tree.from([1, 2, 3, 4, null, 5, 6, 7]).height()).toBe(3)
  expect(
    Tree.from([
      1,
      2,
      3,
      null,
      4,
      null,
      5,
      null,
      null,
      6,
      7,
      null,
      null,
      8,
    ]).height(),
  ).toBe(3)
})

test("可以显示空树", () => {
  expect(Tree.from([]).toString()).toBe("()")
})

test("可以显示只有一个节点的树", () => {
  expect(Tree.from([1]).toString()).toBe("(1)")
})

test("可以显示有两个节点的树", () => {
  expect(Tree.from([1, 2]).toString()).toBe(
    `
  (1)
  / \
 (2)(3)
  `.trim(),
  )
})

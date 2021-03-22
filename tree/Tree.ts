import * as ra from "ramda-adjunct"
import TreeNode from "./TreeNode"

type Pos = number
// const GAP_WIDTH = 3

export default class Tree<T> {
  constructor(
    private value: TreeNode<T>,
    private left?: Tree<T | undefined>,
    private right?: Tree<T | undefined>,
  ) {}

  static empty = new Tree(TreeNode.of<undefined>())

  static of<T>(value?: T, left?: T, right?: T): Tree<T | undefined> {
    if (ra.isUndefined(value)) return Tree.empty

    const root = TreeNode.of(value)
    const leftChildTree = new Tree(TreeNode.of(left))
    const rightChildTree = new Tree(TreeNode.of(right))
    return new Tree(root, leftChildTree, rightChildTree)
  }

  static from<T>(items: Array<T>): Tree<T | undefined> {
    return this.build(items, 0)
  }

  private static build<T>(items: Array<T>, index: number): Tree<T | undefined> {
    if (index >= items.length) return Tree.empty
    if (ra.lengthLte(0, items)) return Tree.empty
    if (ra.lengthEq(1, items)) return Tree.of(items[0])

    const root = TreeNode.of(items[index])
    const left = Tree.build(items, 2 * index + 1)
    const right = Tree.build(items, 2 * index + 2)

    return new Tree(root, left, right)
  }

  height(): number {
    if (ra.isUndefined(this.value)) return 0
    if (this.left === Tree.empty && this.right === Tree.empty) return 0

    const leftTreeHeight = this.left?.height() || 0
    const rightTreeHeight = this.right?.height() || 0
    return Math.max(leftTreeHeight, rightTreeHeight) + 1
  }

  // 约定：pos 是该节点 横向中心点 的位置
  // (输出的时候，因为自身有宽度，所以还要计算向左的偏移)
  pos(): Pos {
    return ((this.left?.pos() || 0) + (this.right?.pos() || 0)) / 2
  }

  toString() {
    return this.value.toString()
  }
}

const t = Tree.from([1, 2, 3, 4])
console.log(t.height())

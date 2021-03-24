import * as r from "ramda"
import * as ra from "ramda-adjunct"
import TreeNode from "./TreeNode"

const GAP_WIDTH = 3
const RESERVE_WIDTH = 2

export default class Tree<T> {
  private pos_?: number
  private width_?: number
  private height_?: number
  private isLeaf_?: boolean
  private isEmpty_?: boolean

  constructor(
    private value: TreeNode<T | undefined>,
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

    const root = TreeNode.of(items[index])
    const left = Tree.build(items, 2 * index + 1)
    const right = Tree.build(items, 2 * index + 2)
    return new Tree(root, left, right)
  }

  static isEmpty<T>(tree: Tree<T | undefined> | undefined) {
    return ra.isUndefined(tree) || tree.isEmpty()
  }

  height(): number {
    if (ra.isNotUndefined(this.height_)) return this.height_!
    if (this.isLeafOrEmpty()) return (this.height_ = 0)

    const leftTreeHeight = this.left?.height() || 0
    const rightTreeHeight = this.right?.height() || 0
    return (this.height_ = Math.max(leftTreeHeight, rightTreeHeight) + 1)
  }

  width(): number {
    if (ra.isNotUndefined(this.width_)) return this.width_!
    if (this.isLeafOrEmpty()) return (this.width_ = this.value.width())

    return (this.width_ =
      (this.left?.width() || RESERVE_WIDTH) +
      (this.right?.width() || RESERVE_WIDTH) +
      GAP_WIDTH)
  }

  // 约定：pos 是该节点 横向中心点 的位置
  // (输出的时候，因为自身有宽度，所以还要计算向左的偏移)
  pos(): number {
    if (ra.isNotUndefined(this.pos_)) return this.pos_!

    return (this.pos_ = this.width() / 2)
  }

  isLeafOrEmpty() {
    return this.isLeaf() || this.isEmpty()
  }

  isLeaf(): boolean {
    if (ra.isNotUndefined(this.isLeaf_)) return this.isLeaf_!

    const leftChildTreeEmpty = ra.isUndefined(this.left) || this.left?.isEmpty()
    const rightChildTreeEmpty =
      ra.isUndefined(this.right) || this.right?.isEmpty()

    return (this.isLeaf_ =
      r.not(this.value.isEmpty()) && leftChildTreeEmpty && rightChildTreeEmpty)
  }

  isEmpty(): boolean {
    if (ra.isNotUndefined(this.isEmpty_)) return this.isEmpty_!

    return (this.isEmpty_ = this.value.isEmpty())
  }

  toString() {
    if (this.isLeafOrEmpty()) return console.log(this.value.toString())

    const whitespace = " ".repeat(this.pos() - this.value.width() / 2)
    console.log(whitespace, this.value.toString())
  }

  iterator() {
    if (this.isEmpty()) return

    const queue = [] as Array<Tree<T | undefined>>
    queue.push(this)

    const result = []
    while (queue.length) {
      const level = []
      const count = queue.length

      for (let i = 0; i < count; i++) {
        const head = r.head(queue)!
        if (!Tree.isEmpty(head.left)) queue.push(head.left!)
        if (!Tree.isEmpty(head.right)) queue.push(head.right!)
        // level.push(queue.shift()?.value.toString())
        const x = queue.shift()
        const whitespace = " ".repeat(x!?.pos() - x!.value.width() / 2)
        level.push(whitespace + x!.value.toString())
      }

      result.push(level)
    }
    result.forEach(arr => console.log(arr.join("")))
  }
}

const t = Tree.from([1, 2, 3, 4, 5, 6, 7, 8, 9])
// console.log(t.width())
t.iterator()

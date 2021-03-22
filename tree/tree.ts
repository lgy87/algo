import * as r from "ramda"
import * as ra from "ramda-adjunct"
import treeNode, { TreeNode } from "./treeNode"

type Pos = number
// const GAP_WIDTH = 3

type Children<T> = Tree<T> | null

class Tree<T> {
  constructor(
    private value: TreeNode<T>,
    private left?: Children<T>,
    private right?: Children<T>,
  ) {}

  static empty = Tree.from([])

  static from<T>(items: Array<T>): Tree<T> {
    return this.build(items, 0)
  }

  private static build<T>(items: Array<T>, index: number): Tree<T> {
    if (ra.lengthLte(0, items)) return tree(null)
    if (ra.lengthEq(1, items)) return tree<T>(items[0])

    const left = Tree.build<T>(items, 2 * index + 1)
    const right = Tree.build<T>(items, 2 * index + 2)

    return tree(items[index], left, right)
  }

  height(): number {
    if (r.isNil(this.value)) return 0

    return Math.max(this.left?.height(), this.right?.height()) + 1
  }

  // 约定：pos 是该节点 横向中心点 的位置
  // (输出的时候，因为自身有宽度，所以还要计算向左的偏移)
  pos(): Pos {
    return (this.left?.pos() + this.right?.pos()) / 2
  }

  show() {
    if (ra.isNotNil(this.value)) {
      console.log("value: ", this.value)
      console.log("")

      this.left?.show()
      this.right?.show()
    }
  }

  toString() {
    return treeNode(this.value).toString()
  }
}

export default function tree<T>(
  value: T | null,
  left?: Children<T> | null,
  right?: Children<T> | null,
): Tree<T>
export default function tree<T>(items: Array<T>): Tree<T>
export default function tree<T>(
  value: Array<T> | T,
  left: any,
  right: any,
): Tree<T> {
  if (ra.isArray(value)) return Tree.from(value)

  const root = treeNode(value)
  return Tree.from([])
  // return new Tree(root, left, right)
}

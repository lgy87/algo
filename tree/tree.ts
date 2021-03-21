import treeNode from "./TreeNode"

type Tree<T> = {
  value: T
  left: Tree<T> | null
  right: Tree<T> | null
}
type Empty = Tree<undefined>

const empty = {} as Empty
empty.toString = () => "()"

class Tree_<T> {
  constructor(private readonly items: Array<T>) {}

  height() {
    return 0
  }

  toString() {
    return treeNode(this.items[0]).toString()
  }
}

export default function tree<T>(args: Array<T>) {
  if (!args.length) return empty

  return new Tree_(args)
}

tree.empty = empty

class TreeNode_<T> {
  constructor(private readonly item: T) {}

  toString() {
    return `(${this.item})`
  }
}

export default function treeNode<T>(item: T) {
  return new TreeNode_(item)
}

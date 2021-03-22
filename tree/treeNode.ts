import * as r from "ramda"

const LEFT_PARENTHESIS_WIDTH = 1
const RIGHT_PARENTHESIS_WIDTH = 1
const PARENTHESIS_WIDTH = LEFT_PARENTHESIS_WIDTH + RIGHT_PARENTHESIS_WIDTH

export class TreeNode<T> {
  constructor(private readonly value: T) {}

  // static empty = treeNode<null>(null)

  width() {
    const realLength = r.isNil(this.value) ? 0 : String(this.value!).length

    return realLength + PARENTHESIS_WIDTH
  }
  toString() {
    return r.isNil(this.value) ? "()" : `(${this.value})`
  }
}

export default function treeNode<T>(item: T | null) {
  return new TreeNode(item)
}

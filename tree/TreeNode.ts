import * as r from "ramda"
import * as ra from "ramda-adjunct"

const LEFT_PARENTHESIS_WIDTH = 1
const RIGHT_PARENTHESIS_WIDTH = 1
const PARENTHESIS_WIDTH = LEFT_PARENTHESIS_WIDTH + RIGHT_PARENTHESIS_WIDTH

export default class TreeNode<T> {
  constructor(private readonly value?: T) {}

  static empty = new TreeNode()

  static of<T>(value?: T): TreeNode<T> {
    return new TreeNode(value)
  }

  width() {
    const realWidth = ra.isUndefined(this.value) ? 0 : String(this.value).length

    return realWidth + PARENTHESIS_WIDTH
  }

  isEmpty() {
    return ra.isUndefined(this.value) || this === TreeNode.empty
  }

  toString() {
    return r.isNil(this.value) ? "()" : `(${this.value})`
  }
}

/*
 需求: 移动数组中的 0 值到末尾
 */

// 空间 O(1)
// 时间 O(n)

function moveTargetToTheEnd<T>(array: Array<T>, target: T) {
  let count = 0

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== target) {
      array[count++] = array[i]
    }
  }

  // 填充0到数组的末尾
  while (count < array.length) {
    array[count++] = target
  }

  return array
}

export default function move0ToTheEnd(array: Array<number>) {
  return moveTargetToTheEnd(array, 0)
}

// forEach
// 遍历数据，得到数据的每一项

// 1、先定义forEach的方法
// 第一个参数是要遍历的，第二个参数是要遍历的方法
function forEach(arr, fn) {
  // 遍历数据中每一个元素
  for (let i = 0; i < arr.length; i++) {
    // 方法中数据中的每一项
    fn(arr[i])
  }
}

// 声明一个数据
// let arr = [1, 5, 10, 20, 40]
// forEach(arr, function (item) {
//   console.log(item)
// })

// filter
// 遍历数据，筛选符合条件的

function filter(arr, fn) {
  // 先声明一个新的数组
  let newArr = []
  // 遍历数据中的每一项
  for (let i = 0; i < arr.length; i++) {
    // 如果数据条件为真
    if (fn(arr[i])) {
      // 就向数据中添加为真的数据
      newArr.push(arr[i])
    }
  }
  // 最后返回这个数组
  return newArr
}

let arr = [10, 20, 25, 30, 45]
const newArr = filter(arr, function (item) {
  if (item % 10 == 0) {
    return item
  }
})
console.log(newArr)

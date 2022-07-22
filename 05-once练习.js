// 高阶函数-函数作为返回值
function once(fn) {
  let lock = false
  return function () {
    if (!lock) {
      lock = true
      return fn.apply(this, arguments)
    }
  }
}
let pay = once(function (money) {
  console.log(money)
})

pay(5)
pay(5)
pay(5)
pay(5)

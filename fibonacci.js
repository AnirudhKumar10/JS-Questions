function fibonacci(n) {
  if (n < 1) return
  if (n === 0) return 0
  if (n === 1) return 1

  let a = 0,
    b = 1
  for (let i = 2; i <= n; i++) {
    let sum = a + b
    a = b
    b = sum
  }

  return b
}

console.log(fibonacci(5)) // 5
console.log(fibonacci(50)) // 12586269025
console.log(fibonacci(10)) // 55
console.log(fibonacci(1)) // 1
console.log(fibonacci(-1)) // undefined

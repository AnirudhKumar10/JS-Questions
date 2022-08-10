function add(...args){
	let sum1 = args.length!==0 ? args.reduce((a, b)=>a+b) : 0
	return function(...args) {
	    if(args.length===0) return sum1;
	    let sum2 = args.length!==0 ? args.reduce((a, b)=>a+b) : 0
	    return add(sum2 + sum1)
	}
}

console.log(add(1, 4, 2)()) //7
console.log(add(1, 2)(1)(10)()) //14
console.log(add(1)(2)(3)(4)()) // 10
console.log(add(1, 2)(2, 4, 5 ,5 ,6)()) // 25

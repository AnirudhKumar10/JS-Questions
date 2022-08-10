// Case 1
const x1 = {
  a: 1, b: 2, c: "panther"
}
const y1 = {
  a: 1, b: 2, c: "panther"
}

// Case 2
const x2 = {
  a: 1, b: 2, c: "panthers"
}
const y2 = {
  a: 1, b: 2, c: "panther"
}

// Case 3
const x3 = {
  a: 1, b: 2
}
const y3 = {
  a: 1, b: 2, c: "panther"
}

/* deep Equal Function starts below */

function deepEqual(x, y) {
  if (x === y)
    return true
  else if ((typeof x === "object" && x !== null) && (typeof y === "object" && y !== null)) {
    
    if (Object.keys(x).length !== Object.keys(y).length)
      return false
      
    else {
      for (var prop in x) {
        if (!deepEqual(x[prop], y[prop]))
          return false
      }
      
      return true
    }
  } else
    return false
}

console.log(deepEqual(x1, y1)) // true
console.log(deepEqual(x2, y2)) // false
console.log(deepEqual(x3, y3)) // false

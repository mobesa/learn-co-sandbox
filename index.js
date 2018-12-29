function find(array, criteriaFn) {
  
  let current = array
  let next = []
 
  while (current) {
    if (criteriaFn(current)) {
      return current
    }
 
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }
    current = next.shift()
  }

  return null
}

var array = [1, [2, [4, [5, [6]], 3]]];


console.log(find(array, n=>n>5))
console.log(dictionary)
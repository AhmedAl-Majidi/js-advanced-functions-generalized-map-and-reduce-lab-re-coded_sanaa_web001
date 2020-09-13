const sourceArray = [1, 2, 3, -9];


function map(sourceArray, fn) {
  let arr = []

  for (let i = 0; i < sourceArray.length; i++) {
    let theElement = sourceArray[i]
    arr.push(fn(theElement))
  }
return arr;
}

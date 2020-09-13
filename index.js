const sourceArray = [1, 2, 3, -9];

function map(sourceArray,fun) {
  let arr=[];
  for (var i = 0; i < sourceArray.length; i++) {
    let element = sourceArray[i];
    arr.push(fun(element));
  }
  return arr;
}

console.log(sourceArray,function(element) {
      return -1 * element;
  });

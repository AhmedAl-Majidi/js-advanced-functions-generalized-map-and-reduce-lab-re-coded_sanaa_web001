const sourceArray = [1, 2, 3, -9];

function mapToNegativize(arr){
    return arr.map(function(element) {
      return -1 * element;
  });
}

function mapToNoChange(arr){
    return arr.map(function(element) {
      return element;
  });
}

function mapToDouble(arr){
    return arr.map(function(element) {
      return element * 2;
  });
}

function mapToSquare(arr){
    return arr.map(function(element) {
      return Math.pow(element,2);
  });
}

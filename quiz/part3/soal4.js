function tentukanDeretGeometri(arr) {
  // you can only write your code here!
    let i = 1;
    let difference = arr[1] / arr[0];
    while (i < arr.length -1){
        if (arr[i+1] / arr[i] !== difference){
            return false;
        }
        i++
    }
    return true;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
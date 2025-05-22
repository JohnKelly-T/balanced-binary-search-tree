function splitLeft(arr) {
  return arr.slice(0, Math.floor(arr.length / 2));
}

function splitRight(arr) {
  return arr.slice(Math.floor(arr.length / 2));
}

export function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  
  let left = mergeSort(splitLeft(arr));
  let right = mergeSort(splitRight(arr));
  
  let sorted = []; 
  
  let leftPointer = 0;
  let rightPointer = 0; 
  
  while (true) {

    if (leftPointer === left.length) {
      sorted = sorted.concat(right.slice(rightPointer));
      break;
    } else if (rightPointer === right.length) {
      sorted = sorted.concat(left.slice(leftPointer));
      break;
    }
    
    if (left[leftPointer] < right[rightPointer]) {
      sorted.push(left[leftPointer]);
      leftPointer++;
    } else if (right[rightPointer] < left[leftPointer]) {
      sorted.push(right[rightPointer]);
      rightPointer++;
    } else {
      sorted.push(left[leftPointer]);
      leftPointer++;
      rightPointer++;
    }
  }
  
  return sorted;
}

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
  
  while (true) {
    if (left.length === 0) {
      sorted = sorted.concat(right);
      break;
    } else if (right.length === 0) {
      
      sorted = sorted.concat(left);
      break;
    }
    
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  
  return sorted;
}

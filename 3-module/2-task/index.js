function filterRange(arr, a, b) {
  let newArray = arr.filter( (key) => (key >= a && key <= b)  )
  return newArray;
}

function recursiva(num) {
  if(num === 0) {
    return ''
  }

  if(num === 1) {
    return 'chuck'
  } else {
    return 'chuck-' + recursiva(--num)
  }
}
console.log(recursiva(5))
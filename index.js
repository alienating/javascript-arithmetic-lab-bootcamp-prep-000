function add(a, b) {
  return a += b
}

function subtract(a, b) {
  return a -= b
}

function multiply(a, b) {
  return a *= b
}

function divide(a, b) {
  return a /= b
}

function inc(n) {
  return n += 1
}

function dec(n) {
  return n -= 1
}

function makeInt(a) {
  return parseInt('a')
}

function makeInt(n) {
  return parseInt('a', 10)
}

function makeInt(n) {
  return parseInt('nonsense!', 10)
}

function preserveDecimal(n) {
  return parseFloat('2.222')
}

function preserveDecimal(n) {
  return parseFloat('nonsense!')
}
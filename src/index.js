module.exports = function reverse (n) {

  const result=String(n).split('').filter(item=>item!=='-').reverse().join('')

  return Number(result)
}

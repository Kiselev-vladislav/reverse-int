module.exports = function reverse (num) {
    return String(Math.abs(num)).split('').reverse().join('')
}

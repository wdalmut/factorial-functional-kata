const { inc, reduce, multiply, compose, range } = require('ramda');

const list_of_values = compose(range(1), inc)
const mult_and_sum = reduce(multiply, 1)
const factorial = compose(mult_and_sum, list_of_values)

module.exports = factorial

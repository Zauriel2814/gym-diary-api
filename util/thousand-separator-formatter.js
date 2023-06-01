// Import function from external dependency
const { JS_NumberFormat } = require('js-number-formatter')

// An arrow function "format"
const format = (value) => JS_NumberFormat(value);

// Export an object with a function "format"
module.exports = {
    format
}
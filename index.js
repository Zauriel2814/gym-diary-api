// import `format` function using destructure syntax
const {format} = require("./util/thousand-separator-formatter");

// Produce output
console.log(`Format the number 2000 as ${format(2000)}`);
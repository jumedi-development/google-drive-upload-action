const fs = require('fs');

console.log(fs.createReadStream('./.github/test.txt').toString());

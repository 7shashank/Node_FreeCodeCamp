const path = require('path');
console.log(path.sep);

const testFile = path.join('path_test','test1','hehe.txt');
console.log(testFile);

console.log(path.basename(testFile));

const abs = path.resolve(__dirname,'path_test','test1','hehe.txt');
console.log(abs);

console.log(path.normalize(`${testfile}/../`));
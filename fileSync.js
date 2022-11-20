const {readFileSync, writeFileSync} = require('fs');

const file1 = readFileSync('./fs_test/file1.txt','utf8');
const file2 = readFileSync('./fs_test/file2.txt','utf8');

const resFile = writeFileSync('./fs_test/resFileSync.txt',`This is the result file.\n ${file1}${file2}`,{flag: 'a'});
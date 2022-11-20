const {readFile, writeFile} = require('fs');

readFile('./fs_test/file1.txt','utf8', (err,result)=>{
    if (err) {
        console.log(err);
        return;
    }
    const file1 = result;
    readFile('./fs_test/file2.txt','utf8', (err,result)=>{
        if (err) {
            console.log(err);
            return;
        }
        const file2 = result;
        writeFile('./fs_test/resFileAsync.txt',
        `This is the result file.\n ${file1}${file2}`,
        {flag: 'a'},(err,result)=>{
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
        });
    });
});

// const resFile = writeFileSync('./fs_test/resFileSync.txt',`This is the result file.\n ${file1}${file2}`,{flag: 'a'});
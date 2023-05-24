const { log } = require('console');
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'files');

// Create multiple files togather
for (let i=0; i<5; i++){
    fs.writeFileSync(`${dirPath}/hello${i}.txt`, `Sample file ${i+1}`);
}

// To list multiple files togather
fs.readdir(dirPath,(err, all_files)=>{
    // console.log(all_files);        // Prints the array of all files.
    all_files.forEach((item) => {     // Prints each and every files.
        console.log(item);
    });
})
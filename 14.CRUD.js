const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, '14.crud');
const filePath = `${dirPath}/data.txt`;
fs.writeFileSync(filePath, 'This is a sample data file');
fs.readFile(filePath, 'utf8', (err, file)=>{
    console.log(file);
})
fs.appendFile(filePath, ' and the file name is data.txt', (err)=>{
    if(!err){
        console.log("File is updated");
    }
})
// fs.rename(filePath, `${dirPath}/database.txt`, (err)=>{
//     console.log("File name is updated.");
// })
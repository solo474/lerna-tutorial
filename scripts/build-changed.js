const { execSync } = require('child_process');
const { readFileSync } = require('fs');
const path = require('path');

const changesFileObj = readFileSync(path.resolve(__dirname,'..','changed.json'));
const changes = changesFileObj ? JSON.parse(`${changesFileObj.toString()}`) : [];
changes.forEach((change) => {
   execSync(`lerna exec --scope ${change.name} npm pack`,{
     cwd: process.cwd(),
     stdio: ['inherit','inherit','inherit']
 });
   
   
  execSync(`lerna version major --yes`,{
     stdio: ['inherit','inherit','inherit']
 });
   
});

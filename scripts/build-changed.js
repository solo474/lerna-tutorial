const { execSync } = require('child_process');
const { readFileSync } = require('fs');
const path = require('path');

const changesFileObj = readFileSync(path.resolve(__dirname,'..','changed.json'));
const changes = changesFileObj ? JSON.paese(changesFileObj.toString()) : [];
changes.forEach((change) => {
   execSync(`lerna exec --scope ${change.name} npm run pack`,{
     cwd: process.cwd(),
     stdio: ['inherit','inherit','inherit']
 });
});

const { execSync } = require('child_process');
const { readFileSync } = require('fs');

const changes = readFileSync(path.resolve(__dirname,'..','changed.json');

changes.forEach((change) => {
   execSync(`lerna exec --scope ${change.name} npm run pack`,{
     cwd: process.cwd(),
     stdio: ['inherit','inherit','inherit']
 });
});

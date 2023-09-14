//=================================================
//Method 1
//=================================================
// const AuthenticationRoute = require('./authentication/authentication.route')
// const PostsRoute = require('./posts/posts.route')

// module.exports = {
//     AuthenticationRoute,
//     PostsRoute
// }


//=================================================
//Method 2
//=================================================
const fs = require('fs');
const path = require('path');
const router = require('express').Router();


let isRun = true
let pathTillParentFolder = ''

function readFiles(dir) {
  const files = fs.readdirSync(dir); // files = [ 'authentication', 'index.js', 'posts' ]

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) { // check if it is folder or file
      pathTillParentFolder = filePath
      readFiles(filePath); // if we have path till folder 
    } else if (path.extname(file) === '.js' && file !== "index.js") {  // here file = posts.route.js
        const routeModule = require(pathTillParentFolder + "/" + file);
        router.use(routeModule);
    }
  });
}


if(isRun){
  isRun = false
  readFiles(__dirname)
}


module.exports = router;
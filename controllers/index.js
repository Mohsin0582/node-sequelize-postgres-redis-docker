//=================================================
//Method 1
//=================================================
// const AuthenticationController = require("./authentication/signin/signin.controller")
// const PostsController = require("./posts/posts.controller")

// module.exports = {
//   AuthenticationController,
//   PostsController


//=================================================
//Method 2
//=================================================
const fs = require('fs');
const path = require('path');


let isRun = true
let pathTillParentFolder = ''
const exportedRoutes = {}

function readFiles(dir) {
  const files = fs.readdirSync(dir); // files = [ 'authentication', 'index.js', 'posts' ]

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) { // check if it is folder or file
      pathTillParentFolder = filePath
      readFiles(filePath); // if we have path till folder 
    } else if (path.extname(file) === '.js' && file !== "index.js") {  // here file = posts.route.js
      const fileName = file.split('.') 
      const routeModule = require(pathTillParentFolder + "/" + file);
        exportedRoutes[fileName[0]] = routeModule;
    }
  });
}


if(isRun){
  isRun = false
  readFiles(__dirname)
}

console.log("exportedRoutes", exportedRoutes)

module.exports = exportedRoutes;
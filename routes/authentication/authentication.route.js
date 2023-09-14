const bcrypt = require('bcrypt');
const router = require('express').Router();
const db = require('../../database/models');
//=================================================
//Method 1: consult controllers/index.js
//=================================================
// const { AuthenticationController } = require('../../controllers');
// const {
//     signinAuthentication
// } = AuthenticationController; //destructing AuthenticationController functions


//=================================================
//Method 2: consult controllers/index.js
//=================================================
const { signin } = require('../../controllers');

const {
    signinAuthentication
} = signin; //destructing signin functions

// above code can be written in one line
// const { signinAuthentication } = require('../../controllers').AuthenticationController;
// const { signinAuthentication } = require('../../controllers').signin;


router.post('/signin', signinAuthentication(db, bcrypt)) // dependency injection as AthenticationController.signinAuthentication function handle depends on bcrypt

module.exports = router;
'use strict'
const fs = require('fs');
const {readFile, writeFile, hash} = require('./utility');


/**
 * main function
 */
function passwordMaker() {

}

/**
 * sub function
 * @param passwordFileName
 * @param passwordEncFileName
 */
function makepassword(passwordFileName, passwordEncFileName) {
   // ???
}

if (require.main === module) {
    passwordMaker();
}

module.exports = { makepassword };
'use strict'
const fs = require('fs');
const util = require('./utility')

/**
 * Main function, calls sub to process
 */
function passwordjs() {
    if (process.argv.length != 5) return 'false';

    var filename = process.argv[2]
    var email = process.argv[3]
    var password = process.argv[4]

    // ???
}

/**
 * Verifies that an enail or password exists in a hashed file
 * @param fileName file containing email and hashed passwords
 * @param email email of user
 * @param password unhashed input password
 */
function verifyUser(fileName, email, password) {

}

if (require.main === module) {
    console.log(passwordjs()) // print out true or false
}

module.exports = {verifyUser};
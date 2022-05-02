'use strict'
const fs = require('fs');
const util = require('./utility')

/**
 * Main function, calls verifyUser() to process
 */
function passwordjs() {
    if (process.argv.length != 5) return 'false';

    let filename = process.argv[2];
    let email = process.argv[3];
    let password = process.argv[4];

    return verifyUser(filename, email, password).toString();
}

/**
 * Verifies that an enail or password exists in a hashed file
 * @param fileName {string} file containing email and hashed passwords
 * @param email {string} email of user
 * @param password {string} unhashed input password
 * @return {boolean}
 */
function verifyUser(fileName, email, password) {
    // blank email
    if (email == "") {
        return false
    }
    // blank password
    else if (password == "") {
        return false
    }
    // simple regex
    else if (!(/^[A-Za-z0-9+_.-]+@(.+)$/.test(email))) {
        return false
    } else {
        let hashedPassword = util.hash(password);

        try {
            let fileData = util.readFile(fileName);

            let entry = fileData.filter(val => {
                return val.includes(email);
            });

            if (entry.length < 1) {
                return false;
            }

            let parts = entry[0].split(":");
            return parts[1] == hashedPassword;
        } catch (err) {
            return false;
        }

    }
}

if (require.main === module) {
    console.log(passwordjs()) // print out true or false
}

module.exports = {verifyUser};
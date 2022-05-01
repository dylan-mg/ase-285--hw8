'use strict'
const fs = require('fs');
const {readFile, writeFile, hash} = require('./utility');


/**
 * main function called as application
 * Calls makepassword
 */
function passwordMaker() {
    if (process.argv.length != 4) return 'Invalid Entries';

    let passwordFileName = process.argv[2];
    let passwordEncFileName = process.argv[3];

    console.log(makepassword(passwordFileName, passwordEncFileName));
}

/**
 * sub function
 * @param passwordFileName
 * @param passwordEncFileName
 */
function makepassword(passwordFileName, passwordEncFileName) {
    // determine if fileNames are valid
    if (fileChecker(passwordFileName) && fileChecker(passwordEncFileName)) {
        // find file if it exists, receive array of strings if so
        try {
            let entries = readFile(passwordFileName);
            let hashedEntries = entries.map(processor);
            writeFile(hashedEntries, passwordEncFileName);
            return `${passwordEncFileName} successfully populated`;
        } catch (err) {
            return "Error";
        }
    } else return "Invalid file names";
}

/**
 * Converts the latter half of an input string into a hashed string
 * @param entry {string} original entry
 * @returns {string} new entry with hashed password
 */
function processor(entry) {
    // [email, password]
    let entryParts = entry.split(":");
    if (entryParts.length != 2) {
        console.log(`File is incorrectly formatted at entry for: ${entryParts[0]}`);
        throw "File is incorrectly formatted";
    } else {
        entryParts[1] = hash(entryParts[1]);
        return entryParts.join(":");
    }
}

/**
 * Verifies that the fileName has the .txt extension
 * @param fileName {string}
 */
function fileChecker(fileName) {
    return fileName.endsWith(".txt");
}

if (require.main === module) {
    passwordMaker();
}

module.exports = { makepassword, processor };
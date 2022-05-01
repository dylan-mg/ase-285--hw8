'use strict'

const fs = require('fs');
const {createHash} = require('crypto')

/**
 * Reads requested file, splits and returns it as an array of strings
 * @param fileName {string} Path and name of file, relative to caller
 * @returns {string[]} Content of file
 * @throws If requested file is not found
 */
function readFile(fileName) {
    if (!fs.existsSync(fileName)) {
        throw `${fileName} does not exist!`
    }
    try {
        var text = fs.readFileSync(fileName).toString('utf-8');
        var textByLine = text.split("\n");
        return textByLine;
    } catch (err) {
        console.log(err)
    }
}

/**
 * Writes an array of strings to a file
 * @param ar {string[]} An array of strings
 * @param fileName {string} The name of the newly written file, includes extension
 */
function writeFile(ar, fileName) {
    try {
        var res = ar.join("\n")
        fs.writeFileSync(fileName, res)
    } catch (err) {
        console.log(err)
    }
}

/**
 * Hashes a string and returns it
 * @param input {string} string you want to hash
 * @returns {string} the hashed input
 */
function hash(input) {
    return createHash('sha256').update(input).digest('hex'); // never use md5
}

module.exports = {readFile, writeFile, hash};
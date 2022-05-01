'use strict'

const fs = require('fs');
const {createHash} = require('crypto')

/**
 * Reads a file, splits it into an array by line, returns the array
 * @param fileName {string} string representing file name
 * @returns {string[]} array of entries as strings
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
 * Joins the array by newline character, writes it to the file
 * @param ar {string[]} Array of strings to be added to the file
 * @param fileName {string} Destination file where information is to be written
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
 * Hashes and returns the input string
 * @param input {string} Any string
 * @returns {string} Hashed version of input
 */
function hash(input) {
    return createHash('sha256').update(input).digest('hex'); // never use md5
}

module.exports = {readFile, writeFile, hash};
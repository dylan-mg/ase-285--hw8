# `utility.js`
- `readFile` function
  - Takes `fileName` as input
  - Checks if file exists, if not, throws exception, catch it
  - if file exists, reads the file, converts to string, splits it
    into an array of strings representing each line, which is what is returned
      ```
      sm.cho@hello.com:123456
      john.deacon@good.com:bestpassword
      alan.may@best.com:mypassword
      henry.taylor@edu.com:educatorbest
      ```
  - becomes, and is returned as:
      ```js
      [
          "sm.cho@hello.com:123456",
          "john.deacon@good.com:bestpassword",
          "alan.may@best.com:mypassword",
          "henry.taylor@edu.com:educatorbest"        
      ]
      ```
- `writeFile` function
  - Takes an array of strings and filename
    - filename must include extension
  - writes said array of string to filename
- `hash` function
  - Takes a string, hashes it and returns it
---
# `makepassword`
## Overview
Creates the encrypted `password.enc.txt` out of `password.txt`
- Is both Application and module
## Input
- in Javascript, takes string representing a relative filepath/filename
- from command line, takes a single argument representing a relative path nane
## Output
- `password.enc.txt`'s relative address is either returned or output to CLI
## Imported modules
- `fs` module
- `crypto` module
- `utility.js`
## Data Flow
- takes `passwordFileName` and `passwordEncFileName` as input
  - former is the file being read, latter is file that will hold encrypted info
  - both should include extension and relative path
- find the file if it exists, return contents as array of strings
- Go through each entry and hash the password
- have `utility.js` write the hashed password to an encrypted file
  - should follow format of `password.enc.txt` format, but can be any file 
## Behaviors
- `fileChecker(fileName)`
  - verifies that the `Name` contains the txt extension
  - `boolean` return
- `processor(string)`
  - splits input string into email and password
  - hashes password
  - concatenates email and password into the format of the input string
  - returns hashed string
## Testing (`makepassword.test.js`)
- `makePassword`
  - Tests that filename returned is valid
  - checks if file exists
  - check if contents are correct
    - read original file, hash it with `utility.js`, compare output
- `fileChecker()`
  - input multiple strings with periods, txt, .txt in the wrong place 
  and a properly formatted filepath
- `processor()`
  - input multiple different strings, compare with correctly hashed versions
  - input incorrectly formatted strings (multiple :'s, no :, etc)
---
# `passwordjs`
## Overview
Checks if an input username/password exists in a file
- Is both Application and module
## Input
- as a module, takes `fileName`,`email`,`password`, all strings
- as an application, takes input via command line
  - format of commands:
    ```shell
      node passwordjs.js encryptedFileName userName Password
    ```
  - `encryptedFileName` is the file containing all userNames/passwords
  - `userName` and `password` are plain text representing the info being tested
## Output
- main function returns strings representing true or false
- sub function returns literal values true and false
## Imported Modules
- `fs` module
- `utility.js`
## Data Flow
- gets three arguments from cli or input: file name, email, and password
- tries calling `utility.readFile`, catches errors. print errors, return false
- if true, loops through each entry, searching for matching email
  - if not found, return false
- if email is found, hash the input password, compare it against the stored password
- if match, return true, else false
- in main, convert the boolean value into a string, return the string
## Behaviors
- only main `passwordjs()` and sub `verifyUser(fileName, email, password)` function
- sub may be unit tested time permitting, though it should be handled by acceptance test
## Testing
- of main is handled by `acceptance.bat`
  - runs each 
- of any others is handled by `passwordjs.test.js`
# Given Files
## `password.txt`
- contains users' email and password
  - example format:
    ```
    sm.cho@hello.com:123456
    john.deacon@good.com:bestpassword
    alan.may@best.com:mypassword
    henry.taylor@edu.com:educatorbest
    ```

## `acceptance.bat`
- Acceptance test for program
- use `acceptance.bat` to check if your program works, use this file to check
  ```shell
  > acceptance
  ```
  - using just `acceptance` works for windows
  - for mac/unix:
  ```shell
  > sh acceptance.bat
  ```
# tasks  
- Hash `password.txt` -> `password.enc.txt`
  - email:hash format
    ```
    sm.cho@hello.com:8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92
    john.deacon@good.com:c495634064a4baa0c6f7a5aed1f9f47488b421a4eca666a0b112baa720cee7f5
    alan.may@best.com:89e01536ac207279409d4de1e5253e01f4a1769e696db0d6062ca9b8f56767c8
    henry.taylor@edu.com:14f4cbccaee1fa7fe31820e2d57f1389823350a6fe23054b2a3d7dde4fa8531b
    ```
- return t/f when users give emails/passwords
  - if email is blank, return false 
  - if email is in folder
    - if password is empty, return false
    - if password matches, return true
    - else false
  - else false

# Your Mission, should you choose to accept it
## Make Files
### `makepassword.js`
- creates` password.enc.txt` out of `password.txt `
### `passwordjs.js`
- gets two args: `name` and `password`
  - if I were to guess, this represents email and password
- the verifier application
## Unit Test your files
- Develop them in sync, PLEASE dude 
### makepassword.test.js
- make sure password.enc.js doesn't exist before running
- make sure password.enc.js DOES exist afterwards
- make sure the contents are correct
- any subfunctions
### passwordjs.test.js
  - test any functions you make that are used as part of passwordjs.js, 
but the main function is handled by the `acceptance.bat` test
  
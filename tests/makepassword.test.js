const p = require('../src/makepassword');
const u = require('../src/utility');
const fs = require('fs');

// TEST processor
test("Checking processor(): if email:password is converted into email:hashedPassword", () => {
    const input = "email:password";
    const output = `email:${u.hash("password")}`;

    expect(p.processor(input)).toBe(output);
});

// TEST makepassword
describe("makepassword should create file", () => {
    const fileName = './tests/passwordtest.txt';
    const encFileName = './tests/passwordtest.enc.txt';

    test('', () => {
        // 1. Make sure password.enc.txt does not exist before running the function.
        if (fs.existsSync(encFileName)) {
            fs.unlinkSync(encFileName);
        } else if (!fs.existsSync(fileName)) {
            fail(`${fileName} does not exist`);
        }

        expect(p.makepassword(fileName, encFileName)).toBe(`${encFileName} successfully populated`);

        // 2. Make sure password.enc.txt does exist after running the function.
        if (fs.existsSync(encFileName)) {
            // 3. Make sure the contents of password.enc.txt has correct contents.
            const input = u.readFile(encFileName);

            let fileData = u.readFile(fileName);
            const output = fileData.map((fileDatum) => {
                let entries = fileDatum.split(":");
                entries[1] = u.hash(entries[1]);
                return entries.join(":");
            });

            expect(input).toStrictEqual(output);
        } else {
            fail();
        }
    });
});
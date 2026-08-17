// auto generate passwords for users in a web application. The script can create strong, random passwords that meet security requirements, such as including uppercase letters, lowercase letters, numbers, and special characters. It can also allow users to specify the desired length of the password. The generated password can be displayed to the user or automatically filled into a password field on a form.
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {    return ''
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    let allowedChars = '';
    let password = '';
    allowedChars += includeLowercase ? lowercaseChars : '';
    allowedChars += includeUppercase ? uppercaseChars : '';
    allowedChars += includeNumbers ? numberChars : '';
    allowedChars += includeSymbols ? symbolChars : '';
    console.log(`Allowed Characters: ${allowedChars}`);
    if(length <= 0) {
        return 'password length must be greater than 1';
    }
    if(allowedChars.length === 0) {
        return 'no characters selected for password generation';
    }
    for(let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    console.log(`Generated Password: ${password}`);
    return password;
}
const passwordLength = 12; // Default length
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(
    passwordLength, 
    includeLowercase, 
    includeUppercase, 
    includeNumbers, 
    includeSymbols);

    console.log(`Generated Password: ${password}`);
//Boiler plate for input
const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


// Welcome the user to the password validator tool
console.log("Welcome to Overlocked the password validation tool")

// Prompt the user for a password to validate
reader.question("Please create a password ", function(answer) {
    console.log(`Your entered: ${answer}`); //Production program will not return password :)
    if (answer.length < 10) { //Checks password length
        console.log(`Nope, that's only ${answer.length} characters long. Your password needs at least 10 characters`); //Failed validation
    // } else if (answer.match('[!@#$%^&*]') =  null) { // Special character check (couldn't get it to work in time.)
        // console.log('Nope, you need a special character')
    } else {
        console.log('Yup, password created successfully') //Passed validation
    }
    reader.close();
});

//Testing my check for password match.

// let password = 'burger';
// let specialCharacterCheck = password.match('[!@#$%^&*]');
// if (specialCharacterCheck = null) {
//     console.log('yup');
// } else {
//     console.log('nope');
// };
// console.log(specialCharacterCheck);






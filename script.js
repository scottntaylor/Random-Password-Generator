var specialcharacters;
var uppercaseletters;
var lowercaseletters;
var numbers;
var passwordlength;


// The user will be prompted to choose from the following password criteria:
function choosePwdCriteria() {
    var passwordlength = prompt("How many characters would you like in your passowrd?");
    console.log(passwordlength > 7);

    // * Length (must be between 8 and 128 characters)
    if (passwordlength < 8 || passwordlength > 128) {
        alert("Password must be 8-128 characters!");
        passwordlength = choosePwdCriteria();
    }

    return passwordlength;
}


// * Character type:
function chooseCharacterTypes() {
    //   * Special characters ([see examples](https://www.owasp.org/index.php/Password_special_characters))
    specialcharacters = confirm("Would you like to have special characters in your password?");
    console.log("Special Characters are: " + specialcharacters);

    //   * Numeric characters
    numbers = confirm("Would you like to have numbers in your password?");
    console.log("Numbers are: " + numbers);

    //   * Lowercase characters
    lowercaseletters = confirm("Would you like to have lowercase letters in your password?");
    console.log("Lowercase letters are: " + lowercaseletters);

    //   * Uppercase characters
    uppercaseletters = confirm("Would you like to have uppercase letters in your password?");
    console.log("Uppercase letters are: " + uppercaseletters);

    // The application should validate user input and ensure that at least one character type is selected.
    if ((!uppercaseletters && !lowercaseletters && !numbers && !specialcharacters)) {
        return chooseCharacterTypes();
    }
}


// Once all prompts are answered, the user will be presented with a password matching the answered prompts. Displaying the generated password in an alert is acceptable, but attempt to write the password to the page instead.
function generatePassword() {
    alert("generating password");

    var characters = []; // ["uppercaseletters", "lowercaseletters", "specialcharacters", "numbers"]
    var Uppercaseletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var Lowercaseletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "e", "s", "t", "u", "v", "w", "x", "y", "z"];
    var Specialcharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "{", "]", "}", ";", ":", ",", "<", ".", ">", "/", "?"];
    var Numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    // 1. Combine arrays based on which values are true

    if (uppercaseletters === true) {
        characters = characters.concat(Uppercaseletters);

    }
    if (specialcharacters === true) {
        characters = characters.concat(Specialcharacters);
    }
    if (numbers === true) {
        characters = characters.concat(Numbers);
    }

    if (lowercaseletters === true) {
        characters = characters.concat(Lowercaseletters);
    }

    console.log(characters);

    // 2. Randomly select from new array.




    var randomstring = '';
    for (var i = 0; i < passwordlength; i++) {
        var rnum = Math.floor(Math.random() * characters.length);
        randomstring += characters[rnum];
    }
    insertPassword(randomstring);
    console.log(randomstring);

    //   while (randomstring.length < passwordlength ) {
    //     var rnum = Math.floor(Math.random() * uppercaseletters.length);
    //     randomstring += uppercaseletters.substring(rnum, rnum + 1);

    //   if (specialcharacters === true) {
    //       var rnum = Math.floor(Math.random() * specialcharacters.length);
    //       randomstring += specialcharacters[rnum];
    //     }
    //     if (numbers === true) {
    //         var rnum = Math.floor(Math.random() * numbers.length);
    //         randomstring += numbers[rnum];
    //       }
    //       if (lowercaseletters === true) {
    //     var rnum = Math.floor(Math.random() * lowercaseletters.length);
    //     randomstring += lowercaseletters[rnum];
    //   }
    //   if (uppercaseletters === true) {
    //       var rnum = Math.floor(Math.random() * uppercaseletters.length);
    //       randomstring += uppercaseletters[rnum];
    //     }
    //   } 
}

// As a bonus, the user should also have the option to click a button to copy the password to their clipboard.

// generator();

function generator() {



    passwordlength = choosePwdCriteria();
    chooseCharacterTypes();
    generatePassword();

}
//Click on Generate Button to create password

// document.getElementById("password").addEventListener("click", generatePassword);


// // Add Password to HTML
function insertPassword(randomstring) {

    var insertPassword = document.querySelector("#password");
    insertPassword.value = randomstring;

}
    // doucment.getElementByID("password").value =




          // else {

          //   return generator();
          // }


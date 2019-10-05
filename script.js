
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
      var specialcharacters = confirm("Would you like to have special characters in your password?");
        console.log("Special Characters are: " + specialcharacters);

      //   * Numeric characters
      var numbers = confirm("Would you like to have numbers in your password?");
          console.log("Numbers are: " + numbers);

      //   * Lowercase characters
      var lowercaseletters = confirm("Would you like to have lowercase letters in your password?");
      console.log("Lowercase letters are: " + lowercaseletters);

      //   * Uppercase characters
      var uppercaseletters = confirm("Would you like to have uppercase letters in your password?");
        console.log("Uppercase letters are: " + uppercaseletters);

      // The application should validate user input and ensure that at least one character type is selected.
      if ( (! uppercaseletters && ! lowercaseletters && ! numbers && ! specialcharacters) ) {
        return chooseCharacterTypes();
      } else {
        // TODO: return values
        return {
          "specialcharacters": specialcharacters,
          "numbers": numbers,
          "lowercaseletters": lowercaseletters,
          "uppercaseletters": uppercaseletters
        }
      }
    }


    // Once all prompts are answered, the user will be presented with a password matching the answered prompts. Displaying the generated password in an alert is acceptable, but attempt to write the password to the page instead.
    function generatePassword(passwordLength, characterTypes) {
      alert("generating password");

      chooseCharacterTypes(randomstring);
      
      while (randomstring.length < passwordLength) {
        var pick = null;
      
      if (specialcharacters === true) {
          var rnum = Math.floor(Math.random() * specialcharacters.length);
          randomstring += specialcharacters[rnum];
        }
        if (numbers === true) {
            var rnum = Math.floor(Math.random() * numbers.length);
            randomstring += numbers[rnum];
          }
          if (lowercaseletters === true) {
        var rnum = Math.floor(Math.random() * lowercaseletters.length);
        randomstring += lowercaseletters[rnum];
      }
      if (uppercaseletters === true) {
          var rnum = Math.floor(Math.random() * uppercaseletters.length);
          randomstring += uppercaseletters[rnum];
        }
      } 
    }

    // As a bonus, the user should also have the option to click a button to copy the password to their clipboard.

    generator();

    function generator() {

      var characterTypes = ["uppercaseletters", "lowercaseletters", "specialcharacters", "numbers"]
      var uppercaseletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      var lowercaseletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "e", "s", "t", "u", "v", "w", "x", "y", "z"];
      var specialcharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "{", "]", "}", ";", ":", ",", "<", ".", ">", "/", "?"];
      var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

      var passwordLength = choosePwdCriteria();
      var characterTypes = chooseCharacterTypes();
      generatePassword(passwordLength, characterTypes, randomstring);

      var randomstring = '';
      for (var i = 0; i < passwordlength; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum, rnum + 1);
      }
      console.log(randomstring);
//Click on Generate Button to create password




    // // Add Password to HTML
    function insertPassword(){

    var insertPassword = document.querySelector("#password");
     insertPassword.textContent = randomstring;

    }
    // doucment.getElementByID("password").value = 

        


          // else {

          //   return generator();
          // }

    }
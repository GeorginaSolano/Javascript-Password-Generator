// Assignment Code
var generateBtn = document.querySelector("#generate");
//function starts process for generating the password
function generatePassword() {
  var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charLower = "abcdefghijklmnopqrstuvwxyz";
  var charNumeric = "0123456789";
  var charSpecial = "!@#$%^&*()?{}[]";
  var passwordChars = "";
  var response = true;
  var password=" ";
  var passwordLength;
  askLength();
  function askLength() { //request user to enter the required length of the password 
    passwordLength= window.prompt("Please enter the length of your password. Enter a number between 8 and 128.");
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Please enter a new value. Ensure the value is between 8 and 128.");
      askLength();
    }
  }
 //prompt user to select the character types using boolean variable response to hold false if user does chooses to not include a character set
  response = window.confirm("Would you like to include Uppercase characters?");
  if (response === false) {
     window.alert("You have chosen not to include Uppercase characters.");
    
  } else {  // passwordChars holds the user chosen set of characters to be included
    passwordChars += charUpper; // concatonates the charater set chosen by the user creating the 
  }
  response = window.confirm("Would you like to include Lowercase characters?");
  if (response === false) {
    window.alert("You have chosen not to include Lowercase characters.");

  } else {
    passwordChars += charLower;
  }

  response = window.confirm("Would you like to include Numeric characters?");
  if (response === false) {
    window.alert("You have chosen not to include numeric characters.");
  } else {
    passwordChars += charNumeric;
  }

  response = window.confirm("Would you like to include special characters?");
  if (response === false) {
    window.alert("You have chosen not to include numeric characters.");
  } else {
    passwordChars += charSpecial;
  } 
 // checks that the user has selected characters sets to use for generating the password
  if (passwordChars === "") {
    window.alert("You have not select any characters to be included in your password. Please try again.");
    generatePassword();
  }

for (i=0; i < passwordLength; i++) {
  password += passwordChars[Math.floor(Math.random()*passwordChars.length)];
}
 return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

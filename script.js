// Assignment Code
var generateBtn = document.querySelector("#generate");
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
  function askLength() {
    passwordLength= window.prompt("Please enter the length of your password. Enter a number between 8 and 128.");
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Please enter a new value. Ensure the value is between 8 and 128.");
      askLength();
    }
  }

  response = window.confirm("Would you like to include Uppercase characters?");
  if (response === false) {
     window.alert("You have chosen not to include Uppercase characters.");
    
  } else {
    passwordChars += charUpper;
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

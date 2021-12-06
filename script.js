// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  console.log("You clicked the button");
  var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charLower = "abcdefghijklmnopqrstuvwxyz";
  var charNumeric = "0123456789";
  var charSpecial = "!@#$%^&*()?{}[]";
  var passwordChars = " ";
  var response = true;
  var password = " ";
  var passwordLength;
  askLength();
  function askLength() {
    passwordLength= window.prompt("Please enter the length of the password.");
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Please enter a new value.");
      askLength();
    }
  }
  

  response = window.confirm("would you like to include Uppercase characters?");
  if (response === false) {
     window.alert("Uppercase characters are not require.");
    
  } else {
    passwordChars += charUpper;
  }
  response = window.confirm("Would you like to include Lowercase characters?");
  if (response === false) {
    window.alert("Lowercase characters are not require.");

  } else {
    passwordChars += charLower;
  }
  response = window.confirm("Would you like to include Numeric characters?");
  if (response === false) {
    window.alert("Numeric characters are not require.");
  } else {
    passwordChars += charNumeric;
  }
  response = window.confirm("Would you like to include special characters?");
  if (response === false) {
    window.alert("Special characters are not require.");
  } else {
    passwordChars += charSpecial;
  } 
 
  console.log(passwordChars);
  if (passwordChars === " ") {
    window.alert("You must select characters to be included.Please try again");
    generatePassword();
  }

for (i=0; i < passwordLength; i++) {
  password += passwordChars[Math.floor(Math.random()*passwordChars.length)];
}
 console.log(password); 
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

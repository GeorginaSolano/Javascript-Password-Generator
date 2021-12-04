// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  console.log("You clicked the button");
  var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charLower = "abcdefghijklmnopqrstuvwxyz";
  var charNumeric = "0123456789";
  var charSpecial = "!@#$%^&*()?";
  var criteriaSet = " ";
  var response = true;
  response = window.confirm("would you like to include Uppercase characters?");
  if (response === false) {
     window.alert("Uppercase characters are not require.");
    
  } else {
    criteriaSet += charUpper;
  }
  response = window.confirm("Would you like to include Lowercase characters?");
  if (response === false) {
    window.alert("Lowercase characters are not require.");

  } else {
    criteriaSet += charLower;
  }
  response = window.confirm("Would you like to include Numeric characters?");
  if (response === false) {
    window.alert("Numeric characters are not require.");
  } else {
    criteriaSet += charNumeric;
  }
  response = window.confirm("Would you like to include special characters?");
  if (response === false) {
    window.alert("Special characters are not require.");
  } else {
    criteriaSet += charSpecial;
  }

  console.log(criteriaSet);

  // length = window.prompt("Please enter the length of the password.");
  // if (length < 8 || length > 128) {
  //   window.alert("Please enter a new value.");
  // }
     
     
  
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

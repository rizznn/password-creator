// Assignment code here
var array = [];
var newPassword = "";

function randomUpper() {
  const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return upperLetters;
  // [Math.floor(Math.random()*upperLetters.length)];
}
function randomLower() {
  const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
  return lowerLetters;
  // [Math.floor(Math.random()*lowerLetters.length)];
}

function randomNumbers() {
  const randNumbers = '0123456789';
  return randNumbers;
  // [Math.floor(Math.random()*randNumbers.length)];
}

function randomChar() {
  const special = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  return special;
  // [Math.floor(Math.random()*special.length)];
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var promptLength = parseInt(prompt("Please input a number from 8-128 for the password length"));
    
  var promptLowercase = confirm("Do you want to include lowercase characters?");
  if (promptLowercase === true )  {
    // var options = getPasswordOptions();
    array.push(randomLower())
  }

  var promptUppercase = confirm("Do you want to include uppercase characters?");
  if (promptUppercase === true ) {
    // var options = getPasswordOptions();
    array.push(randomUpper())
  }

  var promptNumbers = confirm("Do you want to include numbers?");
  if (promptNumbers === true ) {
      // var options = getPasswordOptions();
      array.push(randomNumbers())
  }

  var promptSpecialChar = confirm("Do you want to include special characters?");
  if (promptSpecialChar === true ) {
      // var options = getPasswordOptions();
      array.push(randomChar())
  }

  console.log(array.toString());

  var userOptions = array.toString();

  for(let i = 0; i < promptLength; i += 1) {
    newPassword += userOptions[Math.floor(Math.random() * userOptions.length)]
  }
  console.log(newPassword);

  const passwordOptions = {
    promptLength: promptLength,
    upperLetters: randomUpper,
    lowerLetters: randomLower,
    randNumbers: randomNumbers,
    special: randomChar
  }
  // return passwordOptions;
  console.log(passwordOptions,"passwordOptions");

  return newPassword;
}
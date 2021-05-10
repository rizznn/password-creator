// Assignment code here
// var randomLength = function () {
//     length = Math.random();

//     length = parseInt(length * 100);
//     length = (length % 7) + 6
// }

const passwordOptions = {
  upperLetters: randomUpper,
  lowerLetters: randomLower,
  numberChar: randomNumbers,
  specialChar: randomChar
}

function randomUpper() {
  const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return upperLetters[Math.floor(Math.random()*upperLetters.length)];
}
function randomLower() {
  const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
  return lowerLetters[Math.floor(Math.random()*lowerLetters.length)];
}

function randomNumbers() {
  const randNumbers = '0123456789';
  return randNumbers[Math.floor(Math.random()*randNumbers.length)];
}

function randomChar() {
  const special = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  return special[Math.floor(Math.random()*special.length)];
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


function options () {
  var promptLength = parseInt(confirm("Please input a number from 8-128 for the password length"));

  var promptLowercase = prompt("Do you want to include lowercase characters? y/n");
  if (answer === 'y' || answer === 'Y') {
    passwordOptions;
  } else {
    
  }

  var promptUppercase = confirm("Do you want to include uppercase characters? y/n");
  
  var promptNumbers = confirm("Do you want to include numbers? y/n");
  
  var promptSpecialChar = confirm("Do you want to include special characters? y/n");
};
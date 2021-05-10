// Assignment code here
// var randomLength = function () {
//     length = Math.random();

//     length = parseInt(length * 100);
//     length = (length % 7) + 6
// }

function randomLetters() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  return letters[Math.floor(Math.random()*letters.length)];
}

function randomNumbers() {
  const numbers = "0123456789";
  return numbers[Math.floor(Math.random()*numbers.length)];
}

function randomChar() {
  const specialChar = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  return specialChar[Math.floor(Math.random()*specialChar.length)];
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

function writePassword() {
  var promptLength = window.prompt("Please input a number from 8-128 for the password length")

  var lengthOfP = +promptLength.value;
  console.log(lengthOfP);
  
  var promptLowercase = window.prompt("Do you want to include lowercase characters? y/n");
  
  var promptUppercase = window.prompt("Do you want to include uppercase characters? y/n");
  
  var promptNumbers = window.prompt("Do you want to include numbers? y/n");
  
  var promptSpecialChar = window.prompt("Do you want to include special characters? y/n");
}
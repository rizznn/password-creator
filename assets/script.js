// Assignment code here

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

function generatePassword() {
  var promptLength = parseInt(prompt("Please input a number from 8-128 for the password length"));
    
  var promptLowercase = confirm("Do you want to include lowercase characters?");
  if (promptLowercase === 'true')  {
    const passwordOptions;
  }

  var promptUppercase = confirm("Do you want to include uppercase characters?");
  if (promptUppercase === 'true' ) {

  }

  var promptNumbers = confirm("Do you want to include numbers?");

  var promptSpecialChar = confirm("Do you want to include special characters?");
    
  const passwordOptions = {
    promptLength: promptLength,
    upperLetters: randomUpper,
    lowerLetters: randomLower,
    randNumbers: randomNumbers,
    special: randomChar
  }
  console.log(passwordOptions,"passwordOptions");

}
// alert(writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSymbol;
var userChoices;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {

  passwordLength = prompt("Choose how long your password will be. Between 8 and 128");
  console.log("Password length " + passwordLength);
  
  if(!passwordLength) {
    alert("Required value");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Choose between 8 and 128 characters.");
    console.log("Password length " + passwordLength);
  
  } else { 
    confirmLower = confirm("Should your password contain lower case letters? Click OK for yes, Cancel for no");
    console.log("Lower case " + confirmLower);
    confirmUpper = confirm("Should your password contain upper case letters? Click OK for yes, Cancel for no");
    console.log("Upper case " + confirmUpper);
    confirmNumber = confirm("Should your password contain numbers? Click OK for yes, Cancel for no");
    console.log("Number " + confirmNumber);
    confirmSymbol = confirm("Should your password contain symbols? Click OK for yes, Cancel for no");
    console.log("Symbols " + confirmSymbol);

  };

 
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSymbol) {
    userChoices = alert("You must choose a criteria");
 
  } else if (confirmLower && confirmUpper && confirmNumber && confirmSymbol) {
    userChoices = lowerCase.concat(upperCase, numbers, symbols);
    console.log(userChoices);
  }
  
  else if (confirmLower && confirmUpper && confirmNumber) {
    userChoices = lowerCase.concat(upperCase, numbers);
    console.log(userChoices);
  }
  else if (confirmLower && confirmUpper && confirmSymbol) {
    userChoices = lowerCase.concat(upperCase, symbols);
    console.log(userChoices);
  }
  else if (confirmLower && confirmNumber && confirmSymbol) {
    userChoices = lowerCase.concat(numbers, symbols);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmNumber && confirmSymbol) {
    userChoices = upperCase.concat(numbers, symbols);
    console.log(userChoices);
  }

  else if (confirmLower && confirmUpper) {
    userChoices = lowerCase.concat(upperCase);
    console.log(userChoices);
  }
  else if (confirmLower && confirmNumber) {
    userChoices = lowerCase.concat(numbers);
    console.log(userChoices);
  }
  else if (confirmLower && confirmSymbol) {
    userChoices = lowerCase.concat(symbols);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmNumber) {
    userChoices = upperCase.concat(numbers);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmSymbol) {
    userChoices = upperCase.concat(symbols);
    console.log(userChoices);
  }
  else if (confirmNumber && confirmSymbol) {
    userChoices = numbers.concat(symbols);
    console.log(userChoices);
  }

  else if (confirmLower) {
    userChoices = lowerCase;
    console.log(userChoices);
  }
  else if (confirmUpper) {
    userChoices = blankUpper.concat(upperCase);
    console.log(userChoices);
  }
  else if (confirmNumber) {
    userChoices = numbers;
    console.log(userChoices);
  }
  else if (confirmSymbol) {
    userChoices = symbols;
    console.log(userChoices);
  };


  var passwordBlank = [];
  
 
  for (var i = 0; i < passwordLength; i++) {
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }


  var password = passwordBlank.join("");
  console.log("Your Password is: " + password);
  return password;
  
}
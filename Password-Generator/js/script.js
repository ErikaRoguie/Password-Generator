// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// Add event listener to generate button
function generatePassword() {
  var password = "";
  var passwordLength = 0;

  // //ask password length
  passwordLength = window.prompt("How long do you want your password?");
  // //ask lowercase
  var includeLowerCase = window.confirm("Do you want lower case?");
  var includeUpperCase = window.confirm("Do you want upper case?");
  var includeSpecialCharecters = window.confirm("Do you want any special charecters?");
  var includeNumbers = window.confirm("Do you want numbers?");

  //create password for the user
  //generate randomlowercasletter
  var randomLowerCase = function () {
    var lowerCaseArr = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    return lowerCaseArr[Math.floor(Math.random() * lowerCaseArr.length)];
  };

  //function to generate randomuppercase
  var randomUpperCase = function () {
    var upperCaseArr = [  "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",];
    return upperCaseArr[Math.floor(Math.random() * upperCaseArr.length)];
  };


  //function to generate randomspecialcharecter
  var randomSpecialCharecter = function () {
    var specialCharecterArr = [];
    return specialCharecterArr[Math.floor(Math.random() * specialCharecterArr.length)];
  };

  //function to generate randomnumber
  var randomNumber = function () {
    var numberArr =  [];
    return numberArr[Math.floor(Math.random() * numberArr.length)];
  };

  //loop to concatenate random charecters to password variable
  for (i = 0; i < passwordLength; i++) {
    password = password + randomLowerCase();
  }

  //display password on page
  console.log(password);
};

//event listener for password button clicks
addEventListener("Generate Password", generatePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Collects user input and generates password
function generatePassword() {
  // series of prompts for password criteria
  var passwordLength = prompt("How many characters would you like your password to be? (8-128)");
  // Validates user input
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a number between 8 and 128.");
    return generatePassword();
  }
  var passwordLowercase = confirm("Would you like to include lowercase letters?");
  var passwordUppercase = confirm("Would you like to include uppercase letters?");
  var passwordNumbers = confirm("Would you like to include numbers?");
  var passwordSpecial = confirm("Would you like to include special characters?");

  // Validates user input
  if (passwordLowercase === false && passwordUppercase === false && passwordNumbers === false && passwordSpecial === false) {
    alert("Please choose at least one character type.");
    return generatePassword();
  }

  // Generates password based on user input
  if (passwordLowercase === true && passwordUppercase === true && passwordNumbers === true && passwordSpecial === true) {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    var password = "";
    for (var i = 0, n = charset.length; i < passwordLength; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    // Checks to make sure password meets criteria
    if (password.match(/[a-z]/g) && password.match(/[A-Z]/g) && password.match(/[0-9]/g) && password.match(/[^\w\s]/g)) {
      return password;
    } else {
      alert("Password does not meet criteria. Please try again.");
      return generatePassword();
    }
  } else if (passwordLowercase === true && passwordUppercase === true && passwordNumbers === true && passwordSpecial === false) {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var password = "";
    for (var i = 0, n = charset.length; i < passwordLength; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    // Checks to make sure password meets criteria
    if (password.match(/[a-z]/g) && password.match(/[A-Z]/g) && password.match(/[0-9]/g)) {
      return password;
    } else {
      alert("Password does not meet criteria. Please try again.");
      return generatePassword();
    }
  } else if (passwordLowercase === true && passwordUppercase === true && passwordNumbers === false && passwordSpecial === false) {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var password = "";
    for (var i = 0, n = charset.length; i < passwordLength; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    // Checks to make sure password meets criteria
    if (password.match(/[a-z]/g) && password.match(/[A-Z]/g)) {
      return password;
    } else {
      alert("Password does not meet criteria. Please try again.");
      return generatePassword();
    }
  } else if (passwordLowercase === true && passwordUppercase === false && passwordNumbers === false && passwordSpecial === false) {
    var charset = "abcdefghijklmnopqrstuvwxyz";
    var password = "";
    for (var i = 0, n = charset.length; i < passwordLength; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    // Checks to make sure password meets criteria
    if (password.match(/[a-z]/g)) {
      return password;
    } else {
      alert("Password does not meet criteria. Please try again.");
      return generatePassword();
    }
  } else if (passwordLowercase === false && passwordUppercase === true && passwordNumbers === true && passwordSpecial === true) {
    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    var password = "";
    for (var i = 0, n = charset.length; i < passwordLength; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    // Checks to make sure password meets criteria
    if (password.match(/[A-Z]/g) && password.match(/[0-9]/g) && password.match(/[^\w\s]/g)) {
      return password;
    } else {
      alert("Password does not meet criteria. Please try again.");
      return generatePassword();
    }
  } else if (passwordLowercase === false && passwordUppercase === true && passwordNumbers === true && passwordSpecial === false) {
    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var password = "";
    for (var i = 0, n = charset.length; i < passwordLength; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    // Checks to make sure password meets criteria
    if (password.match(/[A-Z]/g) && password.match(/[0-9]/g)) {
      return password;
    } else {
      alert("Password does not meet criteria. Please try again.");
      return generatePassword();
    }
  } else if (passwordLowercase === false && passwordUppercase === true && passwordNumbers === false && passwordSpecial === false) {
    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var password = "";
    for (var i = 0, n = charset.length; i < passwordLength; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    // Checks to make sure password meets criteria
    if (password.match(/[A-Z]/g)) {
      return password;
    } else {
      alert("Password does not meet criteria. Please try again.");
      return generatePassword();
    }
  } else if (passwordLowercase === false && passwordUppercase === false && passwordNumbers === true && passwordSpecial === true) {
    var charset = "0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    var password = "";
    for (var i = 0, n = charset.length; i < passwordLength; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    // Checks to make sure password meets criteria
    if (password.match(/[0-9]/g) && password.match(/[^\w\s]/g)) {
      return password;
    } else {
      alert("Password does not meet criteria. Please try again.");
      return generatePassword();
    }
  } else if (passwordLowercase === false && passwordUppercase === false && passwordNumbers === true && passwordSpecial === false) {
    var charset = "0123456789";
    var password = "";
    for (var i = 0, n = charset.length; i < passwordLength; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n)); 
    }
    // Checks to make sure password meets criteria
    if (password.match(/[0-9]/g)) {
      return password;
    } else {
      alert("Password does not meet criteria. Please try again.");
      return generatePassword();
    }
  } else if (passwordLowercase === false && passwordUppercase === false && passwordNumbers === false && passwordSpecial === true) {
    var charset = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    var password = "";
    for (var i = 0, n = charset.length; i < passwordLength; ++i) {
      password += charset.charAt(Math.floor(Math.random()* n));
    }
    // Checks to make sure password meets criteria
    if (password.match(/[^\w\s]/g)) {
      return password;
    } else {
      alert("Password does not meet criteria. Please try again.");
      return generatePassword();
    }
  } else if (passwordLowercase === true && passwordUppercase === false && passwordNumbers === true && passwordSpecial === true) {
    var charset = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    var password = "";
    for (var i = 0, n = charset.length; i < passwordLength; ++i) {
      password += charset.charAt(Math.floor(Math.random()* n));
    }
    // Checks to make sure password meets criteria
    if (password.match(/[a-z]/g) && password.match(/[0-9]/g) && password.match(/[^\w\s]/g)) {
      return password;
    } else {
      alert("Password does not meet criteria. Please try again.");
      return generatePassword();
    }
  } else if (passwordLowercase === true && passwordUppercase === false && passwordNumbers === true && passwordSpecial === false) {
    var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
    var password = "";
    for (var i = 0, n = charset.length; i < passwordLength; ++i) {
      password +=charset.charAt(Math.floor(Math.random()* n));
    }
    return password;
  } else if (passwordLowercase === true && passwordUppercase === false && passwordNumbers === false && passwordSpecial === true) {
    var charset = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+~`|}{[]:;?><,./-=";
    var password = "";
    for (var i = 0, n = charset.length; i < passwordLength; ++i) {
      password +=charset.charAt(Math.floor(Math.random()* n));
    }
    // Checks to make sure password meets criteria
    if (password.match(/[a-z]/g) && password.match(/[^\w\s]/g)) {
      return password;
    } else {
      alert("Password does not meet criteria. Please try again.");
      return generatePassword();
    }
  } else if (passwordLowercase === false && passwordUppercase === true && passwordNumbers === false && passwordSpecial === true) {
    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+~`|}{[]:;?><,./-=";
    var password = "";
    for (var i = 0, n = charset.length; i < passwordLength; ++i) {
      password +=charset.charAt(Math.floor(Math.random()* n));
    }
    // Checks to make sure password meets criteria
    if (password.match(/[A-Z]/g) && password.match(/[^\w\s]/g)) {
      return password;
    } else {
      alert("Password does not meet criteria. Please try again.");
      return generatePassword();
    }
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

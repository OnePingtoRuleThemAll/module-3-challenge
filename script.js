<<<<<<< HEAD
//Writes users new password
var minPasswordLength = 8;//Minimum password length
var maxPasswordLength = 128;//Maximum password length

//String values with the possible password characters
var characterLibrary = "";
var alphaLowerLibrary = "abcdefghijklmnopqrstuvwxyz";
var alphaUpperLibrary = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
var numberLibrary = "0123456789"
var symbolsLibrary = "!@#$%^&*()";

//Generates password depending on what user chooses
function generatePassword(passwordLength){

  passwordContainer = ""; //Empty string to hold password during script
  for(index = 0; index < passwordLength; index++){
    var randomChar = characterLibrary.charAt(Math.random(Math.floor) * characterLibrary.length); //Grabs the random character from the character library 
    passwordContainer += randomChar; //Adds the random character to the empty string
  }

//Returns the password string
  return passwordContainer;
  
}

//Asks user for the password length
function passwordLength(){
  var length = prompt("How long would you like your password to be?");
  if (length < minPasswordLength || length > maxPasswordLength){ //Verfies or confirms if password meets required parameters
    alert("The length must be greater than " + minPasswordLength + " and less than " + maxPasswordLength + ". \nPlease try again!!"); //Tells the user that the password is the incorrect length and requires them to try again. 
    passwordLength();
  }

//Returns the length entered 
  return length;

}

//Asks if user would like lower case characters
function lowerLetterCase(){
//Confirm window appears, prompts user if the user wants lower case values
  var letterCaseInput = confirm("Would you like LOWER CASE characters in your password? \nYes - Press OK \nNo - Press Cancel");
//User validation, displays the user selection.
  if (letterCaseInput == true){
    alert("Okie doke! There will be LOWER CASE characters in your password!"); //Tells user their choice to include lower case
    characterLibrary += alphaLowerLibrary; //Adds the lower case values into the password to be generated
    
  }else{
    alert("Okie doke! There will NOT be LOWER CASE characters in your password!"); //Alerts the user of their choice not to inclue lower case
  }

//Returns true or false depending on selection
  return letterCaseInput;
}

//Asks if user would like upper case characters
function upperLetterCase(){
  var letterCaseInput = confirm("Would you like UPPER case characters in your password? \nYes - Press OK \nNo - Press Cancel");
  if (letterCaseInput == true){
    alert("Okie doke! There will be UPPER CASE characters in your password!"); //Tells user their choice to include upper case
    characterLibrary += alphaUpperLibrary;
  }else{
    alert("Okie doke! There will NOT be UPPER CASE characters in your password!"); //Tells user their choice to not include upper case
  }

//Returns true or false depending on selection
  return letterCaseInput;
}

//Asks if user would like special characters
function symbolsPrompt(){
  var letterCaseInput = confirm("Would you like SPECIAL characters in your password? \nYes - Press OK \nNo - Press Cancel");
  if (letterCaseInput == true){
    alert("Okie doke! There will be SPECIAL characters in your password!"); //Tells user their choice to include special characters
    characterLibrary += symbolsLibrary;
  }else{
    alert("Okie doke! There will NOT be SPECIAL characters in your password!"); //Tells user their choice to not include special characters
  }

//Returns true or false depending on selection
  return letterCaseInput;
}

//Asks if user would like numbers
function numberPrompt(){
  var letterCaseInput = confirm("Would you like NUMBER characters in your password? \nYes - Press OK \nNo - Press Cancel");
  if (letterCaseInput == true){
    alert("Okie doke! There will be NUMER characters in your password!"); //Tells user their choice to include number characters
    characterLibrary += numberLibrary;
  }else{
    alert("Okie doke! There will NOT be NUMBER characters in your password!"); //Tells user of their choice to not include number characters
  }

//Returns true or false depending on selection
  return letterCaseInput;
}

//Shows user what their selections were
function passwordVerification(length, lower, upper, symbol, number){

  var userInput = confirm("Would you like to continue with the following password characters? \n\nPassord Length: " + length + "\nLower Case: " + lower + "\nUpper Case: " + upper + "\nSymbols: "+ symbol + "\nNumbers: " + number +"\n\nYes - Press OK \nNo - Press Cancel ");

//If user presses cancel the prompt will restart
  if(userInput == false){
    writePassword()
  }

}

//Will get references to #generate
var generateBtn = document.querySelector("#generate");

//Writes password to #password input
function writePassword() {
//Clears out characterLibrary when a user attempts to create a new passord. If not cleared the characters from the previous library will be used. 
  characterLibrary = ""
  
  var length = passwordLength(); //Calls the passwordLength function for password length
  var lower = lowerLetterCase(); //Calls the lowerLetterCase function for lower case values
  var upper = upperLetterCase(); //Calls the upperLetterCase function for  upper case values
  var symbol = symbolsPrompt(); //Calls the symbolsPrompt function for symbols values
  var number = numberPrompt(); //Calls the numberPrompt function for numbers values

  //Checks if the user did not choose any values to add to the character library
  if(characterLibrary == "")
  {
    alert("You have chosen no characters, please try again."); //Alerts the user of blank choices
  }else{
    passwordVerification(length, lower, upper, symbol, number); //Calls the password setting validation window
    applyPassword(); //Creates password in secure password text box if applicable. 

  }


//Orginal project code commented out for testing. 
    function applyPassword(){
        var password = generatePassword(length);
        
        var passwordText = document.querySelector("#password");
      
        passwordText.value = password;
        }
      }
      // Add event listener to generate button
      generateBtn.addEventListener("click", writePassword);
=======
//Writes users new password
var minPasswordLength = 8;//Minimum password length
var maxPasswordLength = 128;//Maximum password length

//String values with the possible password characters
var characterLibrary = "";
var alphaLowerLibrary = "abcdefghijklmnopqrstuvwxyz";
var alphaUpperLibrary = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
var numberLibrary = "0123456789"
var symbolsLibrary = "!@#$%^&*()";

//Generates password depending on what user chooses
function generatePassword(passwordLength){

  passwordContainer = ""; //Empty string to hold password during script
  for(index = 0; index < passwordLength; index++){
    var randomChar = characterLibrary.charAt(Math.random(Math.floor) * characterLibrary.length); //Grabs the random character from the character library 
    passwordContainer += randomChar; //Adds the random character to the empty string
  }

//Returns the password string
  return passwordContainer;
  
}

//Asks user for the password length
function passwordLength(){
  var length = prompt("How long would you like your password to be?");
  if (length < minPasswordLength || length > maxPasswordLength){ //Verfies or confirms if password meets required parameters
    alert("The length must be greater than " + minPasswordLength + " and less than " + maxPasswordLength + ". \nPlease try again!!"); //Tells the user that the password is the incorrect length and requires them to try again. 
    passwordLength();
  }

//Returns the length entered 
  return length;

}

//Asks if user would like lower case characters
function lowerLetterCase(){
//Confirm window appears, prompts user if the user wants lower case values
  var letterCaseInput = confirm("Would you like LOWER CASE characters in your password? \nYes - Press OK \nNo - Press Cancel");
//User validation, displays the user selection.
  if (letterCaseInput == true){
    alert("Okie doke! There will be LOWER CASE characters in your password!"); //Tells user their choice to include lower case
    characterLibrary += alphaLowerLibrary; //Adds the lower case values into the password to be generated
    
  }else{
    alert("Okie doke! There will NOT be LOWER CASE characters in your password!"); //Alerts the user of their choice not to inclue lower case
  }

//Returns true or false depending on selection
  return letterCaseInput;
}

//Asks if user would like upper case characters
function upperLetterCase(){
  var letterCaseInput = confirm("Would you like UPPER case characters in your password? \nYes - Press OK \nNo - Press Cancel");
  if (letterCaseInput == true){
    alert("Okie doke! There will be UPPER CASE characters in your password!"); //Tells user their choice to include upper case
    characterLibrary += alphaUpperLibrary;
  }else{
    alert("Okie doke! There will NOT be UPPER CASE characters in your password!"); //Tells user their choice to not include upper case
  }

//Returns true or false depending on selection
  return letterCaseInput;
}

//Asks if user would like special characters
function symbolsPrompt(){
  var letterCaseInput = confirm("Would you like SPECIAL characters in your password? \nYes - Press OK \nNo - Press Cancel");
  if (letterCaseInput == true){
    alert("Okie doke! There will be SPECIAL characters in your password!"); //Tells user their choice to include special characters
    characterLibrary += symbolsLibrary;
  }else{
    alert("Okie doke! There will NOT be SPECIAL characters in your password!"); //Tells user their choice to not include special characters
  }

//Returns true or false depending on selection
  return letterCaseInput;
}

//Asks if user would like numbers
function numberPrompt(){
  var letterCaseInput = confirm("Would you like NUMBER characters in your password? \nYes - Press OK \nNo - Press Cancel");
  if (letterCaseInput == true){
    alert("Okie doke! There will be NUMER characters in your password!"); //Tells user their choice to include number characters
    characterLibrary += numberLibrary;
  }else{
    alert("Okie doke! There will NOT be NUMBER characters in your password!"); //Tells user of their choice to not include number characters
  }

//Returns true or false depending on selection
  return letterCaseInput;
}

//Shows user what their selections were
function passwordVerification(length, lower, upper, symbol, number){

  var userInput = confirm("Would you like to continue with the following password characters? \n\nPassord Length: " + length + "\nLower Case: " + lower + "\nUpper Case: " + upper + "\nSymbols: "+ symbol + "\nNumbers: " + number +"\n\nYes - Press OK \nNo - Press Cancel ");

//If user presses cancel the prompt will restart
  if(userInput == false){
    writePassword()
  }

}

//Will get references to #generate
var generateBtn = document.querySelector("#generate");

//Writes password to #password input
function writePassword() {
//Clears out characterLibrary when a user attempts to create a new passord. If not cleared the characters from the previous library will be used. 
  characterLibrary = ""
  
  var length = passwordLength(); //Calls the passwordLength function for password length
  var lower = lowerLetterCase(); //Calls the lowerLetterCase function for lower case values
  var upper = upperLetterCase(); //Calls the upperLetterCase function for  upper case values
  var symbol = symbolsPrompt(); //Calls the symbolsPrompt function for symbols values
  var number = numberPrompt(); //Calls the numberPrompt function for numbers values

  //Checks if the user did not choose any values to add to the character library
  if(characterLibrary == "")
  {
    alert("You have chosen no characters, please try again."); //Alerts the user of blank choices
  }else{
    passwordVerification(length, lower, upper, symbol, number); //Calls the password setting validation window
    applyPassword(); //Creates password in secure password text box if applicable. 

  }


//Orginal project code commented out for testing. 
    function applyPassword(){
        var password = generatePassword(length);
        
        var passwordText = document.querySelector("#password");
      
        passwordText.value = password;
        }
      }
      // Add event listener to generate button
      generateBtn.addEventListener("click", writePassword);
>>>>>>> bf993d8ec04ec2715406d1324b34b14eacc937eb

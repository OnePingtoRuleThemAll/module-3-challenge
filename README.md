# User Story
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security


## Acceptance Criteria
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page.

## Description:
This application is a password generator that creates a random password for a user when they respond to the prompted questions on what they would like included in their password.

### Usage instructions: 
When you go to the page, click the red "Generate Password" button. [!image](red-button.png)
A pop up box will appear that asks how long you would like your password to be. [!image](password-length.png)
Enter a number between 8 and 128, then press OK. (Note, if you choose a number outside of those parameters, you will recieve the following message: [!image](error-message.png))
Go through all of the prompted questions and choose which parameters you'd like included in your secure password.
When you are asked if you would like to continue with the following password characters, if you are satisfied with your choices, click "OK". [!image](continue-option.png)
Your secure password will then generate within the screen!
[!image](new-password.png) 




### Credits: 
-Applied some of the methods shown on creating a password generator from 'FoolishDeveloper':https://foolishdeveloper.com/random-password-generator-with-javascript/
-Held a study group over the weekend with some classmates (don't know if we should credit this but it feels wrong not to.)
-Used a lot of our weekly lessons we learned in our week 3 activities.


### License: 
N/A

### Contact information: 
GitHub profile: OnePingtoRuleThemAll

### Examples and screenshots:
[!image](red-button.png)
[!image](error-message.png)
[!image](password-length.png)
[!image](continue-option.png)
[!image](new-password.png)

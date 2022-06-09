//Official Instructions
// 1. Array to hold all possible chracters - done
// 2. button to render all password options - done
// 3.populate the input fields with 12 of the password characters in a random order when the get password button is clicked.

//Stretch Goals
//Ability to set the password length
//Implement a one click copy password to clipboard feature (requires using an input for each password field)

//DOM Elements

let passwordForm = document.getElementById("password-generator-form");
let passwordInput1 = document.getElementById("password-1");
let passwordInput2 = document.getElementById("password-2");
let passwordInput3 = document.getElementById("password-3");
let passwordInput4 = document.getElementById("password-4");

//Event Listeners
passwordForm.addEventListener("submit", createPassword);

//Submit form and populate password inputs when button is clicked
function createPassword(e) {
  e.preventDefault();
  let password = (Math.random() + 1).toString(36).substring(2);
  let password2 = (Math.random() + 1).toString(36).substring(2);
  let password3 = (Math.random() + 1).toString(36).substring(2);
  let password4 = (Math.random() + 1).toString(36).substring(2);
  passwordInput1.textContent = password;
  passwordInput2.textContent = password2;
  passwordInput3.textContent = password3;
  passwordInput4.textContent = password4;
  return password;
}

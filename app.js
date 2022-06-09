//Official Instructions
// 1. Array to hold all possible chracters - done
// 2. button to render all password options - done
// 3.populate the input fields with 12 of the password characters in a random order when the get password button is clicked.

//Stretch Goals
//Ability to set the password length
//Implement a one click copy password to clipboard feature (requires using an input for each password field)

//DOM Elements
let passwordResult = document.querySelector(".password-result");
let passwordForm = document.getElementById("password-generator-form");
let passwordBtn = document.querySelector("#get-password-btn");
let passwordChars = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "q",
  "w",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  "<",
  ">",
  "?",
];

//Event Listeners
passwordForm.addEventListener("submit", createPasswords);

//Populate all password fields

function renderPasswords() {
  let randomChar = Math.floor(Math.random() * 75 + 1);
  passwordResult.textContent = passwordChars[randomChar];
}

renderPasswords();

//Submit form and populate password inputs when button is clicked
function createPasswords(e) {
  e.preventDefault();
  renderPasswords();
  console.log("form submitted");
}

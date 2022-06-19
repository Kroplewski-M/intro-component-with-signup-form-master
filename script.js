let firstname = document.querySelector("#firstname");
let lastname = document.querySelector("#lastname");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let button = document.querySelector("#btn");

let firstNameError = document.querySelector("#firstNameError");
let LastNameError = document.querySelector("#lastNameError");
let EmailError = document.querySelector("#emailError");
let PasswordError = document.querySelector("#passwordError");

button.addEventListener("click", function (event) {
  event.preventDefault();
});

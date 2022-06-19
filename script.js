let firstname = document.querySelector("#firstName");
let lastname = document.querySelector("#lastName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let button = document.querySelector("#btn");

let firstNameError = document.querySelector("#firstNameError");
let LastNameError = document.querySelector("#lastNameError");
let emailError = document.querySelector("#emailError");
let passwordError = document.querySelector("#passwordError");

function showError(borderId, errorDivId) {
  errorDivId.classList.remove("hidden");
  borderId.classList.add("border-red-300");
}
function removeError(borderId, errorDivId) {
  errorDivId.classList.add("hidden");
  borderId.classList.add("border-black");
}

function isEmpty(inputVar, errorDivId) {
  if (inputVar.value == "") {
    showError(inputVar, errorDivId);
    return false;
  } else {
    removeError(inputVar, errorDivId);
    return true;
  }
}

function validateEmail(inputVar, errorDivId) {
  if (inputVar.value == "" || !inputVar.includes("@")) {
    showError(inputVar, errorDivId);
    return false;
  } else {
    removeError(inputVar, errorDivId);
    console.log("true");
    return true;
  }
}

button.addEventListener("click", function (event) {
  event.preventDefault();

  //isEmpty(firstname, firstNameError);
  //isEmpty(lastname, LastNameError);
  //isEmpty(password, passwordError);
  validateEmail(email, emailError);
});

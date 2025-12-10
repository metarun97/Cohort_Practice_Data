let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function (dets) {
  dets.preventDefault();

  document.querySelector("#emailError").textContent = "";
  document.querySelector("#passwordError").textContent = "";
  document.querySelector(".res-msg p").textContent = "";


  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  let emailRes = emailRegex.test(email.value);
  let passwordRes = passwordRegex.test(password.value);

  let isValid = true;

  if (!emailRes) {
    document.querySelector("#emailError").textContent = "Email is incorrect";
    document.querySelector("#emailError").style.display = "initial";
    isValid = false;
  }
  if (!passwordRes) {
    document.querySelector("#passwordError").textContent = "Password is incorrect";
    document.querySelector("#passwordError").style.display = "initial";
    isValid = false;
  }

  if (isValid) {
    document.querySelector(".res-msg p").textContent = "Submit Successfully!";
    document.querySelector(".res-msg p").style.color = "green";
  }
})

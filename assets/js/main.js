const subscribe = document.querySelector("#subscribe");
const newsletter = document.querySelector(".newsletter");
const success = document.querySelector(".success");

subscribe.addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.querySelector("#email");
  const emailLabel = document.querySelector("#emailLabel");
  const error = document.querySelector(".error");
  const emailValue = email.value;
  const validateEmail = (theEmail) => {
    return theEmail.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  if (validateEmail(emailValue)) {
    newsletter.style.display = "none";
    success.style.display = "flex";
  } else {
    email.style.color = "#ff6257";
    email.style.backgroundColor = "#ff625766";
    email.style.border = "1px solid #ff6257";
    if (!emailLabel.contains(error)) {
      let emailError = document.createElement("span");
      emailError.classList.add("error");
      emailError.innerHTML = "valid email required";
      emailError.style.color = "#ff6257";
      emailLabel.appendChild(emailError);
    }
  }
  return false;
});

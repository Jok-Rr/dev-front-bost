function genForm() {
  const app = document.querySelector("#app");

  const form = document.createElement("form");
  form.setAttribute("onsubmit", "checkInput()");
  form.setAttribute("action", "");

  const inputName = document.createElement("input");
  inputName.setAttribute("type", "text");
  inputName.setAttribute("id", "name");
  inputName.setAttribute("placeholder", "Nom");
  inputName.setAttribute("name", "name");

  const inputSurname = document.createElement("input");
  inputSurname.setAttribute("type", "text");
  inputSurname.setAttribute("id", "surname");
  inputSurname.setAttribute("placeholder", "Prenom");
  inputSurname.setAttribute("name", "surname");

  const inputEmail = document.createElement("input");
  inputEmail.setAttribute("type", "email");
  inputEmail.setAttribute("id", "email");

  inputEmail.setAttribute("placeholder", "Email");
  inputEmail.setAttribute("name", "email");

  const inputPassword = document.createElement("input");
  inputPassword.setAttribute("type", "password");
  inputPassword.setAttribute("id", "password");
  inputPassword.setAttribute("placeholder", "Mot de passe");
  inputPassword.setAttribute("name", "password");

  const submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "Valider");

  form.appendChild(inputName);
  form.appendChild(inputSurname);
  form.appendChild(inputEmail);
  form.appendChild(inputPassword);
  form.appendChild(submit);

  app.appendChild(form);
}

function checkInput() {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const nameRGEX = new RegExp("^s*[a-zA-Z]{5,10}$");
  const surnameRGEX = new RegExp("^s*[a-zA-Z]{5,10}$");
  const emailRGEX = new RegExp(
    "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
  );
  const passwordRGEX = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );

  const nameResult = nameRGEX.test(name);
  const surnameResult = surnameRGEX.test(surname);
  const emailResult = emailRGEX.test(email);
  const passwordResult = passwordRGEX.test(password);

  if (!nameResult) {
    alert("Le nom est incorrect");
  }else{
      alert("Le nom est correct");

  }
  if (!surnameResult) {
    alert("Le prénom est incorrect");
  }else{
      alert("Le prénom est correct");
  }
  if (!emailResult) {
    alert("L'email est incorrect");
  }else{
      alert("L'email est correct");
  }
  if (!passwordResult) {
    alert("Le mot de passe est incorrect");
  }else{
      alert("Le mot de passe est correct");
  }
}

genForm();

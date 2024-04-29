function onLogin() {
  var usernameInput = document.getElementById('usernameInput');
  var passwordInput = document.getElementById('passwordInput');
  var loginButton = document.getElementById('loginButton');
  var logoutButton = document.getElementById('logoutButton');
  var adminText = document.getElementById('adminText');
  var managerText = document.getElementById('managerText');
  var operatorText = document.getElementById('operatorText');
  var basicText = document.getElementById('basicText');

  if (!usernameInput.value || !passwordInput.value) {
    alert("Silakan isi kedua field username dan password.");
    return;
  }

  localStorage.setItem("username", usernameInput.value);
  logoutButton.style.display = "block";

  if (usernameInput.value == "admin" && passwordInput.value == "admin123") {
    localStorage.setItem("role", "admin");
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "none";
    basicText.style.display = "none";
    adminText.style.display = "block";
  } else if (usernameInput.value == "manager" && passwordInput.value == "manager123") {
    localStorage.setItem("role", "manager");
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "none";
    basicText.style.display = "none";
    managerText.style.display = "block";
  } else if (usernameInput.value == "operator" && passwordInput.value == "operator123") {
    localStorage.setItem("role", "operator");
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "none";
    basicText.style.display = "none";
    operatorText.style.display = "block";
  } else {
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "none";
    localStorage.setItem("role", "basic");
    adminText.style.display = "none";
    managerText.style.display = "none";
    operatorText.style.display = "none";
    basicText.innerText = "LOGIN SEBAGAI " + usernameInput.value;
    basicText.style.display = "block";
  }
}

function onLogout() {
  var usernameInput = document.getElementById('usernameInput');
  var passwordInput = document.getElementById('passwordInput');
  var loginButton = document.getElementById('loginButton');
  var logoutButton = document.getElementById('logoutButton');
  var adminText = document.getElementById('adminText');
  var managerText = document.getElementById('managerText');
  var operatorText = document.getElementById('operatorText');
  var basicText = document.getElementById('basicText');

  localStorage.removeItem("username");
  localStorage.removeItem("role");
  usernameInput.value = "";
  passwordInput.value = "";
  logoutButton.style.display = "none";
  usernameInput.style.display = "block";
  passwordInput.style.display = "block";
  loginButton.style.display = "block";
  adminText.style.display = "none";
  managerText.style.display = "none";
  operatorText.style.display = "none";
  basicText.style.display = "none";
}

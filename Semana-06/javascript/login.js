window.onload = function () {
  var userLogin = document.getElementById("userLogin");
  userLogin.setAttribute("placeholder", "Email");

  var passLogin = document.getElementById("passLogin");
  passLogin.setAttribute("placeholder", "Password");

  var buttonLogin = document.getElementById("button");
  buttonLogin.onclick = function (a) {
    a.preventDefault();
  };
  button.onclick = validateForm;

  function validateForm() {
    var e = document.forms["loginForm"]["emailName"].value;
    var p = document.forms["loginForm"]["passName"].value;
    if (e == "") {
      alert("Email must be filled out");
      return false;
    }
    if (p == "") {
      alert("Password must be filled out");
      return false;
    }
    validateForm();
  }
};

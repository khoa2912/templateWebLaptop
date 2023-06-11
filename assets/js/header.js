
var modal = document.getElementById("modal");
var modal_overlay = document.getElementById("modal__overlay");
var login_form = document.getElementById("login-form");
var auth_form = document.getElementById("auth-form");
var register = document.getElementById("click__register");
var login = document.getElementById("click__login");



register.onclick = function () {
    modal.style.display = "flex";
    auth_form.style.display = "block"
    login_form.style.display = "none"
}

login.onclick = function () {
    modal.style.display = "flex";
    auth_form.style.display = "none"
    login_form.style.display = "block"
}

modal_overlay.onclick = function(event) {
    modal.style.display = "none";
}

var changelogin = document.getElementsByClassName("login__switch-btn")[0];
changelogin.onclick = function(event) {
    auth_form.style.display = "none"
    login_form.style.display = "block"
}

var changeregister = document.getElementsByClassName("auth__switch-btn")[0];
changeregister.onclick = function(event) {
    auth_form.style.display = "block"
    login_form.style.display = "none"
}


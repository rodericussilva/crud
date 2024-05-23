
function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
}

function onChangePassword() {
    toggleButtonsDisable();
    toggleEmailErrors();
}

function login() {
    window.location.href = "pages/home/home.html";
}

function register() {
    window.location.href = "pages/register/register.html";
}

function isEmailValid() {
    const email = form.email().value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function isPasswordValid() {
    return form.password().value ? true : false;
}

function toggleEmailErrors() {
    const email = form.email().value;

    form.emailRequiredError().style.display = email ? "none" : "block";

    // if (!email) {
    //     form.emailRequiredError().style.display = "block";
    // } else {
    //     form.emailRequiredError().style.display = "none";
    // }

    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";

    // if (validateEmail(email)) {
    //     form.emailInvalidError().style.display = "none";
    // } else {
    //     form.emailInvalidError().style.display = "block";
    // }
}

function togglePasswordErrors() {
    const password = form.password().value;

    form.passwordRequiredError().style.display = password ? "none" : "block";
}

function toggleButtonsDisable() {
    const emailValid = isEmailValid();
    form.recoverPasswordButton().disabled = !emailValid;

    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !emailValid || !passwordValid;
}

const form = {
    email: () => document.getElementById("email"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    loginButton: () => document.getElementById("login-button"),
    password: () => document.getElementById("password"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
    recoverPasswordButton: () => document.getElementById("recover-password-button"),
} 
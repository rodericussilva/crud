
function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
}

function onChangePassword() {
    toggleButtonsDisable();
    toggleEmailErrors();
}

function isEmailValid() {
    const email = form.email().value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function isPasswordValid() {
    const password = form.password().value;
    if (!password) {
        return false;
    }
    return true;
}

function toggleEmailErrors() {
    const email = form.email().value;

    form.emailRequiredError().style.display = email ? 'none' : "block";

    // if (!email) {
    //     form.emailRequiredError().style.display = "block";
    // } else {
    //     form.emailRequiredError().style.display = "none";
    // }

    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "black";

    // if (validateEmail(email)) {
    //     form.emailInvalidError().style.display = "none";
    // } else {
    //     form.emailInvalidError().style.display = "block";
    // }
}

function tooglePasswordErrors() {
    const password = form.password().value;

    form.passwordRequiredError().style.display = password ? "none" : "block";
}

function toggleButtonsDisable() {
    const emailValid = isEmailValid();
    form.recoverPassword().disabled = !emailValid;

    const passwordValid = isEmailValid();
    form.recoverPassword().disabled = !emailValid || !passwordValid;
}

const form = {
    email: () => document.getElementById('email'),
    password: () => document.getElementById('password'),
    loginButton: () => document.getElementById('login'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    emailRequiredError: () => document.getElementById('email-required-error'),
    recoverPassword: () => document.getElementById('recover-password-button'),
    passwordRequiredError: () => document.getElementById('password-required-error')
}
var APP = {};

// IIFE
(function (exports) {

function ContactController(el) {
    this._el = el;
    this._formEl = this._query(".student-form");
    this._formEl.addEventListener("submit", this._handleFormSubmit.bind(this));
    this._ageInput = this._query("#age");
    this._ageOutput = this._query("#age-output");
    this._ageInput.addEventListener("input", this._handleAgeChange.bind(this));
}

ContactController.prototype._handleFormSubmit = function (ev) {
    // The form is valid as long as user enters email.
    var pwdInput = this._query("#pwd");
    var pwd = pwdInput.value;
    var confirm = this._query("#confirm-pwd").value;

    if (pwd !== confirm) {
        ev.preventDefault();
        this._showErrorMessage();
        pwdInput.focus();
    }
};

ContactController.prototype._handleAgeChange = function (ev) {
    this._ageOutput.textContent = "(" + this._ageInput.value + ")";
};

ContactController.prototype._query = function (selector) {
    return this._el.querySelector(selector);
};

ContactController.prototype._showErrorMessage = function () {
    var msgEl = this._query(".error-message");
    msgEl.classList.remove("hidden");
};

exports.ContactController = ContactController;

}(APP));


console.log("Hello world from JS!");

var APP = {};

// IIFE
(function (exports) {

function ContactController(el) {
    this._formEl = el.querySelector(".student-form");
    this._formEl.addEventListener("submit", this._handleFormSubmit.bind(this));
}

ContactController.prototype._handleFormSubmit = function (ev) {
    // The form is valid as long as user enters email.
    var emailInput = this._formEl.querySelector("#email");
    var isValid = !!emailInput.value;

    if (!isValid) {
        alert("Bad Input!");
        ev.preventDefault();
        emailInput.focus();
    }

};

exports.ContactController = ContactController;

}(APP));


console.log("Hello world from JS!");

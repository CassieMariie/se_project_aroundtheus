export default class FormValidator {
  constructor(settings, formEl) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._formEl = formEl;
  }

  _showInputError(inputEl, errorMessageEl) {
    const errorElement = this._formEl.querySelector(
      `#${this._inputSelector.id}-error`
    );
    inputEl.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessageEl;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputEl) {
    const errorElement = this._formEl.querySelector(
      `#${this._inputSelector.id}-error`
    );
    inputEl.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._errorClass);
  }

  _checkInputValidity(inputEl) {
    if (!inputEl.validity.valid) {
      this._showInputError(this._inputErrorClass, this._errorClass);
    } else {
      this._hideInputError(this._inputErrorClass);
    }
  }

  toggleButtonState(inputEls) {
    let foundInvalid = false;
    inputEls.forEach((inputEl) => {
      if (!inputEl.validity.valid) {
        foundInvalid = true;
      }
    });
  }

  disableSubmitButton() {
    this._settings.classList.add(this._inactiveButtonClass);
    submitButton.disabled = true;
  }

  enableSubmitButton() {
    submitButton.classList.remove(this._inactiveButtonClass);
    submitButton.disabled = false;
  }

  setEventListeners() {
    this._submitButton = this._formEl.querySelector(this._submitButtonSelector);
    this._inputElements = Array.from(
      this._formEl.querySelectorAll(this._inputSelector)
    );
    this._inputElements.forEach((inputEl) => {
      inputEl.addEventListener("input", (event) => {
        this._checkInputValidity(this._formEl, inputEl);
        this._toggleButtonState(this._inputElements, this._submitButton);
      });
    });
  }

  enableValidation() {
    this._formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this.setEventListeners();
  }
}

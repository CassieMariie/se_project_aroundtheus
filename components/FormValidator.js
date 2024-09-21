export default class FormValidator {
  constructor(settings, formEl) {
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._settings = settings;
    this._formEl = formEl;
  }

  _checkInputValidity(inputEl) {
    if (!inputEl.validity.valid) {
      showInputError(this._inputErrorClass, this._errorClass);
    } else {
      hideInputError(this._inputErrorClass);
    }
  }

  _showInputError(settings, formEl) {
    const errorMessageEl = this._inputErrorClass.querySelector(
      `#${this._inputSelector.id}-error`
    );
    inputEl.classList.add(this._inputErrorClass);
    errorMessageEl.textContent = this._settings.validationMessage;
    errorMessageEl.classList.add(this._errorClass);
  }

  _hideInputError(settings) {
    const errorMessageEl = this._settings.querySelector(
      `#${this._inputSelector.id}-error`
    );
    this._settings.classList.remove(this._inputErrorClass);
    errorMessageEl.textContent = "";
    errorMessageEl.classList.remove(this._errorClass);
  }

  enableValidation(addNewCardForm, profileEditForm) {
    this._formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    setEventListeners(addNewCardForm, profileEditForm);
  }

  setEventListeners(formEl, settings) {
    const submitButton = this._submitButtonSelector;
    this._thisInputSelector.forEach((inputEl) => {
      inputEl.addEventListener("input", (event) => {
        checkInputValidity(formEl, inputEl);
        toggleButtonState(inputEls, submitButton, settings);
      });
    });
  }

  toggleButtonState(inputEls, submitButton) {
    let foundInvalid = false;
    inputEls.forEach((inputEl) => {
      if (!inputEl.validity.valid) {
        foundInvalid = true;
      }
    });
    if (foundInvalid) {
      this._settings.classList.add(this._inactiveButtonClass);
      submitButton.disabled = true;
    } else {
      submitButton.classList.remove(this._inactiveButtonClass);
      submitButton.disabled = false;
    }
  }
}
